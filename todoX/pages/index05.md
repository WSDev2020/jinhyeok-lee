---
title: 서버 설정하기
key: linux virture
date: 2020-03-08
---

# 리눅스 네트워크 서버 활용하기

## 네트워크 구축 과정 실습하기

- - -

열씨미&게을러

**게을러** 퇴근 안 해?

**열씨미** 선배 먼저 퇴근하세요. 전 개인적으로 할 일이 있어서요.

**게을러** 불금인데 닭발에 소주라도 한잔 해야지.

**열씨미** 불금에 닭발 먹는 게 어울린다고 생각해요? 건강을 생각해서 음주는 적당히 하세요.

**게을러** 남 걱정해주는 척은… 어? 지난번 내가 봐 줬던 노트북 아냐?

**열씨미** 넵! 선배가 말씀하신 가상 시스템도 다 설치해뒀고, 이제 준비가 끝났으니 네트워크를 구축해보려고요.

**게을러** 내가 항상 얘기하듯 `시스템 관리`는 컴퓨터를 끄고 켤 줄만…

**열씨미** 그렇지 않아도 선배한테 물어볼 게 있었는데 잠깐만 시간 내 주세요.

**게을러** 선배 말도 자르는 예의바른 우리 후배님 보소. 세상에 공짜는 없는 법이니 삼겹살에 소주 한잔 사면 답변해드리리다.

**열씨미** 뭐예요! 아까는 닭발이었잖아요!

**게을러** 이보시게… 이 바닥에서 일하면서 `고객의 요구사항`이라는 건 언제든지 바뀔 수 있다는 사실쯤은 기본 상식 아니겠는가?

**열씨미** 알았어요. 알았어. 선배, 가상 시스템에 여러 게스트를 생성하고 각 게스트가 인터넷에 접속할 수 있도록 하는 데까지는 성공했는데요. 모든 네트워크가 이렇게 인터넷에 직접 연결되는 형태로 구성하는 건 아니잖아요? 우리 회사처럼 보안을 유지하기 위해 각 부서마다 네트워크 연결을 제한하거나 개발팀끼리 자료를 공유할 수 있도록 내부 네트워크를 따로 만들어보고 싶은데 가상 시스템에서도 이런 게 가능할까요?

**게을러** 물론이지. 리눅스 가상 시스템에서도 얼마든지 내부 네트워크를 추가해서 서브넷을 구성할 수 있다고.

**열씨미** 에이… 아무리 그래도 진짜 현장 실습과는 다르지 않을까요?

**게을러** 아무래도 물리적으로 네트워크를 구축하는 실습과는 분명 차이가 있겠지. 하지만 말야. 분명한 것은 이렇게 가상으로 내부 네트워크를 구축해보는 게 네트워크 관리자가 알고 있어야 할 원리를 이해하는 데 도움이 된다는 사실이야.

- - -

### 가상 시스템의 네트워크 연결 원리 이해하기

실제 물리적인 네트워크 연결은 네트워크 장치에 설치된 네트워크 인터페이스(LAN 어댑터 또는 무선 네트워크 어댑터)에서 케이블 또는 무선 신호를 거쳐 다시 접속 대상 장치의 네트워크 인터페이스를 통해 이루어집니다.

가상 시스템의 네트워크는 어떨까요?

실습에 앞서 각 게스트는 어떻게 연결되고 외부와 통신하는지 알아봅시다.

#### 브리지 연결로 외부와 통신하기

호스트가 게스트의 네트워크 연결을 처리합니다.

호스트는 각 게스트를 연결하는 가상 스위치처럼 동작합니다.

가상 시스템을 설치하면 시스템에 설치되어 있는 기본 네트워크 장치 외에 다른 장치를 확인할 수 있습니다.

ifconfig로 확인하면 물리적인 네트워크 인터페이스 eth0 외에 가상 시스템을 설치할 때 추가된 가상 네트워크 장치 virbr0이 보입니다.

```s
shinjaehun@losttemple:~$ ifconfig
eth0      Link encap:Ethernet HWaddr 08:9e:01:d3:f9:dc
          inet addr:192.168.0.2 Bcast:192.168.0.255 Mask:255.255.255.0
          inet6 addr: fe80::a9e:1ff:fed3:f9dc/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:19440 errors:0 dropped:0 overruns:0 frame:0
          TX packets:14107 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:21575520 (21.5 MB) TX bytes:2010242 (2.0 MB)
          Interrupt:17
...
virbr0    Link encap:Ethernet HWaddr 52:54:00:7b:64:0b
          inet addr:192.168.122.1 Bcast:192.168.122.255 Mask:255.255.255.0
          UP BROADCAST MULTICAST MTU:1500 Metric:1
          RX packets:102 errors:0 dropped:0 overruns:0 frame:0
          TX packets:121 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:8854 (8.8 KB) TX bytes:15831 (15.8 KB)
```

게스트를 시작해봅시다.

게스트가 시작되면 호스트의 네트워크 인터페이스 목록에 virbr0 외에 또 다른 가상 네트워크 장치 vnet1이 나타납니다.

```s
shinjaehun@losttemple:~$ vv guest
shinjaehun@losttemple:~$ ifconfig
......
vnet1     Link encap:Ethernet HWaddr fe:54:00:e3:5d:98
          inet6 addr: fe80::fc54:ff:fee3:5d98/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:16 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3217 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:500
          RX bytes:1224 (1.2 KB) TX bytes:173337 (173.3 KB)
```

- - -

**이렇게 하세요!**

다음과 같이 virt-viewer를 이용해서도 직접 가상 콘솔에 접속할 수 있습니다.

shinjaehun@losttemple:~$ virt-viewer -c qemu:///system guest &

- - -

게스트는 호스트 네트워크 인터페이스와 브리지 연결을 통해 다른 장치와 통신합니다.

말 그대로 호스트의 가상 네트워크 인터페이스를 다리 삼아 외부와 연결합니다.

그림 5-1을 볼까요? 게스트와 통신하는 브리지 네트워크 인터페이스는 virbr0이며 vnet1, vnet2는 게스트가 사용하는 가상 네트워크 인터페이스로 게스트 내부의 네트워크 인터페이스 eth0에 대응합니다.

ifconfig 결과를 살펴보면 브리지 네트워크 인터페이스 virbr0에 할당된 IP 주소는 게스트의 eth0과 같은 네트워크에 속해 있기 때문에 서로 통신이 가능합니다.

▼ 그림 5-1 가상 시스템의 네트워크 연결
![ ](/img/05/01.jpg)

#### 가상 네트워크 추가하기

5장에서는 가상 시스템이 제공하는 기본적인 가상 네트워크와 별도로 새로운 가상 네트워크를 구축합니다.

표 5-1은 실제 물리적인 환경과 가상 시스템에서 네트워크를 연결하는 과정을 비교해서 보여줍니다.

▼ 표 5-1 실제 물리적인 환경과 가상 시스템에서 네트워크 연결 과정 비교

|실제 물리적인 네트워크 연결|가상 시스템에서 네트워크 연결|
|:---:|:---:|
|컴퓨터를 준비합니다.|게스트를 추가합니다.|
|각 컴퓨터에 LAN 어댑터를 설치해서 케이블로 연결하고 네트워크 인터페이스를 추가합니다.|게스트를 연결할 가상 브리지 네트워크를 생성하고 게스트마다 네트워크 인터페이스를 추가합니다.|
|네트워크 인터페이스에 IP 주소 정보를 할당합니다.|네트워크 인터페이스에 IP 주소 정보를 할당합니다.|

### 내부 네트워크 연결하기

가상 시스템을 설치했을 때 게스트의 기본적인 네트워크 연결 방식에 대해 살펴봤습니다.

얼마든지 바뀐다는 `고객의 요구사항`에 따라 가상 시스템으로 구축한 네트워크를 다양한 방법으로 구성해보겠습니다.

먼저 자료 공유를 위한 내부 네트워크를 구축하겠습니다.

#### 요구 사항 1. 자료 공유를 위한 내부 네트워크를 추가해주세요

```text
인터넷과 연결된 기본 네트워크와 별도로 각 시스템을 연결하는 내부 네트워크를 구성하려고 합니다.

새로운 네트워크는 외부와 통하지 않고 각 시스템을 직접 연결해야 합니다.
```

각 게스트에 네트워크 인터페이스 eth1을 추가하고 새로운 가상 네트워크 인터페이스 virbr1로 게스트를 연결해보겠습니다.

가상 네트워크 default가 사설 IP 주소로 192.168.122.0을 사용하고 있으므로 충돌을 방지하기 위해 새로 추가하는 가상 네트워크에는 사설 IP 주소로 10.0.0.0을 할당합니다(그림 5-2).

▼ 그림 5-2 내부 네트워크 연결 추가

![ ](/img/05/02.jpg)

- - -

Q 사설(Private) IP 주소란 무엇인가요?

A 인터넷에 접속하기 위해서는 유일무이한 공인(Public) IP 주소가 필요합니다.

하지만, 인터넷에 연결하지 않은 네트워크에서도 IP 주소가 필요한 것은 마찬가지입니다.

네트워크 장치들이 TCP/IP 네트워크를 기반으로 동작하기 때문입니다.

이러한 이유로 IP 주소 체계는 인터넷과 연결하지 않은 사적인 독립 네트워크를 형성할 수 있도록 사설 IP 주소를 제공합니다.

표 5-2처럼 IP 주소 클래스마다 사설 IP 주소 대역이 예약되어 있습니다.

▼ 표 5-2 사설 IP 주소 대역
|IP 주소 클래스|IP 주소 범위|사설 IP 주소 대역|
|:---:|:---:|
|A|1.0.0.0 ~ 126.255.255.255|10.0.0.0 ~ 10.255.255.255|
|B|127.0.0.0 ~ 191.255.255.255|172.16.0.0 ~ 172.31.255.255|
|C|192.0.0.0 ~ 223.255.255.255|192.168.0.0 ~ 192.168.255.255|

원래 사설 IP 주소를 할당한 호스트는 인터넷에 접속할 수 없습니다.

네트워크 패킷에 사설 IP 주소 정보가 포함되어 있으면 인터넷에서 차단되기 때문입니다.

사설 IP 주소는 내부 네트워크에서만 사용 가능하며 인터넷에 접속하기 위한 공인 IP 주소와 중복되지도 않습니다.

하지만, 네트워크 주소 변환 과정을 거쳐 사설 IP 주소를 할당한 호스트도 인터넷 연결이 가능하도록 만들 수 있습니다.

`5.5 게이트웨이에서 패킷 제어하기`에서 다시 설명합니다.

일반적으로 가정용 네트워크 공유기를 사용하면 컴퓨터의 IP 주소가 192.168.0.0 대역으로 설정되는데 공유기가 C 클래스의 사설 IP 주소를 자동으로 할당하기 때문입니다.

여기에서는 내부 네트워크의 네트워크 주소로 A 클래스의 사설 IP 주소 10.0.0.0 대역을 사용하고 있습니다.

#### 실습에 사용할 게스트 준비하기

virt-clone을 이용해서 실습에 사용할 게스트를 복제합니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name test01 \
> --file /home/shinjaehun/virtual_machines/test01.img

shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name test02 \
> --file /home/shinjaehun/virtual_machines/test02.img
```

각각 test01과 test02라는 이름으로 게스트를 생성했습니다.

test01을 시작하고 가상 콘솔에 접속하여 로그인합니다.

test01을 시작하기 전에 다른 게스트는 모두 종료한 상태여야 합니다.

```s
shinjaehun@losttemple:~$ virsh list --all
 Id    이름                         상태
----------------------------------------------------
 -     guest                        종료
 -     test01                       종료
 -     test02                       종료

shinjaehun@losttemple:~$ virsh start test01
shinjaehun@losttemple:~$ vv test01
```

네트워크 인터페이스 설정 파일 /etc/network/interfaces를 vi 편집기로 열어 수정합니다.

IP 주소만 address 192.168.122.100에서 address 192.168.122.101로 고치면 됩니다.

```s
auto eth0
iface eth0 inet static
  address 192.168.122.101
  network 192.168.122.0
  netmask 255.255.255.0
  broadcast 192.168.122.255
  gateway 192.168.122.1
  dns-nameservers 8.8.8.8 8.8.4.4
```

호스트 정보를 추가합니다.

/etc/hosts를 vi 편집기로 열어서 127.0.0.1 guest 대신 127.0.0.1 test01을 입력합니다.

```s
127.0.0.1       localhost
127.0.0.1       test01
192.168.122.1   losttemple
```

마지막으로 호스트 이름을 수정합니다.

/etc/hostname을 vi 편집기로 열어서 guest를 test01로 변경합니다.

변경이 끝나면 게스트를 재부팅하고 호스트 이름 변경 상태, 네트워크 연결 상태 등을 점검합니다.

```s
test01
```

- - -

이렇게 하세요!
같은 방법으로 test02도 수정합니다.

1. test02를 시작하기 전에 다른 게스트는 모두 종료된 상태여야 합니다. test02를 시작해서 가상 콘솔에 접속하고 로그인합니다.

2. `/etc/network/interfaces`에 IP 주소를 등록합니다. `address 192.168.122.100`에서 `address 192.168.122.102`로 수정합니다.

3. `/etc/hosts`에 호스트 정보를 추가합니다. `127.0.0.1 guest` 대신 `127.0.0.1 test02`로 변경합니다.

4. `/etc/hostname`에서 `guest` 대신 `test02`로 변경합니다.

5. 시스템을 다시 부팅합니다.

- - -

ping으로 연결 상태를 확인해봅시다. 호스트에서 각 게스트로, 게스트에서 호스트로 점검해봅니다.

무엇보다 게스트 test01과 test02가 서로 연결되어야 합니다.

```s
administrator@test01:~$ ping 192.168.122.102

administrator@test02:~$ ping 192.168.122.101
```

#### 가상 네트워크 추가하고 네트워크 인터페이스 생성하기

게스트 test01과 test02를 기본 가상 네트워크 default가 아닌 다른 경로로 연결해야 합니다.

게스트를 연결할 가상 브리지 네트워크가 필요합니다.

```s
shinjaehun@losttemple:~$ virsh net-list --all
 이름           상태          자동 시작 Persistent
----------------------------------------------------------
 default        활성화        예        예
```

가상 브리지 네트워크 internal1을 추가해봅시다.

`[가상 네트워크 이름].xml` 형식의 가상 네트워크 설정 파일을 만들어야 합니다.

`internal1.xml` 파일을 편집기로 엽니다.

```s
shinjaehun@losttemple:~$ vi internal1.xml
```

`internal1.xml` 파일의 내용입니다.

가상 네트워크 이름과 가상 네트워크 인터페이스 이름을 설정해줍니다.

내부 네트워크 연결에 사용할 가상 브리지 네트워크 인터페이스로 virbr1을 설정했습니다.

virbr1을 통해 연결하는 가상 네트워크 internal1은 두 게스트를 직접 연결해야 합니다.

가상 네트워크 인터페이스 virbr1에 별도로 IP 주소를 할당하지 않았기 때문에 internal1을 거쳐서는 게스트끼리만 연결됩니다.

```xml
<network>
    <name>internal1</name>
    <bridge name='virbr1' />
</network>
```

- - -

Tip

internal1로는 호스트에서 게스트로도 접근할 수 없습니다.

- - -

파일을 저장하고 명령 프롬프트로 나옵니다.

virsh net-define을 실행합니다.

이 명령은 가상 네트워크 설정 파일 `internal1.xml`을 바탕으로 새로운 가상 네트워크를 정의합니다.

```s
shinjaehun@losttemple:~$ virsh net-define internal1.xml
internal1에서 정의된 internal1.xml 네트워크
```

virsh net-list로 추가한 가상 네트워크 internal1을 확인할 수 있지만 아직 internal1은 비활성 상태입니다.

```s
shinjaehun@losttemple:~$ virsh net-list --all
 이름          상태      자동 시작 Persistent
----------------------------------------------------------
 default       활성화    예        예
 internal1     비활성화  아니요    예
```

가상 네트워크 internal1을 활성화시키고 자동으로 시작하도록 설정해봅시다.

virsh net-autostart는 가상 네트워크를 자동으로 시작하는 명령이며, virsh net-start는 가상 네트워크를 활성화시키는 명령입니다.

다시 virsh net-list로 가상 네트워크 상태를 확인합니다.

```s
shinjaehun@losttemple:~$ virsh net-autostart internal1
자동 시작으로 internal1 네트워크가 표시됨

shinjaehun@losttemple:~$ virsh net-start internal1
internal1 네트워크 시작

shinjaehun@losttemple:~$ virsh net-list
 이름           상태    자동 시작  Persistent
----------------------------------------------------------
 default        활성화  예         예
 internal1      활성화  예         예
```

ifconfig로 새로 추가한 가상 네트워크 인터페이스 virbr1을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ifconfig
...
virbr1 Link encap:Ethernet HWaddr 52:54:00:69:3b:32
       UP BROADCAST MULTICAST MTU:1500 Metric:1
       RX packets:0 errors:0 dropped:0 overruns:0 frame:0
       TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
       collisions:0 txqueuelen:0
       RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
```

각 게스트마다 가상 네트워크 internal1에 연결할 네트워크 인터페이스를 설치해야 합니다.

게스트 정보를 수정하기 전에 먼저 각 게스트를 종료합니다.

test01에 네트워크 인터페이스를 추가해봅시다.

```s
shinjaehun@losttemple:~$ virsh shutdown test01
shinjaehun@losttemple:~$ virsh edit test01
```

default와 연결하는 네트워크 인터페이스 바로 아래에 내부 네트워크 연결 internal1을 위한 네트워크 인터페이스 장치 정보를 추가합니다.

`<source network>`에 연결할 가상 네트워크 이름과 `<model type>`에 virtio(가상 네트워크 입출력 장치)를 입력합니다.

네트워크 인터페이스의 하드웨어 주소 `<mac address>`와 장치가 내부적으로 사용할 값 `<address>`는 입력하지 않습니다.

나중에 자동으로 추가되기 때문입니다.

파일을 저장하고 편집기를 종료합니다.

```xml
<interface type='network'>
   <mac address='52:54:00:b9:d0:89'/>
   <source network='default'/>
   <model type='virtio'/>
   <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/>
</interface>
<interface type='network'>
   <source network='internal1' />
   <model type='virtio' />
</interface>
```

virsh edit를 다시 실행해서 test01 장치의 설정 값을 확인해보면 internal1에 연결할 네트워크 어댑터의 `<mac address>`와 `<address>`가 자동으로 추가된 것을 확인할 수 있습니다.

사용자가 직접 하드웨어 주소 값을 할당할 필요가 없습니다.

```xml
<interface type='network'>
  <mac address='52:54:00:14:e2:e4'/>
  <source network='internal1'/>
  <model type='virtio'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x06' function='0x0'/>
</interface>
```

- - -

**이렇게 하세요!**

test02에 네트워크 인터페이스를 추가하려면 다음과 같이 합니다.

**1.** test02를 종료한 상태에서 게스트 정보를 수정합니다.

```s
shinjaehun@losttemple:~$ virsh shutdown test02
shinjaehun@losttemple:~$ virsh edit test02
```

**2.** 내부 네트워크 인터페이스 internal1을 추가합니다.

```xml
<interface type='network'>
  <source network='internal1' />
  <model type='virtio' />
</interface>
```

- - -

같은 방법으로 test02에도 internal1에 연결할 네트워크 인터페이스를 추가합니다.

가상 시스템의 속성을 변경했으면 이를 적용하기 위해 libvirt-bin 서비스를 재시작해야 합니다.

```s
shinjaehun@losttemple:~$ sudo service libvirt-bin restart
```

다음으로 각 게스트에 접속해서 추가된 네트워크 인터페이스에 IP 주소 정보를 설정합니다.

test01을 시작하고 가상 콘솔에 접속해서 로그인합니다.

dmesg는 시스템이 부팅하면서 발생하는 여러 정보를 보여주는 명령입니다.

grep et를 파이프로 넘겨서 부팅 과정에서 eth와 관련된 정보가 발생했는지 확인해봅시다.

기본 네트워크 인터페이스 eth0외에 eth1이 추가로 검색되었습니다.

```s
administrator@test01:~$ dmesg | grep eth
[   1.240597] IPv6: ADDRCONF(NETDEV_UP): eth0: link is not ready
[   1.240602] IPv6: ADDRCONF(NETDEV_UP): eth1: link is not ready
```

추가된 네트워크 인터페이스 eth1에 IP 주소 정보를 입력합니다.

우분투에서 /etc/network/interface를 vi로 엽니다.

```s
administrator@test01:~$ sudo vi /etc/network/interface
```

새로 추가한 네트워크 인터페이스 eth1에 할당할 사설 IP 주소 정보 (IP 주소, 네트워크 ID, 넷마스크, 브로드캐스트 주소)를 입력합니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.101
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
   gateway 192.168.122.1
   dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.0.1
   network 10.0.0.0
   netmask 255.255.255.0
   broadcast 10.0.0.255
```

변경된 값을 적용해서 eth1을 활성화시킵니다.

```s
administrator@test01:~$ sudo ifup eth1
```

ifconfig 명령으로 네트워크 인터페이스에 사설 IP 주소 정보가 제대로 할당되었는지 확인합니다.

```s
administrator@test01:~$ ifconfig
eth0      Link encap:Ethernet HWaddr 52:54:00:b9:d0:89
          inet addr:192.168.122.101 Bcast:192.168.122.255 Mask:255.255.255.0
          inet6 addr: fe80::5054::ff::feb9::d089/64 Scope:Link
          UP BROADCAST MULTICAST MTU:1500 Metric:1
          RX packets:142 errors:0 dropped:7 overruns:0 frame:0
          TX packets:76 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:13723 (13.7 KB) TX bytes:8734 (8.7 KB)

eth1      Link encap:Ethernet HWaddr 52:54:00:14:e2:e4
          inet addr:10.0.0.1 Bcast:10.0.0.255 Mask:255.255.255.0
          inet6 addr: fe80::5054::ff::fe14::e2e4/64 Scope:Link
          UP BROADCAST MULTICAST MTU:1500 Metric:1
          RX packets:65 errors:0 dropped:65 overruns:0 frame:0
          TX packets:3 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:3380 (3.3 KB) TX bytes:238 (238.0 B)
...
```

route를 입력해서 라우팅 테이블을 확인하면 10.0.0.0으로 나가는 패킷은 eth1을 통해 전송합니다.

패킷은 호스트의 가상 네트워크 인터페이스 virbr1을 거쳐서 test02의 eth1에 도착할 것입니다.

```s
administrator@test01:~$ route
Kernel IP routing table
Destination     Gateway      Genmask        Flags Metric Ref    Use Iface
default         losttemple   0.0.0.0        UG    0      0      0 eth0
10.0.0.0        *            255.255.255.0  U     0      0      0 eth1
192.168.122.0   *            255.255.255.0  U     0      0      0 eth0
```

게스트 test02를 시작해서 로그인합니다.

같은 방법으로 네트워크 인터페이스 eth1을 추가하고 IP 주소를 할당합니다.

test02의 eth1에 대한 IP 주소 정보는 다음과 같습니다.

```s
auto eth1
iface eth1 inet static
   address 10.0.0.2
   network 10.0.0.0
   netmask 255.255.255.0
   broadcast 10.0.0.255
```

- - -

Tip

네트워크 내 같은 IP 주소를 사용하면 IP 주소 충돌 현상이 발생합니다.

test01의 eth1에는 10.0.0.1을, test02의 eth1에는 10.0.0.2를 할당해야 합니다.

- - -

이제 ping으로 연결 상태를 확인해봅시다.

test01에서 test02(10.0.0.2)로, test02에서 test01 (10.0.0.1)로 ping을 실행한 결과 서로 정상적으로 응답하는 것을 확인할 수 있습니다.

```s
administrator@test01:~$ ping 10.0.0.2

administrator@test02:~$ ping 10.0.0.1
```

- - -

**이렇게 하세요!**

호스트에서 test01의 eth0에 부여된 IP 주소 192.168.122.101로는 패킷을 보낼 수 있지만 test01의 eth1에 부여된 IP 주소 10.0.0.1로는 패킷을 보낼 수 없습니다.

새로 추가한 가상 네트워크 internal1은 test01과 test02를 직접 연결하는 네트워크이기 때문입니다.

```s
shinjaehun@losttemple:~$ ping 192.168.122.101
PING 192.168.122.101 (192.168.122.101) 56(84) bytes of data.
64 bytes from 192.168.122.101: icmp_seq=1 ttl=64 time=0.235 ms
64 bytes from 192.168.122.101: icmp_seq=2 ttl=64 time=0.322 ms
^C
--- 192.168.122.101 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1000ms
rtt min/avg/max/mdev = 0.235/0.278/0.322/0.046 ms
shinjaehun@losttemple:~$ ping 10.0.0.1
PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.
^C
--- 10.0.0.1 ping statistics ---
6 packets transmitted, 0 received, 100% packet loss, time 5000ms
```

- - -

### 네트워크 확장하기

새로운 사용자가 쓸 컴퓨터나 새 네트워크 장치를 추가하는 일로 네트워크 규모는 언제든지 늘어날 수 있습니다.

시스템 관리자는 언제든 네트워크 확장에 대비해야 하며 요청에 따라 신속하게 처리해야 합니다.

네트워크를 추가 구성하는 과정을 실습해봅시다.

#### 요구 사항 2. 네트워크를 확장하려고 합니다

- - -

예) 회사 규모가 커져 새 사용자를 위한 컴퓨터를 추가하는 상황을 가정해봅시다.

추가할 컴퓨터끼리 별도로 네트워크 연결이 필요하고 각 부서마다 보안을 위해 네트워크를 분리하고자 합니다.

내부 네트워크 연결을 제한하기 위해 다른 네트워크 주소를 할당해야 합니다.

- - -

게스트를 추가해서 가상 네트워크 virbr2로 연결해보겠습니다.

새로운 내부 네트워크는 사설 IP 주소 10.0.10.0을 할당했습니다.

가상 네트워크 virbr1과 또 다른 사설 네트워크 주소를 할당해서 분리합니다.

▼ 그림 5-3 새로운 내부 네트워크 추가
![ ](/img/05/03.jpg)

#### 새로운 네트워크 추가하기

게스트 test03과 test04를 생성합니다.

virt-clone 명령으로 test01에서 복사하여 시간을 줄입니다.

`실습에 사용할 게스트 준비하기`를 참고하여 새로 생성한 게스트 test03과 test04에 대한 설정을 마무리합니다.

test01이 실행 중이면 충돌할 위험이 있기 때문에 test03과 test04을 시작하기 전에 test01과 test02는 종료한 상태에서 작업해야 합니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone -original guest \
> --name test03 \
> --file /home/shinjaehun/virtual_machines/test03.img

shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name test04 \
> --file /home/shinjaehun/virtual_machines/test04.img
```

- - -

이렇게 하세요!
test03의 네트워크 설정입니다.

1. test01과 test02는 종료한 상태에서 test03을 시작합니다. 가상 콘솔에 접속하고 로그인합니다.

2. `/etc/network/interfaces`에 eth0의 IP 주소를 등록합니다. `address 192.168.122.100`에서 `address 192.168.122.103`으로 수정합니다.

3. `/etc/hosts`에 호스트 정보를 추가합니다. `127.0.0.1 guest` 대신 `127.0.0.1 test03`으로 변경합니다.

4. `/etc/hostname`에서 `test01` 대신 `test03`으로 변경합니다.

5. 시스템을 다시 부팅합니다.

test04의 네트워크 설정입니다.

1. test01과 test02는 종료한 상태에서 test04를 시작합니다. 가상 콘솔에 접속하고 로그인합니다.

2. `/etc/network/interfaces`에 eth0의 IP 주소를 등록합니다. `address 192.168.122.100`에서 `address 192.168.122.104`로 수정합니다.

3. `/etc/hosts`에 호스트 정보를 추가합니다. `127.0.0.1 guest` 대신 `127.0.0.1 test04`로 변경합니다.

4. `/etc/hostname`에서 `test01` 대신 `test04`으로 변경합니다.

5. 시스템을 다시 부팅합니다.

- - -

게스트 준비가 끝나면 가상 브리지 네트워크를 추가합니다.

먼저 vi로 가상 네트워크 설정 파일 `internal2.xml`을 다음과 같이 편집합니다.

가상 네트워크 이름은 internal2, 네트워크 인터페이스 이름은 virbr2로 설정했습니다.

```xml
<network>
    <name>internal2
    <bridge name='virbr2' />
</network>
```

방금 편집한 `internal2.xml`을 바탕으로 가상 네트워크를 정의합니다.

가상 네트워크 internal2를 활성화시키고 자동으로 시작하도록 설정합니다.

```s
shinjaehun@losttemple:~$ virsh net-define internal2.xml
internal2에서 정의된 internal2.xml 네트워크

shinjaehun@losttemple:~$ virsh net-autostart internal2
자동 시작으로 internal2 네트워크가 표시됨

shinjaehun@losttemple:~$ virsh net-start internal2
internal2 네트워크 시작

shinjaehun@losttemple:~$ virsh net-list
 이름           상태   자동 시작  Persistent
----------------------------------------------------------
 default        활성화 예         예
 internal1      활성화 예         예
 internal2      활성화 예         예
```

test03을 종료하고 새로 추가한 게스트 test03의 내부 네트워크 인터페이스를 internal2에 연결합니다.

`virsh edit test03`을 실행합니다.

internal1에 연결되어 있던 네트워크 장치 정보를 internal2로 수정합니다.

주소 정보를 자동 할당하기 위해 `<mac address>`와 `<address type>`은 삭제합니다.

```xml
<interface type='network'>
  <mac address='52:54:00:9a:5c:40'/>
  <source network='default'/>
  <model type='virtio'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/
</interface>
<interface type='network'>
    <mac address='52:54:00:50:ce:55'/>
    <source network='internal2'/>
    <model type='virtio'/>
    <address type='pci' domain='0x0000' bus='0x00' slot='0x07' function='0x0'/>
</interface>
```

- - -

이렇게 하세요!
같은 방법으로 test04의 네트워크 장치 정보도 수정합니다.

1. 실행 중인 test04를 종료합니다.

2. `virsh edit test04`를 입력해서 `<source network='internal1'/>`을 `<source network='internal2'/>`로 수정합니다.

3. `<mac address>`와 `<address type>`은 삭제합니다.

4. 파일을 저장하고 편집기를 종료합니다.

- - -

추가한 네트워크 인터페이스를 적용하기 위해 libvirt-bin 서비스를 재시작합니다.

```s
shinjaehun@losttemple:~$ sudo service libvirt-bin restart
```

내부 네트워크 인터페이스에 IP 주소를 설정합니다.

test03을 시작하고 가상 콘솔에 접속해서 로그인합니다.

`/etc/network/interface` 파일을 vi로 열어서 다음과 같이 eth1에 IP 주소를 할당합니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.103
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
   gateway 192.168.122.1
   dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.10.1
   network 10.0.10.0
   netmask 255.255.255.0
   broadcast 10.0.10.255
```

- - -

Tip

test01과 test02는 네트워크 주소로10.0.0.0을 할당했지만 test03과 test04는 10.0.10.0을 할당합니다.

이렇게 해서 두 네트워크는 서로 다른 네트워크 주소를 사용합니다.

- - -

설정 내용을 반영하기 위해 네트워크 인터페이스 eth1을 내렸다가 다시 올립니다.

```s
administrator@test03:~$ sudo ifdown eth1
administrator@test03:~$ sudo ifup eth1
```

test04의 네트워크 인터페이스 파일 /etc/network/interface입니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.104
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
   gateway 192.168.122.1
   dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.10.2
   network 10.0.10.0
   netmask 255.255.255.0
   broadcast 10.0.10.255
```

설정 내용을 반영하기 위해 네트워크 인터페이스 eth1을 내렸다가 다시 올립니다.

```s
administrator@test04:~$ sudo ifdown eth1
administrator@test04:~$ sudo ifup eth1
```

연결 상태를 확인해봅시다.

호스트로 돌아와 게스트 test01, test02를 실행시킵니다.

test01에서 test02(10.0.0.2)에 ping을 실행하면 정상적으로 응답합니다.

```s
administrator@test01:~$ ping 10.0.0.2
```

하지만, test03(10.0.10.1)에 ping을 시도하면 응답이 돌아오지 않습니다.

test01과 test03이 서로 다른 네트워크에 존재하기 때문입니다.

Ctrl + C 눌러 ping을 종료합니다.

test03과 test04의 연결 상태, test03과 test01의 연결 상태도 확인해보기 바랍니다.

```s
administrator@test01:~$ ping 10.0.10.1
PING 10.0.10.1 (10.0.10.1) 56(84) bytes of data.
^C
--- 10.0.10.1 ping statistics ---
5 packets transmitted, 0 received, 100% packet loss, time 5000ms
```

- - -

Tip
물론 test03의 eth0에 할당된 IP 주소 192.168.122.103으로 ping을 시도하면 정상적으로 연결됩니다. 가상 네트워크 인터페이스 virbr0는 모든 게스트에 연결되어 있기 때문입니다.

- - -

### 게이트웨이로 서로 다른 네트워크 연결하기

보안을 이유로 서로 분리한 네트워크지만 정보 공유를 위해 다시 연결해야 할 필요가 생겼습니다.

네트워크를 연결하려면 서로를 연결하기 위한 매개체, 게이트웨이가 필요합니다.

#### 요구 사항 3. 네트워크와 네트워크를 연결해주세요

예) 부서 사이의 정보 공유를 위해 다른 네트워크 주소를 할당해서 분리해 놓은 내부 네트워크를 서로 연결해야 합니다.

네트워크와 네트워크를 연결하는 지점은 네트워크 패킷이 오가는 관문으로 게이트웨이라고 합니다.

게이트웨이에서 패킷을 목적지까지 갈 수 있도록 중계하는 장치가 게이트웨이 장치입니다.

집에서 사용하는 가정용 인터넷 공유기나, 기업이나 공공기관에서 사용하는 라우터가 게이트웨이 장치에 해당하며 일반적인 PC도 게이트웨이 장치로 사용 가능합니다.

게이트웨이 장치로 사용할 게스트를 생성하고 여기에 네트워크 인터페이스 둘을 추가합니다.

그림 5-4와 같이 각 네트워크 인터페이스를 내부 네트워크 virbr1(10.0.0.0)과 virbr2(10.0.10.0)에 연결합니다.

일반적으로 네트워크에 연결하는 컴퓨터는 네트워크 끝에 존재하기 때문에 대부분의 운영체제가 네트워크 패킷을 다른 곳으로 전달하는 기능을 활성화시키지 않습니다.

리눅스 PC를 게이트웨이 장치로 사용하려면 패킷 전달 기능(packet forwarding)을 활성화시켜야 하며 네트워크에 연결된 다른 장치들도 게이트웨이 장치의 IP 주소를 알아야 합니다.

각 게스트의 네트워크 설정을 수정할 필요가 있습니다.

▼그림 5-4 게이트웨이 장치 추가
![ ](/img/05/04.jpg)

#### 게이트웨이로 네트워크 연결하기

가상 네트워크 internal1과 internal2를 연결할 게스트 test05를 test01로부터 생성합니다.

충돌을 막기 위해 test05를 시작하기 전에 다른 모든 게스트를 종료합니다.

게스트 생성이 끝나면 test05를 시작해서 필요한 설정을 마무리합니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone --original test01 \
> --name test05 \
> --file ~/virtual_machines/test05.img
```

- - -

**이렇게 하세요!**

test05의 네트워크 설정입니다.

1. 다른 모든 게스트를 종료한 상태에서 test05를 시작합니다. 가상 콘솔에 접속하고 로그인합니다.

2. `/etc/network/interfaces`에 eth0의 IP 주소를 등록합니다. `address 192.168.122.101`에서 `address 192.168.122.105`로 수정합니다.

3. `/etc/hosts`에 호스트 정보를 추가합니다. `127.0.0.1 guest` 대신 `127.0.0.1 test05`로 변경합니다.

4. `/etc/hostname`에서 `test01` 대신 `test05`로 변경합니다.

5. 시스템을 다시 부팅합니다.

- - -

게이트웨이 장치인 test05에 네트워크 인터페이스를 추가합니다.

internal1과 internal2 각 네트워크와 연결을 위해 네트워크 인터페이스가 하나 더 필요합니다.

test05를 종료하고 virsh edit test05를 실행하여 게스트 장치를 수정합니다.

test05가 test01에서 복제된 게스트이므로, internal1과 연결할 네트워크 인터페이스는 이미 추가된 상태입니다.

다음과 같이 internal2에 연결할 네트워크 인터페이스를 추가합시다.

입력이 끝나면 다시 virsh edit하여 하드웨어 주소 값이 자동으로 입력되었는지 확인합니다.

```xml
<interface type='network'>
  <mac address='52:54:00:8b:79:08'/>
  <source network='default'/>
  <model type='virtio'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/
</interface>
<interface type='network'>
  <mac address='52:54:00:dc:ee:61'/>
  <source network='internal1'/>
  <model type='virtio'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x06' function='0x0'/
</interface>
<interface type='network'>
  <source network='internal2'/>
  <model type='virtio'/>
</interface>
```

추가한 네트워크 인터페이스를 적용하기 위해 libvirt-bin을 재시작합니다.

```s
shinjaehun@losttemple:~$ sudo service libvirt-bin restart
```

네트워크 인터페이스에 IP 주소 정보를 설정합니다.

test05를 다시 시작하고 가상 콘솔에 접속해서 로그인한 다음 dmesg로 eth2가 정상적으로 추가되었는지 확인합니다.

```s
administrator@test05:~$ dmesg | grep eth
[ 1.510165] IPv6: ADDRCONF(NETDEV_UP): eth0: link is not ready
[ 1.510173] IPv6: ADDRCONF(NETDEV_UP): eth1: link is not ready
[ 1.510178] IPv6: ADDRCONF(NETDEV_UP): eth2: link is not ready
```

네트워크 인터페이스 설정 파일 /etc/network/interface를 vi로 열어서 eth0과 eth1에 대한 정보를 입력합니다.

가상 네트워크 internal1과 연결하는 eth1의 네트워크 주소는 10.0.0.0이며 internal2와 연결하는 eth2의 네트워크 주소는 10.0.10.0입니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.105
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
   gateway 192.168.122.1
   dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.0.254
   network 10.0.0.0
   netmask 255.255.255.0
   broadcast 10.0.0.255

auto eth2
iface eth2 inet static
   address 10.0.10.254
   network 10.0.10.0
   netmask 255.255.255.0
   broadcast 10.0.10.255
```

설정 내용을 변경한 네트워크 인터페이스 eth1을 내렸다가 다시 올리고 eth2를 활성화시킵니다.

```s
administrator@test05:~$ sudo ifdown eth1
administrator@test05:~$ sudo ifup eth1
administrator@test05:~$ sudo ifup eth2
```

네트워크 인터페이스에 할당된 IP 주소 정보를 확인합니다.

```s
dministrator@test05:~$ ifconfig
eth0      Link encap:Ethernet HWaddr 52:54:00:8b:79:08
          inet addr:192.168.122.105 Bcast:192.168.122.255 Mask:255.255.255.0
          inet6 addr: fe80::5054:ff:fe8b:7908/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:147 errors:0 dropped:11 overruns:0 frame:0
          TX packets:76 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:14146 (14.1 KB) TX bytes:9978 (9.9 KB)

eth1      Link encap:Ethernet HWaddr 52:54:00:dc:ee:61
          inet addr:10.0.0.254 Bcast:10.0.0.255 Mask:255.255.255.0
          inet6 addr: fe80::5054:ff:fedc:ee61/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:80 errors:0 dropped:80 overruns:0 frame:0
          TX packets:5 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:4160 (4.1 KB) TX bytes:398 (398.0 B)

eth2      Link encap:Ethernet HWaddr 52:54:00:c2:c9:dd
          inet addr:10.0.10.254 Bcast:10.0.10.255 Mask:255.255.255.0
          inet6 addr: fe80::5054:ff:fec2:c9dd/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:81 errors:0 dropped:81 overruns:0 frame:0
          TX packets:5 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:4212 (4.2 KB) TX bytes:398 (398.0 B)
...
```

route 명령으로 라우팅 테이블을 확인해봅시다.

내부 네트워크 10.0.0.0으로 나가는 패킷은 eth1을 통해 전송하고 10.0.10.0으로 나가는 패킷은 eth2를 통해 전송하고 있습니다.

이렇게 해서 test05는 모든 게스트와 연결이 가능합니다.

```s
administrator@test05:~$ route
Kernel IP routing table
Destination     Gateway        Genmask         Flags Metric Ref    Use Iface
default         losttemple     0.0.0.0         UG    0      0      0   eth0
10.0.0.0        *              255.255.255.0   U     0      0      0   eth1
10.0.10.0       *              255.255.255.0   U     0      0      0   eth2
192.168.122.0   *              255.255.255.0   U     0      0      0   eth0
```

연결 상태를 확인하기 위해 호스트로 돌아와서 모든 게스트를 시작합니다.

```s
shinjaehun@losttemple:~$ virsh start test01
shinjaehun@losttemple:~$ virsh start test02
shinjaehun@losttemple:~$ virsh start test03
shinjaehun@losttemple:~$ virsh start test04
shinjaehun@losttemple:~$ virsh list

Id 이름                   상태
----------------------------------
 1 test05                 실행중
 2 test01                 실행중
 3 test02                 실행중
 4 test03                 실행중
 5 test04                 실행중
```

test05에서 ping으로 연결 상태를 확인해봅시다.

모든 게스트에 이상 없이 접속 가능한 상태입니다.

```s
administrator@test05:~$ ping 10.0.0.1
administrator@test05:~$ ping 10.0.0.2
administrator@test05:~$ ping 10.0.10.1
administrator@test05:~$ ping 10.0.10.2
```

그럼 다른 게스트에서 접속 상태는 어떨까요?

test01에서 test05의 eth1에 할당한 IP 주소 10.0.0.254는 정상적으로 응답하지만, test05의 네트워크 인터페이스 eth2에 할당된 IP 주소 10.0.10.254는 응답하지 않습니다.

test05를 거쳐 연결될 것으로 기대했던 test03(10.0.10.1)도 응답하지 않습니다.

물리적으로는 test05를 거쳐 연결된 상태지만 서로 다른 네트워크로 패킷을 전송하지는 못하는 상태입니다.

```s

administrator@test01:~$ ping 10.0.0.254
PING 10.0.0.254 (10.0.0.254) 56(84) bytes of data.
64 bytes from 10.0.0.254: icmp_seq=1 ttl=64 time=0.235 ms
64 bytes from 10.0.0.254: icmp_seq=2 ttl=64 time=0.322 ms
^C
--- 10.0.0.254 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1000ms
rtt min/avg/max/mdev = 0.235/0.278/0.322/0.046 ms
administrator@test01:~$ ping 10.0.10.1
PING 10.0.10.1 (10.0.10.1) 56(84) bytes of data.
^C
--- 10.0.10.1 ping statistics ---
6 packets transmitted, 0 received, 100% packet loss, time 5000ms
administrator@test01:~$ ping 10.0.10.254
PING 10.0.10.254 (10.0.10.254) 56(84) bytes of data.
^C
--- 10.0.10.254 ping statistics ---
6 packets transmitted, 0 received, 100% packet loss, time 5000ms

```

리눅스 시스템을 게이트웨이로 사용하기 위해 패킷 전달 기능을 활성화시켜야 합니다.

`sysctl.conf` 파일을 편집기로 엽니다.

```s
administrator@test05:~$ sudo vi /etc/sysctl.conf
```

패킷 포워딩을 허용하는 net.ipv4.ip_forward=1 항목 앞의 주석 표시(#)를 삭제합니다.

```s
# Uncomment the next line to enable packet forwarding for IPv4
net.ipv4.ip_forward=1
```

sysctl -p로 패킷 전달 기능을 바로 활성화시킵니다.

```s
administrator@test05:~$ sudo sysctl -p
net.ipv4.ip_forward=1
```

test05는 게이트웨이 장치로 동작합니다.

하지만, 192.168.122.1이라는 게이트웨이가 존재하는데 test05를 또 다른 게이트웨이로 사용한다면 패킷을 어디로 보내야할지 결정하지 못하는 문제가 발생합니다.

따라서 각 게스트의 게이트웨이를 test05로 수정해야 합니다.

먼저 test01에서 게이트웨이를 수정합니다.

route del 명령으로 라우팅 테이블에서 기본 게이트웨이 정보를 삭제합니다.

route 명령으로 기본 게이트웨이가 사라진 상태를 확인할 수 있습니다.

```s
administrator@test01:~$ sudo route del default gw 192.168.122.1
administrator@test01:~$ route
Kernel IP routing table
Destination     Gateway        Genmask        Flags Metric Ref   Use Iface
10.0.0.0        *              255.255.255.0  U     0      0       0 eth1
192.168.122.0   *              255.255.255.0  U     0      0       0 eth0
```

네트워크 인터페이스 파일 /etc/network/interface를 편집기로 열어

eth0의 게이트웨이 192.168.122.1을 주석처리해서 무효로 하고 eth1에 게이트웨이 항목을 추가합니다.

새로운 게이트웨이 주소는 test05의 10.0.0.254입니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.101
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
#  gateway 192.168.122.1
#  dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.0.1
   network 10.0.0.0
   netmask 255.255.255.0
   broadcast 10.0.0.255
   gateway 10.0.0.254
   dns-nameservers 8.8.8.8 8.8.4.4
```

설정 내용을 반영하기 위해 네트워크 인터페이스 eth1을 내렸다가 다시 올립니다.

같은 방법으로 test02, test03, test04의 설정 내용을 수정합니다.

```s
administrator@test01:~$ sudo ifdown eth1
administrator@test01:~$ sudo ifup eth1
```

- - -

**이렇게 하세요!**

나머지 게스트의 네트워크 설정을 다음과 같이 변경합니다.

**1.** `sudo route del default gw 192.168.122.1` 명령으로 라우팅 테이블에서 기본 게이트웨이를 삭제합니다.

**2.** 네트워크 인터페이스 파일 `/etc/network/interface`를 수정합니다.

test02의 `/etc/network/interface`는 다음과 같습니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.102
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
#  gateway 192.168.122.1
#  dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.0.2
   network 10.0.0.0
   netmask 255.255.255.0
   broadcast 10.0.0.255
   gateway 10.0.0.254
   dns-nameservers 8.8.8.8 8.8.4.4
```

test03과 test04의 기본 게이트웨이 주소는 test05의 eth2에 할당된 IP 주소 10.0.10.254입니다.

test03의 `/etc/network/interface`는 다음과 같습니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.103
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
#  gateway 192.168.122.1
#  dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.10.1
   network 10.0.10.0
   netmask 255.255.255.0
   broadcast 10.0.10.255
   gateway 10.0.10.254
   dns-nameservers 8.8.8.8 8.8.4.4
```

test04의 `/etc/network/interface`는 다음과 같습니다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.104
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
#  gateway 192.168.122.1
#  dns-nameservers 8.8.8.8 8.8.4.4

auto eth1
iface eth1 inet static
   address 10.0.10.2
   network 10.0.10.0
   netmask 255.255.255.0
   broadcast 10.0.10.255
   gateway 10.0.10.254
   dns-nameservers 8.8.8.8 8.8.4.4
```

**3.** 설정 내용을 반영하기 위해 각 게스트의 네트워크 인터페이스 eth1을 내렸다가(sudo ifdown eth1) 다시 올립니다.(sudo ifup eth1)

- - -

ping으로 연결 상태를 점검해보겠습니다.

test01에서 test03(10.0.10.1)으로 ping한 결과 정상적으로 응답하고, test04에서 test01(10.0.0.1)로 ping한 결과 역시 정상적으로 응답합니다.

10.0.0.0과 10.0.10.0 두 네트워크를 연결하는 데 성공했습니다.

```s
administrator@test01:~$ ping 10.0.10.1

administrator@test04:~$ ping 10.0.0.1
```

그러나 호스트의 네트워크 어댑터 eth0을 거쳐 외부 네트워크로 나가는 ping 테스트는 실패합니다.

내부 네트워크를 연결하는데 성공했지만 외부 네트워크와의 연결은 끊어지고 말았기 때문입니다.

```s
administrator@test01:~$ ping kldp.org
```

### 게이트웨이에서 패킷 제어하기

네트워크 관리자는 네트워크를 효율적으로 관리하고 네트워크 자원을 안전하게 보호해야 합니다.

이러한 일은 네트워크 패킷 제어와 관련이 있으며 어떤 장치나 프로그램이 대신 해주는 것이 아니라 관리자가 직접 규칙을 결정하고 시스템에 적용해야 합니다.

게이트웨이에서 네트워크 패킷을 제어하는 방법에 대해 살펴보겠습니다.

#### 요구사항 4. 인터넷에 접속할 수 있게 만들어주시고 외부로부터 보호해주세요

예) 내부 네트워크 장치가 게이트웨이를 통해 인터넷에 접속 가능하도록 만들고 싶습니다.

또한 게이트웨이에 방화벽 기능을 갖춰 내부 네트워크를 허가받지 않은 접근으로부터 보호하려고 합니다.

패킷 전달 기능만 갖고는 인터넷으로 패킷을 보낼 수 없습니다.

각 게스트의 내부 네트워크 인터페이스에는 사설 IP 주소 10.0.0.0과 10.0.10.0이 할당되어 있는데 사설 IP 주소 정보가 포함된 네트워크 패킷은 인터넷에서 차단하기 때문입니다. 네트워크 장치들을 인터넷에 연결하려면 어떻게 해야 할까요?

게이트웨이 장치는 패킷의 주소를 변환해서 이 문제를 해결합니다.

게이트웨이 장치가 패킷의 출발지 IP 주소를 사설 IP 주소에서 자신에게 할당된 공인 IP 주소로 바꿔서 인터넷으로 보내면 패킷을 도중에 폐기시키지 않고 목적지까지 보낼 수 있습니다.

이 과정을 네트워크 주소 변환(Network Address Translation, NAT), IP 주소 매스커레이드(Masquerade)라고 합니다.

- - -

Tip

게이트웨이 장치는 패킷 전달뿐 아니라 패킷을 제어하는 일도 처리합니다.

- - -

기본 게이트웨이에 매스커레이드 설정을 활성화시키면 게스트는 기본 게이트웨이의 공인 IP 주소를 가지고 인터넷과 통신할 수 있습니다(그림 5-5).

▼ 그림 5-5 NAT를 활용한 외부 연결
![ ](/img/05/05.jpg)

- - -

Tip
Masquerade는 `가면무도회, 가장, 겉치레, 허구, ~인 체하다`라는 뜻입니다.

공인 IP 주소를 자기가 부여 받은 것처럼 가장하여 인터넷을 사용하는 방법을 매스커레이드라고 하는 것입니다.

- - -

패킷 제어를 통해 패킷의 통과 여부를 결정할 수도 있습니다.

허가된 접근을 허용하고 허가되지 않은 접근은 차단하는 기능을 패킷 필터링(Packet filtering)이라고 합니다.

게이트웨이 장치는 패킷 필터링으로 네트워크 자원을 보호하기 위한 `방화벽Firewall` 역할을 수행합니다.

그림 5-6에서 게이트웨이 장치는 내부 네트워크에서 외부로 나가는 요청은 허용하고 외부 네트워크로부터 허가되지 않은 접근을 차단하고 있습니다.

패킷 제어는 내부 네트워크에도 적용 가능합니다.

게이트웨이 장치를 거쳐 전달하는 내부 네트워크 패킷의 접근을 허용하거나 차단할 수도 있습니다.

▼ 그림 5-6 패킷 필터링

![ ](/img/05/06.jpg)

#### iptables 다루기

리눅스에서는 iptables 도구를 이용해서 패킷을 제어합니다.

iptables의 제어 규칙을 정의하는 기본 단위를 사슬(Chain)이라고 하며 특정한 정책에 따라 사슬을 모아 테이블로 정의합니다.

리눅스 서버를 통과하는 패킷은 사용자가 정의해둔 테이블과 사슬의 영향을 받아 제어됩니다.

iptables의 기본 테이블로 filter, nat, mangle 이 있지만 사용자가 필요에 따라 테이블을 추가하거나 삭제할 수 있습니다.

- - -

Tip

iptables 명령은 NetworkManager 패키지와 충돌 가능성이 있습니다.

게이트웨이 장치에서 NetworkManager 패키지가 설치되어 있다면 2장의 `네트워크 설정하기`에서 설명하는대로 삭제해둡니다.

- - -

매스커레이드 설정을 해보겠습니다.

-L 옵션은 사슬에 정의되어 있는 규칙을 보여줍니다.

패킷의 주소 변환 규칙을 정의하는 nat 테이블(-t nat)에는 PREROUTING 사슬과 POSTROUTING 사슬을 확인할 수 있습니다.

PREROUTING 사슬은 패킷이 리눅스 서버에 전달되기 전 규칙을 정의하고, POSTROUTING 사슬은 리눅스 서버에서 나가는 규칙을 정의합니다.

아직 사슬에 정의된 규칙은 존재하지 않습니다.

```s
administrator@test05:~$ sudo iptables -t nat -L
Chain PREROUTING (policy ACCEPT)
target     prot opt source               destination

Chain POSTROUTING (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

- - -

Tip
iptables로 패킷 제어 규칙을 확인하거나 정의하는 모든 일은 루트 권한을 요구합니다.

sudo가 필요합니다.

- - -

IP 주소 매스커레이드는 nat 테이블의 POSTROUTING 사슬에 설정합니다.

외부와 연결된 네트워크 인터페이스 eth0을 거쳐(-o eth0) 리눅스 서버에서 외부로 나가는 패킷에 대해 매스커레이드 규칙(-j MASQUERADE)을 POSTROUTING 사슬에 추가합니다(-A POSTROUTING).

```s
administrator@test05:~$ sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

다시 nat 테이블을 확인하면 POSTROUTING 사슬에서 MASQUERADE 항목을 찾을 수 있습니다.

이 설정 하나로 게이트웨이 장치를 거쳐 외부로 나가는 패킷의 출발지 주소는 게이트웨이 장치에 부여된 공인 IP 주소로 변경됩니다.

```s
administrator@test05:~$ sudo iptables -t nat -L
Chain PREROUTING (policy ACCEPT)
target     prot opt source              destination

Chain POSTROUTING (policy ACCEPT)
target     prot opt source              destination
MASQUERADE all -- anywhere anywhere

Chain OUTPUT (policy ACCEPT)
target     prot opt source              destination
```

매스커레이드 설정은 이게 전부입니다.

각 게스트에서 외부 네트워크로 연결 상태를 확인해봅니다.

모든 게스트가 게이트웨이 장치인 test05를 통해 인터넷에 접속 가능합니다.

```s
administrator@test01:~$ ping kldp.org
```

리눅스 서버의 방화벽 기능을 담당하는 filter 테이블을 살펴봅시다.

filter 테이블은 패킷을 거르기 위한 규칙을 정의합니다.

-t 옵션을 생략하면 iptables는 기본적으로 filter 테이블을 대상으로 규칙을 설정합니다.

-L 옵션으로 filter 테이블을 확인하면 INPUT, FORWARD, OUTPUT 사슬에 적용된 규칙을 확인할 수 있습니다.

INPUT 사슬과 OUTPUT 사슬은 리눅스 서버로 들어오거나 나가는 규칙을 정의하고 FORWARD 사슬은 리눅스 서버를 거쳐 외부로 나가는 규칙을 정의합니다.

```s
administrator@test05:~$ sudo iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source             destination

Chain FORWARD (policy ACCEPT)
target     prot opt source             destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source             destination
```

각 사슬의 기본 정책은 접근을 ACCEPT(허용함)하도록 설정되어 있습니다.

따라서 지금까지 게이트웨이를 오가는 모든 패킷은 아무런 제한이 없이 통과 가능했습니다.

확인을 위해 test02에 원격 접속을 위한 텔넷 서버를 설치( sudo apt-get install telnetd)해보겠습니다.

```s
administrator@test02:~$ sudo apt-get update
administrator@test02:~$ sudo apt-get install telnetd
```

- - -

Tip

텔넷은 네트워크 원격 접속을 위한 프로토콜입니다.

우분투에는 기본적으로 텔넷 클라이언트가 설치되어 있지만 텔넷 서버는 설치되어 있지 않습니다.

apt-get 명령으로 텔넷 서버 패키지인 telnetd를 설치합니다.

- - -

모든 게스트가 test02에 접속할 수 있습니다.

filter 테이블이 모든 접근을 허용하고 있기 때문입니다.

ID와 비밀번호를 이용해서 로그인한 다음 프롬프트가 변경되는 것을 보면 test01에서 test02로 원격 접속한 사실을 알 수 있습니다.

```s
administrator@test01:~$ telnet 10.0.0.2
Trying 10.0.0.2...
Connected to 10.0.0.2.
Escape character is '^]'.
Ubuntu 14.04.1 LTS
test02 login: administrator
password: *******

administrator@test02:~$
```

- - -

Tip

텔넷 터미널에서 빠져나오려면 exit 또는 logout 명령을 입력합니다.

명령 프롬프트의 호스트 이름을 확인하면 test02에서 다시 test01로 돌아오는 것을 확인할 수 있습니다.

- - -

방화벽이 제대로 동작하려면 기본 정책은 차단하지만, 특정 규칙을 따르는 접근을 허용하도록 해야 합니다.

게이트웨이의 방화벽을 활성화해보겠습니다.

먼저 -F 옵션으로 filter 테이블에 설정되어 있는 규칙을 모두 초기화합니다.

사슬의 기본 정책을 정의하는 -P 옵션으로 filter 테이블의 INPUT 사슬과 FORWARD 사슬의 기본 정책을 DROP(제한함)으로 변경합니다.

```s
administrator@test05:~$ sudo iptables -F
administrator@test05:~$ sudo iptables -P INPUT DROP
administrator@test05:~$ sudo iptables -P FORWARD DROP
```

- - -

Tip

OUTPUT 사슬은 허용해뒀습니다.

여기에서는 게이트웨이를 거쳐 나가는 패킷은 제한하지 않기 때문입니다.

- - -

INPUT 사슬과 FORWARD 사슬의 기본 규칙이 ACCEPT에서 DROP으로 변경된 것을 확인할 수 있습니다.

```s
administrator@test05:~$ sudo iptables -L
Chain INPUT (policy DROP)
target     prot opt source              destination

Chain FORWARD (policy DROP)
target     prot opt source              destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source              destination
```

게이트웨이를 거치지 않고 test02(10.0.0.2)와 연결할 수 있는 test01(10.0.0.1)에서는 여전히 텔넷 접근이 가능합니다.

게이트웨이 test05(10.0.10.254)를 거쳐야 하는 test03(10.0.10.1)과 test04(10.0.10.2)에서는 test02의 텔넷 서버로 접속이 차단됩니다.

FORWARD 사슬의 기본 정책이 DROP으로 설정되어 게이트웨이를 거쳐 통과하는 패킷을 제한하기 때문입니다.

방화벽 규칙의 영향을 받는 대상은 게이트웨이를 지나는 패킷이라는 사실을 알 수 있습니다.

```s
administrator@test03:~$ telnet 10.0.0.2
Trying 10.0.0.2...
```

네트워크 관리자가 승인하는 접근을 허용하도록 각 사슬에 규칙을 정의해보겠습니다.

먼저 내부 네트워크에서 게이트웨이 장치로 전송되는 패킷은 허용합니다.

iptables는 네트워크 인터페이스를 통한 접근을 제어할 수 있습니다.

내부 네트워크와 연결된 네트워크 인터페이스로 들어오는 접근( -i eth1/eth2)을 허용( -j ACCEPT)하도록 INPUT 사슬에 규칙을 정의합니다( -A INPUT).

```s
administrator@test05:~$ sudo iptables -A INPUT -i eth1 -j ACCEPT
administrator@test05:~$ sudo iptables -A INPUT -i eth2 -j ACCEPT
```

- - -

이렇게 하세요!
반대로 사슬에 정의된 규칙을 삭제하는 옵션은 -D입니다.

-D 이후에 정의했던 규칙을 그대로 입력해야 해당 규칙이 삭제됩니다.

규칙 삭제 후 iptables -L로 확인해보기 바랍니다.

```s
administrator@test05:~$ sudo iptables -D INPUT -i eth1 -j ACCEPT
```

- - -

IP 주소 매스커레이드 기능을 유지하기 위해 내부 네트워크에서 게이트웨이 장치를 거쳐 외부로 전달되는 패킷도 허용해야 합니다.

내부 네트워크와 연결된 네트워크 인터페이스로 들어오는 접근( -i eth1/eth2)을 허용( -j ACCEPT)하도록 FORWARD 사슬에 규칙을 정의합니다( -A FORWARD).

```s
administrator@test05:~$ sudo iptables -A FORWARD -i eth1 -j ACCEPT
administrator@test05:~$ sudo iptables -A FORWARD -i eth2 -j ACCEPT
```

iptables는 IP 주소, 프로토콜, 포트에 대한 접근을 제어할 수 있습니다.

test02로 전달( -d 10.0.0.2)되는 TCP 패킷( -p tcp) 중에서 텔넷 서버에 대한 접속 요청( –dport 23)을 허용( -j ACCEPT)하도록 FORWARD 사슬에 규칙을 정의합니다( -A FORWARD).

```s
administrator@test05:~$ sudo iptables -A FORWARD -d 10.0.0.2 -p tcp --dport 23 -j ACCEPT
```

- - -

Tip

포트번호에 대해서 3장의 `netstat로 네트워크 정보 확인하기`에서 설명했습니다.

- - -

하지만, 이것만으로는 부족합니다.

텔넷 서버에 대한 접속 요청은 허용하지만, 텔넷 서버가 처리한 결과를 다시 클라이언트에게 전송해야 하는데 처리 결과를 전달할 패킷을 허용할 방법이 없기 때문입니다.

여기에서 iptables의 막강한 기능인 상태 기반 패킷 필터링 (Stateful Packet Filtering)이 등장합니다.

서버/클라이언트 사이에 이미 접속이 이루어졌다면 이후에 주고받는 패킷에 대해서는 자동으로 패킷의 상태를 확인해서 전송을 허용할 수 있습니다.

텔넷 서버에 대한 접속 요청이 전달된 다음에는 패킷의 상태를 확인( -m state)해서, 텔넷 서버에서 클라이언트로 가는 응답 패킷( ESTABLISHED), 텔넷과 관련된 패킷( RELATED)들을 허용( -j ACCEPT)하도록 FORWARD 사슬에 규칙을 정의합니다( -A FORWARD).

```s
administrator@test05:~$ sudo iptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT
```

- - -

Tip
TCP/IP 통신은 클라이언트와 서버가 서로 접속 요청(syn), 응답(syn ack), 확인(ack), 패킷을 주고받는 과정을 거쳐 시작됩니다.

ESTABLISHED는 3단계 접속 절차를 거쳐 접속이 허가된 패킷을 의미하며 RELATED는 해당 접속과 관련 있는 패킷을 의미합니다.

- - -

추가로 게이트웨이 장치에서도 인터넷 접속이 가능하려면 외부에서 들어오는 응답 패킷에 대한 접근을 허용해야 합니다.

외부 네트워크와 연결된 네트워크 인터페이스( -i eth0)로 들어오는 패킷의 상태를 확인( -m state)한 다음, 요청에 대한 응답 패킷( ESTABLISHED)과 관련 패킷( RELATED)을 허용( -j ACCEPT)하도록 INPUT 사슬에 규칙을 정의합니다( -A INPUT). 조금 복잡하지만, 하나하나 보면 이해가 될 것입니다.

```s
administrator@test05:~$ sudo iptables -A INPUT -i eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT
```

지금까지 정의한 filter 테이블의 규칙을 확인해봅시다.

이젠 test03과 test04에서도 test05를 거쳐 test02의 텔넷 서버에 접속할 수 있습니다.

이렇게 iptables만 잘 이용하면 꽤 복잡한 방화벽 규칙을 사용자가 직접 설정해서 활용하는 것도 가능합니다.

필터링 규칙은 순서가 매우 중요합니다.

iptables로 정의한 순서에 따라 규칙이 적용되기 때문입니다.

예를 들어 10.0.0.0/24에서 들어오는 모든 패킷을 제한하도록 정의한 다음 10.0.0.1에서 들어오는 패킷을 허용하도록 정의하면, 뒤에 추가한 규칙은 무시됩니다.

-A 옵션 대신 -I 옵션으로 규칙을 정의하면 그 규칙은 위로 삽입되기 때문에 순서를 변경할 수 있습니다.

```s
Chain INPUT (policy DROP)
target     prot opt source              destination
ACCEPT     all -- anywhere              anywhere
ACCEPT     all -- anywhere              anywhere
ACCEPT     all -- anywhere              anywhere                state RELATED,ESTABLISHED

Chain FORWARD (policy DROP)
target     prot opt source              destination
ACCEPT     all -- anywhere              anywhere
ACCEPT     all -- anywhere              anywhere
ACCEPT     tcp -- anywhere              10.0.0.2                tcp dpt:telnet
ACCEPT     all -- anywhere              anywhere state          RELATED,ESTABLISHED

Chain OUTPUT (policy ACCEPT)
target     prot opt source              destination
```

이제 test03과 test04에서도 test02(10.0.0.2)의 텔넷 서버에 접속 가능해야 합니다.

```s
administrator@test03:~$ telnet 10.0.0.2
Trying 10.0.0.2...
Connected to 10.0.0.2.
Escape character is '^]'.
Ubuntu 12.04.3 LTS
test02 login:
```

- - -

Tip

실제 가정용 네트워크 공유기, 네트워크 라우터 장치 또한 iptables와 같은 도구를 이용해서 패킷을 제어합니다. IP 매스커레이드와 패킷 필터링 이러한 장치들의 핵심 기능입니다.

- - -

- - -

Q iptables를 잘 다루고 싶습니다.

A iptables 명령의 옵션을 소개합니다. 필터링 사슬 전체를 조작하는 옵션입니다.

▼ 표 5-3 사슬 제어 옵션
| | |
|:---:|:---|
|-N|새로운 사슬 만들기|
|-L|사슬의 규칙을 보여주기|
|-X|비어 있는 사슬을 제거하기|
|-P|사슬의 규칙을 바꾸기|
|-F|사슬에 있는 모든 규칙을 지우기|

사슬의 규칙을 조작하는 옵션입니다.

▼ 표 5-4 규칙 제어 옵션
| | |
|:---:|:---|
|-A|사슬에 새로운 규칙을 추가하기|
|-I|사슬에 규칙을 삽입하기|
|-R|사슬에 있는 규칙을 다른 규칙과 교환하기|
|-D|사슬에 있는 규칙을 제거하기|

규칙을 정의하는 데 필요한 하위 옵션입니다.

▼ 표 5-5 하위 옵션
| | |
|:---:|:---|
|-s|출발지 주소(source address)|
|-d|목적지 주소(destination address)|
|--sport|출발지 포트 번호(source port)|
|--dport|목적지 포트 번호(destination port)|
|-p|프로토콜(protocol: tcp, udp, icmp 등)|
|-i|패킷이 들어오는 네트워크 인터페이스(inbound interface)|
|-o|패킷이 나가는 네트워크 인터페이스(outbound interface)|
|-f|분절된 패킷(fragment packet)|
|-j|규칙을 지정(jump)|

- - -

지금까지 설정한 iptables 규칙은 시스템을 다시 시작하면 모두 사라집니다.

규칙을 저장하고 시스템을 시작할 때 적용하는 방법에 대해 살펴봅시다.

다음과 같이 iptables-save 명령을 사용해서 현재 정의해 놓은 규칙을 /etc/iptables.rules 파일로 저장합니다.

```s
administrator@test05:~$ sudo sh -c "iptables-save > /etc/iptables.rules"
```

/etc/iptables.rules 파일 내용을 살펴보면 지금까지 각 테이블과 사슬마다 정의해 놓은 방화벽 규칙을 확인할 수 있습니다.

```s
administrator@test05:~$ cat /etc/iptables.rules

*nat
:PREROUTING ACCEPT [459:41054]
:INPUT ACCEPT [5:704]
:OUTPUT ACCEPT [65:4808]
:POSTROUTING ACCEPT [1:60]
-A POSTROUTING -o eth0 -j MASQUERADE

*filter
:INPUT DROP [0:0]
:FORWARD DROP [0:0]
:OUTPUT ACCEPT [237:26917]
-A INPUT -i eth1 -j ACCEPT
-A INPUT -i eth2 -j ACCEPT
-A INPUT -i eth0 -m state --state RELATED,ESTABLISHED -j ACCEPT
-A FORWARD -i eth1 -j ACCEPT
-A FORWARD -i eth2 -j ACCEPT
-A FORWARD -d 10.0.0.2 -p tcp -m tcp --dport 23 -j ACCEPT
-A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
```

네트워크 인터페이스를 활성화할 때 방화벽 규칙을 활성화시키기 위해 vi로 iptables-load라는 셸 스크립트를 작성해보겠습니다.

```s
administrator@test05:~$ vi iptables-load
```

파일에 정의된 방화벽 규칙을 적용하는 명령은 iptables-restore입니다.

앞서 저장해둔 방화벽 규칙 파일 /etc/iptables.rules에서 방화벽 규칙을 활성화시킬 것입니다.

```s
#!/bin/bash
/sbin/iptables-restore < /etc/iptables.rules
```

시스템 종료와 같은 이유 때문에 네트워크 인터페이스를 중지할 때 추가된 방화벽 규칙을 저장하도록 iptables-reload라는 셸 스크립트를 작성합니다.

```s
administrator@test05:~$ vi iptables-reload
```

iptables-save 명령을 이용해서 변경된 방화벽 규칙을 `iptables.rules` 파일에 저장합니다.

```s
#!/bin/bash
/sbin/iptables-save > /etc/iptables.rules
```

셸 스크립트를 실행시킬 수 있도록 두 파일의 허가권을 수정합니다.

```s
administrator@test05:~$ chmod +x iptables-load
administrator@test05:~$ chmod +x iptables-reload
administrator@test05:~$ ls -l
-rwxrwxr-x 1 shinjaehun shinjaehun 58 3월 5 00:21 iptables-load
-rwxrwxr-x 1 shinjaehun shinjaehun 55 3월 5 00:22 iptables-reload
```

방화벽 활성화 스크립트 iptables-load는

네트워크 인터페이스가 시작하기 전에 실행할 스크립트를 저장해두는 /etc/network/if-pre-up.d 폴더에 복사합니다.

그리고 방화벽 설정 저장 스크립트 iptables-reload는

네트워크 인터페이스를 중지하고 난 다음 실행할 스크립트를 저장해두는 /etc/network/if-post-down.d 폴더에 복사합니다.

```s
administrator@test05:~$ sudo cp iptables-load /etc/network/if-pre-up.d/
administrator@test05:~$ sudo cp iptables-reload /etc/network/if-post-down.d/
```

시스템을 재시작하고 iptables-load 스크립트가 정상적으로 동작하는지 iptables -L로 확인합니다.

사슬을 추가 또는 제거하여 방화벽 설정을 변경한 다음 시스템을 재시작하면 iptables-reload 스크립트에 의해 설정 내용이 저장될 것입니다.

```s
administrator@test05:~$ sudo reboot
```

- - -

Q 가상 게스트들을 삭제하고 싶어요.

A 우분투 방화벽 ufw에 대해 실습하고 난 이후에는 5장에서 추가한 가상 게스트를 삭제해도 됩니다.
  
6장부터는 다른 게스트를 사용할 것이기 때문입니다.

virsh undefine 명령으로 게스트를 삭제할 수 있습니다.

```s
shinjaehun@losttemple:~$ virsh undefine test01
shinjaehun@losttemple:~$ virsh undefine test02
shinjaehun@losttemple:~$ virsh undefine test03
shinjaehun@losttemple:~$ virsh undefine test04
shinjaehun@losttemple:~$ virsh undefine test05
```

게스트가 사용했던 가상 하드디스크 이미지도 모두 삭제합니다.

홈 디렉터리의 virtual_machines에 저장한 `test0`으로 시작하는 모든 파일  
(test01.img, test02.img, test03.img, test04.img, test05.img)을 삭제하는 명령입니다.

```s
shinjaehun@losttemple:~$ rm -f ~/virtual_machines/test0*
```

guest를 제외한 모든 게스트를 삭제한 상태입니다.

```s
shinjaehun@losttemple:~$ virsh list --all
 Id   이름                   상태
----------------------------------------------------
 *    guest                  종료

```

5장에서 추가한 가상 네트워크를 삭제할 수도 있습니다.

내부 네트워크 연결을 위해 생성했던 가상 네트워크 internal1과 internal2도 삭제하려면 

먼저 net-destroy 명령으로 가상 네트워크를 종료합니다.

```s
shinjaehun@losttemple:~$ virsh net-destroy internal1
shinjaehun@losttemple:~$ virsh net-destroy internal2
```

net-undefine 명령으로 가상 네트워크를 삭제합니다.

```s
shinjaehun@losttemple:~$ virsh net-undefine internal1
shinjaehun@losttemple:~$ virsh net-undefine internal2
```

default를 제외한 모든 가상 네트워크가 삭제된 상태입니다.

```s
shinjaehun@losttemple:~$ virsh net-list --all
 이름         상태     자동 시작  Persistent
----------------------------------------------------------
 default      활성화   예         예
```

- - -

#### 초보 시스템 관리자의 일기 | 우분투 방화벽 ufw로 시스템 보호하기

iptables를 이용해서 패킷 제어하는 방법을 실습해봤다.

다양한 규칙을 정의해서 패킷 흐름을 제어할 수 있다는 장점도 좋지만 테이블이니 사슬이니 방화벽 기능 한 줄 추가하기가 왜 이렇게 어려운지 짜증이 났다.

점심시간에 iptables에 대해 투덜거렸더니

선배가 아메리카노 한 잔을 요구하며 (이 인간은 조금도 베풀 줄 몰라!) 우분투에서 가볍게 사용 가능한 방화벽 도구를 소개해줬다.

ufw (Uncomplicated FireWall)는 손쉬운 조작으로 iptables 테이블, 사슬 설정을 대신해준다.

게이트웨이 장치처럼 복잡한 패킷 제어가 필요하다면 직접 iptables를 다뤄야 하지만,

네트워크 끝에 연결된 일반적인 컴퓨터라면 간단하게 ufw로 방화벽 설정이 가능하다.

ufw 실습을 위해 텔넷 서버를 운영하고 있는 test02에 로그인했다.

ufw status로 방화벽 상태를 확인했다.

기본적으로 방화벽이 비활성 inactive 상태이다.

iptables로 nat 테이블을 확인하면 각 사슬은 모든 접근을 허용한다.

```s
administrator@test02:~$ sudo ufw status
Status: inactive
administrator@test02:~$ sudo iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source              destination

Chain FORWARD (policy ACCEPT)
target     prot opt source              destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source              destination
```

ufw enable은 방화벽을 활성화한다.

방화벽 상태가 active로 변경된 것을 확인할 수 있다.

방화벽을 활성화한 다음부터 다른 게스트에서 텔넷 접근이 차단된다.

이렇게 ufw는 기본적으로 모든 접근을 제한하고 사용자가 정의한 특정 접근을 허용한다.

```s
administrator@test02:~$ sudo ufw enable
Firewall is active and enabled on system startup
administrator@test02:~$ sudo ufw status
Status: active
```

방화벽이 활성화되었기 때문에 test01에서 test02(10.0.0.2)에 telnet 접속을 시도해보면 연결이 되지 않는다.

```s
administrator@test01:~$ telnet 10.0.0.2
Trying 10.0.0.2...
```

nat 테이블 상태를 확인하니 입이 떡 벌어진다.

INPUT과 FORWARD 사슬의 기본 정책은 제한( DROP)으로 설정된다.

iptables의 기본 사슬인 INPUT, FORWARD, OUTPUT 외에 ufw가 자동 생성한 사슬이 정의되어 있고 기본 사슬에서 생성된 각 사슬을 참조하고 있다.

예를 들어 INPUT에는 ufw-after-input을 비롯한 수많은 사슬이, FORWARD에는 ufw-after-forward를 비롯한 수많은 사슬이 참조되어 있다.

ufw로 정의하는 방화벽 규칙은 바로 이 자동 생성된 사슬에 정의된다고 한다.

어쨌든 사용자 입장에서 좋은 것은 이 복잡한 규칙을 신경 쓰지 않아도 된다는 점이다.

```s
administrator@test02:~$ sudo iptables -L
Chain INPUT (policy DROP)
target prot opt source                    destination
ufw-before-logging-input all -- anywhere                anywhere
ufw-before-input all -- anywhere                 anywhere
ufw-after-input all -- anywhere                 anywhere
ufw-after-logging-input all -- anywhere                anywhere
ufw-reject-input all -- anywhere                 anywhere
ufw-track-input all -- anywhere                 anywhere

Chain FORWARD (policy DROP)
target prot opt source                    destination
ufw-before-logging-forward all -- anywhere                anywhere
ufw-before-forward all -- anywhere                anywhere
ufw-after-forward all -- anywhere                anywhere
ufw-after-logging-forward all -- anywhere                anywhere
ufw-reject-forward all -- anywhere                anywhere

Chain OUTPUT (policy ACCEPT)
target prot opt source                    destination
ufw-before-logging-output all -- anywhere                anywhere
ufw-before-output all -- anywhere                anywhere
ufw-after-output all -- anywhere                anywhere
ufw-after-logging-output all -- anywhere                anywhere
ufw-reject-output all -- anywhere                anywhere
ufw-track-output all -- anywhere                anywhere

Chain ufw-after-forward (1 references)
...
Chain ufw-after-input (1 references)
...
Chain ufw-after-logging-forward (1 references)
...
```

특정 포트에 대한 접근을 허용하려면 `ufw allow [포트번호]`를 입력한다.

텔넷은 23번 포트를 사용하고 있다.

이렇게 입력한 다음 다른 게스트에서 텔넷으로 test02(10.0.0.2)에 접속이 가능하다.

```s
administrator@test02:~$ sudo ufw allow 23
Rule added
Rule added (v6)
administrator@test02:~$ sudo ufw status
Status: active

To                         Action     From
--                         ------     ----
23                         ALLOW      Anywhere
23                         ALLOW      Anywhere (v6)
```

해당 포트번호에 대한 접근을 허용하면 tcp, udp 프로토콜 모두 적용된다.

프로토콜을 명시해서 접근을 허용하려면 `ufw allow [포트번호]/[프로토콜]`을 입력한다.

텔넷은 tcp 프로토콜로 동작하므로 다음과 같이 입력하면 된다.

```s
administrator@test02:~$ sudo ufw allow 23/tcp
```

접근 제한 규칙을 정의하려면 `ufw deny [포트번호]`를 입력한다.

22번 포트를 제한하는 규칙은 다음과 같다.

```s
administrator@test02:~$ sudo ufw deny 22
administrator@test02:~$ sudo ufw status
Status: active

To                         Action     From
--                         ------     ----
22                         DENY       Anywhere
23                         ALLOW      Anywhere
22                         DENY       Anywhere (v6)
23                         ALLOW      Anywhere (v6)
```

정의된 규칙을 삭제하려면 `ufw delete [정의된 규칙]`이라고 입력한다.

다음과 같이 바로 앞에서 정의한 규칙을 삭제해보자.

```s
administrator@test02:~$ sudo ufw delete deny 22
administrator@test02:~$ sudo ufw status
Status: active

To                         Action     From
--                         ------     ----
23                         ALLOW      Anywhere
23                         ALLOW      Anywhere (v6)
```

특정 IP 주소에 대한 접근을 차단하려면 하위 옵션을 넣어 `ufw deny from [IP 주소]`라고 입력한다.

- - -

**※ 여기서 문제!**

텔넷 서버(23)에 대한 접근을 허용한 상태에서 test03(10.0.10.1)의 접근만 차단하려고 한다.

이렇게 설정하면 test03에서 접근이 차단될까?

```s
administrator@test02:~$ sudo ufw deny from 10.0.10.1
Rule added
administrator@test02:~$ sudo ufw status
Status: active

To                         Action     From
--                         ------     ----
23                         ALLOW      Anywhere
Anywhere                   DENY       10.0.10.1
23                         ALLOW      Anywhere (v6)
```

정답은 ‘아니오’다.

test03에서 여전히 연결이 잘 된다.

iptables -L로 확인해보면 알 수 있는데,

INPUT이 참조하는 ufw-user-input 사슬에서 텔넷 서버에 대한 접근을 허용하는 규칙이

test03(10.0.10.1)의 접근을 제한하는 규칙보다 먼저 적용되기 때문이다.

```s
Chain ufw-user-input (1 references)
target     prot opt source            destination
ACCEPT     tcp  --  anywhere          anywhere          tcp dpt:telnet
ACCEPT     udp  --  anywhere          anywhere          udp dpt:23
DROP       all  --  10.0.10.1         anywhere
```

따라서 정말 test03의 접근을 제한하고 다른 게스트의 텔넷 접근을 허용하려면

다음과 같이 test03에 대한 접근 제한을 먼저 정의하고 20번 포트를 허용해야 한다.

그런데 이렇게 해버리면 기본 규칙은 제한(DROP)하지만,

특정 포트로 모든 접근을 허용(ALLOW)하고 다시 특정 IP 주소 접근만 제한( DENY)하는 이상한 규칙이 적용된다.

```s
administrator@test02:~$ sudo ufw deny from 10.0.10.1
administrator@test02:~$ sudo ufw allow 23
administrator@test02:~$ sudo ufw status
Status: active

To                       Action      From
--                       ------      ----
Anywawhere               DENY        10.0.10.1
23                       ALLOW       Anywhere
23                       ALLOW       Anywhere (v6)

administrator@test02:~$ sudo iptables -L
Chain ufw-user-input (1 references)
target     prot opt source              destination
DROP       all  --  10.0.10.0           anywhere
ACCEPT     tcp  --  anywhere            anywhere           tcp dpt:telnet
ACCEPT     udp  --  anywhere            anywhere           udp dpt:23
```

기본 정책은 제한(DROP)으로 두고 특정 IP 주소 대역에서

특정 포트로의 접근을 허용(ALLOW)하는 식으로 규칙을 간결하게 정의하는 편이 바람직하다.

ufw에 정의된 모든 규칙을 삭제해서 초기화하는 명령은 ufw reset이다.

초기화한 다음 ufw enable 명령으로 다시 방화벽을 활성화한다.

```s
administrator@test02:~$ sudo ufw reset
Resetting all rules to installed defaults. Proceed with operation (y|n)? y
administrator@test02:~$ sudo ufw enable
```

특정 IP 주소에서 특정 포트로 들어오는 접근을 허용하려면 `ufw allow from [IP 주소] to port [포트번호]`를 입력한다.

다음과 같이 test01(10.0.0.1)에서 텔넷 서버(23)에 대한 접근을 허용한다.

```s
administrator@test02:~$ sudo ufw allow from 10.0.0.1 to port 23
```

특정 네트워크에서 특정 포트로 들어오는 접근을 허용하려면 `ufw allow from [IP 주소] to any port [포트번호]`를 입력한다.

다음 명령은 test03과 test04가 속해 있는 10.0.10.0 네트워크 전체에서 텔넷 서버(23)에 대한 접근을 허용한다.

```s
administrator@test02:~$ sudo ufw allow from 10.0.10.0/24 to any port 23
```

이렇게 해서 ufw에 의해 방화벽 규칙이 간결하게 정의된 것을 확인할 수 있다.

```s
administrator@test02:~$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
23                         ALLOW       10.0.0.1
23                         ALLOW       10.0.10.0/24
```

