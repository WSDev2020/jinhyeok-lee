---
title: 리눅스 서버
key: linux server
date: 2020-03-08
---

# 리눅스 네트워크 서버 활용하기

지금까지 기본적인 우분투 조작법을 배웠습니다.

둘째마당에서는 주제를 바꿔 우분투를 서버 운영체제로 활용해볼까 합니다.

리눅스 가상 시스템을 테스트 환경으로 하여 서버와 클라이언트 사이의 통신을 구현하고, 수시로 변하는 요구조건에 따라 리눅스 네트워크를 구축해봅니다.

SSH, NFS, FTP, 웹 서버 등 다양한 리눅스 서버 운영 방법을 익히고 나면 시스템 관리자에 한 발 더 다가갈 수 있으리라 생각합니다.

지금부터 익혀 보겠습니다.

## 가상 시스템 구축하기

- - -

열씨미&게을러

- - -

**열씨미** 선배, 지난번 내주신 숙제 말인데요.

**게을러** 뭐야, 내가 네 담임 선생님이라도 되니? 숙제는 무슨…

**열씨미** 지난 주 회식 때 기억 안나요? 리눅스 서버 운영해보지도 않고 시스템 관리자를 어떻게 하냐고, 이번 주까지 다양한 리눅스 서버를 설치해보고 테스트해보라고 하셨잖아요.

**게을러** 음… 진실을 말해주지. 그때 그 말을 한 사람은 내가 아냐. 회식 때만 나타나는 나의 또 다른 자아랄까…

**열씨미** 이제 와서 무슨 소리예요!

**게을러** 그딴 걸 왜 해! `시스템 관리`라는 게 컴퓨터를 끄고 켤 줄만 알면 된다니까.

**열씨미** 자꾸 이러실 거예요! 일주일 동안 얼마나 고민을 했는데…

**게을러** 아니 리눅스 서버 설치하고 테스트해보는 데 무슨 고민이 필요한데?

**열씨미** 노트북에 리눅스를 설치하고 기본적인 사용법을 익히는 건 지금까지 이 책을 보면서 따라해 봤는데… 이게 제대로 동작하는지 다른 시스템에서 확인해보고 싶어서요.

**게을러** 그런데?

**열씨미** 건성으로 대답하지 말고 진지하게 들어주세요. 어쨌든, 리눅스 서버에 접속해서 확인해보려면 컴퓨터를 하나 더 장만해야 하고, 또 모든 컴퓨터가 인터넷에 접속하려면 네트워크 공유기도 필요하고 이렇게 뭐 추가로 구입해야 하는 게 부담 돼요. 어떻게 좋은 방법이 없을까요?

**게을러** 뭐야… 저기 발 밑에 굴러다니는 컴퓨터 가져가서 쓰면 되잖아.

**열씨미** 저렇게 후진 PC를 어떻게 사용해요? 가뜩이나 비좁은 옥탑방에서 자취하느라 컴퓨터 놔둘 공간도 없단 말예요!

**게을러** 알았으니까. 그만 징징대고 노트북 가져와봐.

**열씨미** 1년도 채 안 된 완소아이템이란 말예요. 소중히 다뤄주세요.

**게을러** 이게… 부탁하는 자의 태도인가? … 됐어. cpu가 vmx 플래그를 지원하는군. 가상 시스템 설치해봐.

**열씨미** 가상 시스템요?

**게을러** 응. 리눅스 가상 시스템. 리눅스 네트워크 실습하는 데 도움이 될 거야.

### 리눅스 가상 시스템이 무엇인가요?

리눅스 가상 시스템(Linux Virtual System)은 둘째, 셋째마당의 선결조건입니다.

리눅스 가상 시스템을 바탕으로 둘째마당에서 리눅스 네트워크 서버 운영을 실습해보고 셋째마당에서 시스템 자동화 도구들을 다루기 때문입니다.

먼저 가상 기술과 가상 시스템을 소개하고 리눅스 가상 시스템에 대해 살펴보겠습니다.

일반적인 컴퓨터 환경과 다른 가상 시스템의 동작 원리를 이해해야 하고 생소한 용어들이 여기 저기 등장하니 마음 단단히 준비해두기 바랍니다.

#### 가상 시스템이란

컴퓨터 가상 기술(Virtualization)은 물리적인 시스템 자원을 최대한 활용하기 위해 논리적으로 나누어 사용하는 기술을 의미합니다.

반대로 향상된 성능과 안정성을 얻기 위해 여러 시스템 자원을 하나로 연결하여 하나의 시스템 자원처럼 제공하는 기술 또한 넓은 의미에서 가상 기술에 포함됩니다.

가상 기술은 애플리케이션, 서버, 데스크탑, 네트워크, 저장 장치를 대상으로 하는 광범위한 기술입니다.

이 책에서 가상 시스템(Virtual System)은 가상 기술을 이용해서 여러 운영체제를 동시에 운영하는 시스템으로 한정해서 얘기하고자 합니다.

구체적으로 하이퍼바이저(Hypervisor)라는 가상 엔진 위에 다수의 논리적인 운영체제를 올려서 운영하는 시스템을 가상 시스템으로 정의합니다.

▼ 그림 4-1 컴퓨터 하나에 다양한 운영체제를 동시에 사용
![ ](/img/04/01.jpg)

실제로 실무에서는 클라우드나 웹 호스팅 같은 서버 서비스에 가상 시스템을 필수적으로 사용합니다.

가상 시스템을 필요로 하는 이유, 가상 시스템이 인기를 누리는 이유는 다음과 같습니다.

+ 모든 시스템이 언제나 100% 성능을 다 활용하지는 않기 때문에 낭비되는 자원이 있기 마련입니다.  
  가상 시스템은 다양한 서비스를 통합된 환경에서 제공하므로 시스템 자원을 효율적으로 쓸 수 있습니다.
+ 가상 시스템을 활용하면 고가의 서버 여러 대로 서비스를 제공하는 일을 서버 하나로 대신할 수 있으며 훨씬 적은 노력으로 시스템을 관리할 수 있기 때문에 비용을 절감할 수 있습니다.
+ 수십, 수백 대의 장비를 제한된 인원으로 일일이 유지 보수하는 일은 결코 쉬운 일이 아닙니다.  
  가상 시스템을 도입해서 관리해야 할 시스템을 줄이면 관리가 편리해집니다.
+ 시스템에 문제가 발생했을 때는 빠르게 문제의 원인을 찾아 원래대로 복구해야 합니다.  
  여러 시스템을 대상으로 하기보다 가상 시스템이 빠르게 복구할 수 있습니다.
+ 시스템 또는 장치를 물리적으로 추가하는 대신 가상 시스템에서는 필요한 시스템에 필요한 자원을 할당할 수 있기 때문에 확장이 용이합니다.

이 책을 읽고 있는 우리도 가상 시스템이 필요합니다.

여러 서브넷에서 네트워크를 구축해보려면 라우터, 스위치를 비롯한 네트워크 장비와 여러 컴퓨터들이 필요한데 이를 가상 시스템에서 구현해볼 수 있기 때문입니다.

물론 실제 물리적인 환경에서 구축하는 네트워크와 비교하면 세밀한 부분에서 차이가 있겠지만 네트워크를 구축하는 큰 흐름은 거의 동일합니다.

#### 리눅스 가상 시스템의 구조

시스템 하드웨어를 운영체제가 제어하고 운영체제 위, 사용자 영역에서 응용 프로그램이 돌아가는 일반적인 리눅스 시스템 환경과 다르게 리눅스 가상 시스템은 앞서 가상 엔진이라고 표현한 하이퍼바이저 위에서 가상 운영체제를 실행합니다.

▼ 그림 4-2 하이퍼바이저 위에서 운영되는 가상 시스템
![ ](/img/04/02.jpg)

하이퍼바이저(Hypervisor)는 물리적인 시스템에 다수의 가상 운영체제가 동시에 실행될 수 있게 해주는 논리적인 플랫폼(시스템 또는 소프트웨어)입니다.

하이퍼바이저에 따라 가상 기술도 다양한 방식으로 나뉩니다.

리눅스에서 사용할 수 있는 하이퍼바이저에는 KVM, VMware, Virtual PC 등이 있으며 우리가 사용할 하이퍼바이저는 커널 가상 장치인 KVM(Kernel Virtual Machine)입니다.

KVM은 리눅스 커널 모듈로 사용자 영역에서 가상 기술을 제공하는 하이퍼바이저입니다.

VMware나 Virtual PC와 달리 오픈 소스 기술로 제작되어 누구나 사용 가능합니다.

호스트(Host)는 가상 시스템을 운영하는 실제 시스템을 의미합니다.

첫째마당에서 설치하고 사용 방법을 익혀왔던 우분투 14.04가 호스트 역할을 맡습니다.

게스트(Guest)는 호스트에서 운영되는 가상 장치(Virtual Machine)입니다.

게스트는 호스트와 독립된 환경으로 각각 다른 운영체제로도 동작 가능합니다.

그림 4-2 처럼 우분투 14.04 호스트 위에 게스트로 윈도 7과 우분투 14.04를 동시에 운영할 수 있고 반대로 윈도 7 호스트 위에 게스트로 우분투 14.04를 운영할 수도 있습니다.

- - -

Tip

네트워크 세계에서 `네트워크에 연결된 장치`를 호스트라고 합니다. 가상 기술에서 호스트는 게스트를 운영하는 실제 시스템을 의미하는 전혀 다른 개념이므로 혼동하지 않기를 바랍니다.

- - -

이렇게 게스트가 다른 환경의 호스트에서 동작하려면 게스트의 명령을 호스트가 이해할 수 있는 명령으로 바꿔주는 에뮬레이터가 필요합니다.

QEMU는 KVM에서 사용하는 에뮬레이터로 게스트에서 호스트의 하드웨어를 제어할 수 있게 명령을 변환합니다.

그림 4-3은 리눅스 가상 시스템이 동작하는 방식을 보여줍니다.

▼ 그림 4-3 리눅스 가상 시스템의 동작 원리
![ ](/img/04/03.jpg)

➊ 게스트의 일반적인 애플리케이션 명령은 하이퍼바이저 없이 그대로 실행됩니다.

➋ 운영체제 수준의 명령, 예를 들어 하드웨어를 제어하기 위한 요청은 QEMU에게 보냅니다.

➌ QEMU는 명령을 변환해서 하이퍼바이저인 KVM에 보냅니다.

➍ 하이퍼바이저 KVM이 하드웨어를 제어합니다.

### 리눅스 가상 시스템 설치하기

KVM을 설치하기 전에 CPU가 가상 기술을 제공하는지 확인해야 합니다.

가상 기술을 지원하지 않는 CPU에서는 아쉽지만 가상 시스템을 활용할 수 없습니다.

준비가 끝나면 리눅스 가상 시스템 하이퍼바이저 KVM과 에뮬레이터 QEMU를 설치해봅시다.

#### 가상 기술 사용 가능한지 확인하기

KVM은 인텔 VT, AMD V 칩셋을 사용하는 가상 기술을 지원하는 CPU에서만 사용할 수 있습니다.

비교적 최근에 출시된 CPU를 사용하고 있다면 가상 기술을 지원합니다.

각 제조사 홈페이지에서 확인 가능합니다.

리눅스가 설치되어 있는 시스템에서는 CPU가 가상 기술을 지원하는지 cpuinfo에서 확인해볼 수 있습니다.

인텔 CPU인 경우에는 vmx 플래그가, AMD CPU인 경우에는 svm 플래그가 활성 상태라면 가상 시스템을 설치할 수 있습니다.

egrep -c 명령으로 CPU 정보를 보여주는 /proc/cpuinfo에서 vmx 또는 svm 플래그가 있는 행을 찾아 수를 셉니다.

쿼드코어로 CPU 코어가 넷이기 때문에 4가 표시됩니다.

```s
shinjaehun@losttemple:~$ egrep -c '(vmx|svm)' /proc/cpuinfo

4
```

0이라고 표시되면 CPU가 가상 기술을 지원하지 않는다는 의미입니다.

이런 환경에서는 KVM이 동작하지 않으며 QEMU에 의한 에뮬레이션만 제공됩니다.

가상 시스템이 아닌 에뮬레이션으로 게스트의 모든 명령이 호스트에 맞게 변환되기 때문에 성능이 매우 느릴 수밖에 없습니다.

어떤 모델은 바이오스에서 CPU 가상 기술을 활성화시킬지 결정할 수 있습니다.

부팅 화면에서 바이오스로 들어가서 가상화 관련 옵션을 활성화시켜야 합니다.

1. `Advanced Setup → CPU Options`를 선택합니다.
2. `Inter Virtualization Technology` 옵션에서 `Enabled`를 선택합니다.
3. 바이오스 내용을 저장하고 빠져나옵니다.

패키지 설치하기

apt-get 명령으로 qemu-kmv 패키지를 설치합니다.

qemu-kvm과 qemu-system 패키지에는 KVM 커널 모듈과 KVM에 최적화된 QEMU가 들어 있습니다.

가상 시스템 관리를 돕는 패키지도 함께 설치합니다.

libvirt-bin은 하이퍼바이저를 관리하는 라이브러리인 libvirt로 제작된 가상 장치 관리 도구입니다.

ubuntu-vm-builder 패키지는 가상 게스트를 생성하기 위해 필요한 패키지입니다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
shinjaehun@losttemple:~$ sudo apt-get install qemu-kvm qemu-system libvirt-bin ubuntu-vm-builder
```

설치가 끝나면 시스템을 다시 시작합니다.

lsmod 명령으로 KVM 모듈이 커널에 적재된 상태를 확인합니다.

kvm과 kvm_intel이 가상 기술 환경을 제공하는 핵심 커널 모듈입니다.

```s
shinjaehun@losttemple:~$ lsmod | grep kvm

kvm_intel    127786   0
kvm 384670   1        kvm_intel
```

일반적으로 시스템을 재시작하면 kvm 모듈이 자동으로 커널에 적재됩니다.

만일 kvm 모듈이 존재하지 않으면 패키지 설치 후 직접 modprobe 명령을 입력해야 합니다.

인텔 CPU는 kvm_intel, AMD CPU는 kvm_amd 모듈을 대상으로 modprobe 명령을 입력합니다.

```s
shinjaehun@losttemple:~$ modprobe kvm_intel
```

부팅 과정에서 커널 모듈을 활성화하려면 `/etc/modules` 파일에 커널 모듈 kvm과 kvm_intel을 직접 등록합니다.

vi 편집기로 `/etc/modules` 파일을 열어서 다음과 같이 입력합니다.

시스템을 재부팅해서 lsmod 명령으로 kvm 모듈을 확인합니다.

```s
# /etc/modules: kernel modules to load at boot time.
#
# This file contains the names of kernel modules that should be loaded
# at boot time, one per line. Lines beginning with "#" are ignored.
# Parameters can be specified after the module name.

lp
kvm
kvm-intel
```

가상 장치 관리 도구 libvirt 서비스를 자동으로 시작하게 만들기 위해 런레벨 편집기를 시작합니다.

```s
shinjaehun@losttemple:~$ sudo sysv-rc-config
```

- - -

Tip

런레벨 편집기 sysv-rc-config에 대해서 `런레벨 제어하기`에서 설명했습니다.

런레벨 2부터 5까지 libvirt-bin 서비스가 시작할 수 있도록 선택합니다. 선택이 끝나면 q를 눌러 빠져나옵니다.

▼ 그림 4-4 가상 장치 관리 도구 libvirt 실행을 위한 런레벨 편집

![ ](/img/04/04.jpg)

libvirt 서비스를 활용할 수 있는지 확인해봅니다.

virsh list 명령이 정상적으로 입력되면 됩니다.

- - -

```s
shinjaehun@losttemple:~$ virsh list
```

다음과 같은 오류 메시지가 나오면 시스템을 다시 부팅해보기 바랍니다.

```s
shinjaehun@losttemple:~$ virsh list

오류: 하이퍼바이저에 연결 실패
오류: 유효하지 않은 연결
오류: Failed to connect socket to '/var/run/libvirt/libvirt-sock': 허가 거부
```

### 가상 머신 관리자로 게스트 관리하기

가상 머신 관리자는 그래픽 환경에서 가상 장치를 관리할 수 있도록 해주는 편리한 도구입니다.

게스트 추가/제거, 시작/종료, 장치 설정 및 새로운 장치 추가, 콘솔 접속까지 모든 제어가 가능합니다.

상용 가상 시스템인 VMware나 Virtual PC 부럽지 않을 만큼 그래픽 환경에서 손쉽게 게스트를 다룰 수 있습니다.

#### 가상 머신 관리자 설치하기

apt-get 명령으로 가상 머신 관리자를 설치합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get install virt-manager
```

가상 머신 관리자를 실행하려면 ➊ 대시 홈을 선택해서, ➋ 빈 칸에 `virt-manager`라고 입력합니다.

프로그램 목록에 나타난 가상 머신 관리자를 선택해서 실행합니다.

▼ 그림 4-5 가상 머신 관리자 실행
![ ](/img/04/05.jpg)

다음과 같이 virt-manager를 처음 설치하고 실행했을 때 /var/run/libvirt/libvirt-sock에 대한 허가 거부로 virt-manager가 실행되지 않는다면 시스템을 재부팅해서 문제를 해결할 수 있습니다.

```s
Unable to connect to libvirt:

Failed to connect socket to '/var/run/libvirt/libvirt-sock': 허가 거부

Verify that:
- The 'libvirt-bin' package is installed
- The 'libvirtd' daemon has been started
- You are member of the 'libvirtd' group
```

#### 게스트 생성하기

게스트를 생성해봅시다.

그 전에 먼저 게스트로 설치할 운영체제 설치 CD나 이미지를 준비해둡니다.

`우분투 내려받기`를 참고해서 우분투 홈페이지에서 우분투 14.04 서버 이미지를 홈 디렉터리에 다운로드해 둡니다.

```s
shinjaehun@losttemple:~$ ls
ubuntu-14.04.1-server-i386.iso
```

- - -

Tip

가상 머신에 많은 메모리를 할당할 수 없기 때문에 32비트(i386) 우분투 서버 이미지가 필요합니다.

- - -

**2.** 가상 머신 관리자 초기 화면입니다.

시스템에 설치된 게스트 목록과 해당 가상 머신이 사용하는 CPU 점유율이 표시 됩니다.

게스트를 추가하려면 <img width="16px" height="16px" src="../img/04/00_1.jpg" /> 버튼을 선택합니다.

▼ 그림 4-6 가상 머신 관리자에서 게스트 추가하기
![ ](/img/04/06.jpg)

- - -

Tip

가상 머신 관리자에서 게스트는 `가상 머신`이라고 합니다.

- - -

**3.** `새 가상 머신 생성` 창이 나타납니다.

➊ 가상 머신 이름을 `virtual_machine`으로 입력하고 운영체제 설치 방법을 결정합니다(이름은 여러분이 원하는 대로 하면 됩니다)

➋ 다운로드한 ISO 이미지로부터 설치하기 위해 `로컬 설치 매체`를 선택했습니다.

`[앞으로]`를 클릭합니다.

▼ 그림 4-7 새 가상 머신 생성 창

![ ](/img/04/07.jpg)

**4.** 운영체제 `설치 매체 경로`를 지정합니다.

➊ `ISO 이미지 사용`을 선택하고 ➋ `[검색]`을 클릭하면 `ISO 매체 볼륨 위치 지정` 창이 나타납니다.

`로컬 검색`을 선택하고 홈 디렉터리에 받아둔 우분투 서버의 iso 이미지를 선택하여 `[열기]`를 클릭합니다.

➌ `OS 종류`는 `Linux`를, ➍ `버전`은 `Ubuntu 14.04 LTS`를 선택하고 `[앞으로]`를 클릭합니다.

▼ 그림 4-8 새 가상 머신 생성 창
![ ](/img/04/08.jpg)

직접 운영체제 CD ROM을 이용해서 게스트를 설치하려면 `설치 매체 경로`에서 `CDROM 또는 DVD 사용`을 선택하고 사용할 CD 드라이브를 지정합니다.

게스트에서 사용할 메모리 크기를 설정합니다.

호스트에 설치된 물리적인 메모리 총량과 동시에 실행할 게스트 수를 고려하여 설정해야 합니다.

사용할 CPU 수를 지정합니다.

메모리와 마찬가지로 동시에 실행할 게스트 수를 고려해야 합니다.

`[앞으로]` 버튼을 클릭합니다.

▼ 그림 4-9 메모리 크기와 CPU 수 지정
![ ](/img/04/09.jpg)

게스트에서 사용하는 메모리의 총 합은 물리적인 시스템 메모리 크기보다 클 수 있습니다.

하지만, 너무 많은 메모리를 동시에 사용하면 스왑이 발생하고 전체 시스템이 느려질 것입니다.

호스트가 사용할 메모리도 남겨야 한다는 사실을 잊지 말아야 합니다.

개인적인 경험으로는 4GB 메모리가 탑재된 시스템에 게스트(우분투 서버)의 메모리를 1024MB(1GB)로 설정한 환경에서 동시에 게스트 넷을 운영하니 시스템이 느려진다는 느낌을 받았습니다.

**6.** 게스트 운영체제가 설치될 가상 디스크 이미지(Virtual Disk Image, vdi)를 할당합니다.

호스트 하드디스크에 가상 디스크 이미지를 생성하도록 ➊ `컴퓨터의 하드 드라이브에 디스크 이미지 생성`을 선택하고, ➋ 저장소 용량을 설정합니다.

당연한 얘기지만 호스트의 물리적인 저장소 용량을 초과할 수 없으며 이렇게 저장소를 자동으로 생성하면 저장소 파일은 /var/lib/libvirt/images에 저장됩니다.

➌ `지금 전체 디스크를 할당`에 체크합니다.

➍ 필요하다면 기존에 사용하던 저장소 파일을 다시 사용 가능해서 새 가상 머신을 생성할 수도 있습니다.

`[앞으로]`를 클릭합니다.

▼ 그림 4-10 가상 디스크 이미지 할당
![ ](/img/04/10.jpg)

**7.** 마지막으로 네트워크를 비롯한 추가 옵션을 지정합니다.

➊ 게스트는 네트워크 주소 변환(Network Address Translation) 방식으로 호스트 또는 외부와 연결됩니다.

기본적으로 `default`라는 가상 네트워크로 정의되어 있습니다.

➋ 게스트의 네트워크 어댑터 하드웨어 주소(MAC 주소)가 자동으로 할당됩니다.

➌ 하이퍼바이저 종류로는 `kvm`이, ➍ 호스트 아키텍처를 기반으로 게스트가 사용할 아키텍처는 `i686`으로 자동 선택됩니다.

`[완료]`를 선택하면 가상 머신 생성이 시작됩니다.

저장소 용량이 클수록 하드디스크에 저장소를 할당하는 과정에서 시간이 걸립니다.

▼ 그림 4-11 네트워크 및 추가 옵션을 지정
![ ](/img/04/11.jpg)

- - -

Tip

NAT에 대해서는 5장에서 자세히 다룰 예정입니다.

- - -

**8.** 가상 머신 화면을 클릭하면 게스트를 제어할 수 있습니다.

`우분투 서버 설치하기`를 참고하여 게스트 운영체제인 우분투 서버를 설치합니다.

다시 호스트를 제어하려면 Ctrl + Alt를 동시에 누릅니다.

마우스 포인터가 나타날 것입니다.

▼ 그림 4-12 가상 머신에 우분투 서버 설치하기
![ ](/img/04/12.jpg)

- - -

Tip

가상 시스템을 이용해서 우분투 데스크탑을 설치할 수 있을까요? 물론입니다.

윈도는 어떨까요?

8장에서 리눅스와 윈도 시스템 사이에 자료 교환을 위한 삼바 서버에 대해 설명하며 윈도 게스트 설치 방법에 대해 소개하고 있습니다.

- - -

#### 가상 머신 관리자로 게스트 관리

게스트를 종료하고 가상 머신 창을 닫아보면 가상 머신 관리자에 추가한 게스트 목록을 확인할 수 있습니다.

게스트 운영체제를 시작하려면 게스트를 선택하고 <img width="16px" height="16px" src="../img/04/00_2.jpg" /> 버튼을 클릭합니다.

▼ 그림 4-13 게스트 운영체제 시작
![ ](/img/04/13.jpg)

CPU 사용량이 올라가는 것으로 보아 시스템이 부팅되었다는 사실을 알 수 있습니다.

열기 버튼을 클릭하면 게스트 가상 콘솔에 접속할 수 있습니다.

▼ 그림 4-14 게스트 가상 콘솔 접속
![ ](/img/04/14.jpg)

시스템 부팅과 가상 콘솔에 접속하는 기능 외에 가상 머신 관리자로 할 수 있는 일은 다음과 같습니다.

+ 필요하다면 <img width="16px" height="16px" src="../img/04/00_3.jpg" /> 버튼을 클릭하여 가상 머신의 동작을 일시 정지할 수 있습니다.  
  정지된 게스트는 가상 머신 창에서 마우스를 클릭해도 제어할 수 없습니다.  
  다시 <img width="16px" height="16px" src="../img/04/00_2.jpg" /> 버튼을 클릭하면 정상적으로 작동합니다.
+ <img width="16px" height="16px" src="../img/04/00_4.jpg" />버튼을 클릭하여 실행 중인 게스트를 종료할 수 있습니다.  
  종료 메뉴로 리부팅과 종료, Force Reset, 강제종료 마지막으로 저장을 선택할 수 있습니다.  
  <img width="16px" height="16px" src="../img/04/00_4.jpg" /> 버튼만 클릭하면 기본값으로 `종료`를 선택하게 됩니다.  
+ 리부팅과 종료는 소프트웨어적으로 종료 신호를 보내 안전하게 시스템을 재부팅하거나 종료하는 방법입니다.
+ Force Reset과 강제종료는 하드웨어적으로 리셋 버튼을 누르거나 전원을 내리는 방법입니다.  
  따라서 Force Reset 또는 강제종료를 선택하면 자료가 유실되거나 운영체제에 문제가 발생할 위험이 있습니다.
+ 마지막으로 저장을 선택하면 시스템 현재 상태 그대로 유지하여 게스트를 종료합니다.  
  다시 <img width="16px" height="16px" src="../img/04/00_1.jpg" /> 버튼을 눌러 해당 게스트를 실행하면 저장했을 때 상태로 복원됩니다.

<img width="16px" height="16px" src="../img/04/00_1.jpg" /> 버튼을 클릭하여 게스트를 종료하는데 반응이 없다면 게스트에 전원 관리 패키지인 acpid를 설치해야 합니다.

```s
administrator@guest:~$ sudo apt-get install acpid
```

#### 가상 머신 비디오 어댑터 모델 변경하기

게스트의 하드웨어 설정을 변경해봅시다.

게스트 화면이 제대로 화면에 표시되지 않을 때, 특히 윈도나 우분투 데스크톱처럼 그래픽 환경 운영체제를 설치한 경우에는 게스트 비디오 어댑터를 변경해서 최적의 해상도를 찾아줘야 합니다.

텍스트 환경인 우분투 서버는 터미널처럼 한 눈에 보기 쉽도록 해상도를 낮추는 편이 유리합니다.

게스트의 하드웨어 설정을 변경하려면 게스트를 중지 또는 종료해야 합니다.

가상 머신 창에서 <img width="16px" height="16px" src="../img/04/00_1.jpg" /> 버튼을 클릭하면 시스템을 종료합니다.

▼ 그림 4-15 시스템 종료
![ ](/img/04/15.jpg)

명령 프롬프트에 3장에서 배운 shutdown을 입력해서 시스템을 종료할 수도 있습니다.

```s
administrator@guest:~$ sudo shutdown -h now
```

<img width="16px" height="16px" src="../img/04/00_5.jpg" />버튼을 클릭합니다.

가상 머신에 대한 상세정보를 확인하거나 속성을 편집할 수 있습니다.

왼쪽에는 게스트가 사용하는 하드웨어 목록이, 오른쪽에는 각 하드웨어에 대한 세부 정보가 나타납니다.

`Video Cirrus`를 선택하고 `모델`로 `Vga`를 선택합니다.

Vga는 800×600 해상도를 지원하는 가상 비디오 어댑터입니다.

`[적용]`을 클릭합니다.

▼ 그림 4-16 가상 머신 비디오 어댑터 변경
![ ](/img/04/16.jpg)

- - -

Tip

Vga는 800x600 해상도를 지원하는 가장 기본적인 비디오 어댑터로 우분투 서버의 텍스트 콘솔 환경에서 사용하기에 적합합니다.

게스트에 우분투 데스크탑 또는 윈도 같은 그래픽 환경의 운영체제를 사용한다면 Qxl이나 Vmga을 이용해서 더 넓은 해상도와 빠른 그래픽 성능을 얻을 수 있습니다.

- - -

<img width="16px" height="16px" src="../img/04/00_2.jpg" /> 버튼을 눌러 게스트를 시작하고 <img width="16px" height="16px" src="../img/04/00_6.jpg" /> 버튼을 눌러 가상 머신 콘솔에 접속해봅시다. 텍스트 콘솔이 한 화면에 표시될 것입니다.

▼ 그림 4-17 해상도가 변경된 가상 머신 콘솔
![ ](/img/04/17.jpg)

#### 가상 머신 하드디스크 추가하기

새로운 하드웨어를 추가할 수도 있습니다.

하드디스크를 추가해봅시다.

먼저 <img width="16px" height="16px" src="../img/04/00_4.jpg" /> 버튼을 클릭하거나 게스트에서 shutdown 명령을 실행하여 실행 중인 게스트를 종료합니다.

가상 머신 창에서 <img width="16px" height="16px" src="../img/04/00_5.jpg" /> 버튼을 클릭하여 가상 머신 상세 정보로 넘어갑니다.

아래에 있는 `[하드웨어 추가]` 버튼을 클릭합니다.

`새 가상 하드웨어 추가` 창이 나타납니다.

하드디스크 추가를 위해 ➊ `Storage`를 선택하고 ➋ 추가할 하드디스크의 용량을 8.0으로 입력합니다(GB).

➌ 장치 유형으로는 SCSI, IDE, SATA, USB 등 다양한 하드디스크 유형을 선택할 수 있습니다. `SCSI disk`를 선택했습니다.

`[완료]`를 클릭합니다.

▼ 그림 4-18 새 가상 하드웨어 추가
![ ](/img/04/18.jpg)

- - -

Tip

**SATA disk는 선택하지 않습니다.**

버그가 있어서 나중에 스냅샷을 저장하는 과정에서 문제가 발생합니다.

- - -

게스트에 가상 디스크가 추가된 것을 확인할 수 있습니다.

추가한 하드디스크의 가상 디스크 이미지는 `/var/lib/libvirt/images` 디렉터리에 저장됩니다.

기본적으로 `[게스트 이름]-1.img` 형태로 이름이 정해집니다.

▼ 그림 4-19 추가된 가상 디스크 경로
![ ](/img/04/19.jpg)

하드디스크를 추가하긴 했는데 바로 사용할 수는 없습니다.

게스트로 부팅해서 하드디스크를 사용할 수 있도록 파티션을 나누고 리눅스 파일 시스템으로 포맷해야 합니다.

<img width="16px" height="16px" src="../img/04/00_2.jpg" /> 버튼을 눌러 게스트를 시작하고 <img width="16px" height="16px" src="../img/04/00_6.jpg" /> 버튼을 눌러 텍스트 콘솔로 접속하여 로그인합니다.

우분투가 부팅하면서 새 하드웨어인 SCSI 하드디스크를 감지합니다.

`/dev` 디렉터리에서 sda 파일을 찾을 수 있습니다.

`/dev`는 주변 장치가 파일로 등록되어 있는 디렉터리로서 `/dev/sda`는 방금 추가한 SCSI 하드디스크를 의미합니다.

```s
administrator@guest:~$ ls -l /dev/sda

brw-rw---- 1    root    disk    8, 0 Feb 9 12:11    /dev/sda
```

- - -

Tip

**파일 정보 앞에 일반 파일을 의미하는 `-`나 디렉터리를 의미하는 d가 아닌 b가 붙었습니다.**

b는 블록장치(block device), 일종의 저장장치를 의미한다고 이해하면 됩니다.

- - -

새로운 하드디스크를 추가했으면 하드디스크에 파티션을 생성하고 포맷하여 사용 가능하도록 설정해야 합니다.

하드디스크 파티션을 편집하는 도구인 fdisk를 사용하여 /dev/sda에 파티션을 생성합니다.

```s
administrator@guest:~$ sudo fdisk /dev/sda
Command (m for help):
```

p(print)를 누르면 하드디스크의 파티션 상태를 화면에 표시합니다.

아직 파티션을 할당하지 않은 상태이기 때문에 아무 정보도 표시하지 못합니다.

```s
...
Command (m for help): p
Disk /dev/sda: 8589 MB, 8589934592 bytes
255 heads, 63 sectors/track, 1044 cylinders, total 16777216 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x4f76e0e6

Device Boot Start End Blocks Id System
```

n(new)을 눌러 새 파티션을 생성합니다.

파티션 유형으로 주 파티션( p, primary) 또는 확장 파티션( e, extended) 중 하나를 선택하고 파티션 번호를 입력합니다.

파티션이 시작되는 섹터(First sector)와 끝나는 섹터(Last sector)의 값을 입력하는데 Enter를 누르면 기본값이 자동으로 입력됩니다.

다시 p를 눌러 파티션 상태를 확인하면 /dev/sda1 파티션이 생성된 것을 확인할 수 있습니다.

```s
Command (m for help): n
Partition type:
p primary(0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-16777215, default 2048):
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-16777215, default 16777215):
Using default value 16777215
```

```s
Command (m for help): p
Disk /dev/sda: 8589 MB, 8589934592 bytes
255 heads, 63 sectors/track, 1044 cylinders, total 16777216 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x4f76e0e6
```

```s
Device Boot Start End Blocks Id System
/dev/sda1 2048 16777216 8387584 83 Linux
```

- - -

Tip

주 파티션과 확장, 논리 파티션에 대한 설명은 2장의 `우분투 데스크탑 설치하기`를 참고합니다.

- - -

w(write)를 누르면 변경된 파티션 정보를 디스크에 기록합니다.

fdisk가 종료되고 명령 프롬프트로 돌아올 것입니다.

```s
Command (m for help): w
The partition table has been altered!

administrator@guest:~$
```

파티션이 생성되면 우분투에서 사용할 수 있도록 EXT4 파일 시스템으로 포맷합니다.

```s
administrator@guest:~$ sudo mkfs.ext4 /dev/sda1
```

`/mnt` 디렉터리에 포맷한 파일 시스템을 마운트할 디렉터리를 생성(mkdir)합니다.

mount 명령으로 파일 시스템을 마운트합니다.

-t 옵션으로 파티션 형식을 ext4로 설정하고 있습니다.

이제 파일 시스템을 읽고 쓸 수 있습니다.

```s
administrator@guest:~$ sudo mkdir /mnt/sda1
administrator@guest:~$ sudo mount -t ext4 /dev/sda1 /mnt/sda1
administrator@guest:~$ ls /mnt/sda1
lost+found
```

시스템이 부팅하면서 자동으로 파일 시스템을 마운트하도록 파일 시스템 테이블에 등록해야 합니다.

파일 시스템 테이블을 설정하는 /etc/fstab 파일을 편집기로 엽니다.

```s
administrator@guest:~$ sudo vi /etc/fstab
```

파일 아래에 다음과 같이 추가한 파티션 정보를 입력합니다.

파일을 저장해서 편집기를 종료하고 시스템을 재부팅해보면 자동으로 추가한 파티션을 `/mnt/sda1`이라는 디렉터리로 사용할 수 있을 것입니다.

```s
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
#
proc /proc proc nodev,noexec,nosuid 0 0
# / was on /dev/sda1 during installation
UUID=e25f750a-594f-458b-8947-c3ae06246598 / ext4 errors=remount
# swap was on /dev/sda3 during installation
UUID=967e3082-3afc-480f-9540-a3a80c6f0a84 none swap sw

/dev/sda1 /mnt/sda1 ext4 auto 0 0
```

### 텍스트 환경에서 가상 머신 관리하기

libvirt는 kvm을 비롯하여 다양한 하이퍼바이저를 통합적으로 제어하기 위해 만들어진 오픈 소스 API입니다.

libvirt로 제작된 도구들을 사용하면 가상 머신 관리자 없이 텍스트 환경에서도 가상 시스템을 제어할 수 있습니다.

익숙해지면 훨씬 더 빠르고 편리한 접근이 가능하므로 텍스트 환경에서 가상 머신 관리 방법을 알아둘 필요가 있습니다.

#### virt-install로 게스트 생성하기

텍스트 환경에서 게스트를 생성할 수 있는 여러 방법이 있습니다.

여기에서는 virtinst 패키지에 들어 있는 virt-install 스크립트를 이용해보겠습니다.

virtinst과 함께 virt-viewer를 설치합니다.

virt-viewer는 qemu가 에뮬레이트하는 게스트에 접속하여 화면에 표시해주는 도구입니다.

```s

shinjaehun@losttemple:~$ sudo apt-get install virtinst virt-viewer

```

- - -

Tip

virtinst 패키지는 가상 머신 관리자를 설치할 때 함께 설치됩니다.

가상 머신 관리자를 미리 설치한 사용자는 virtinst를 별도로 설치할 필요가 없습니다.

- - -

virt-install로 게스트를 생성할 때는 게스트의 이미지 파일 경로를 직접 지정할 수 있습니다.

사용자 홈 디렉터리에 virtual_machines라는 디렉터리를 만들어서 관리하도록 합니다.

```s
shinjaehun@losttemple:~$ mkdir virtual_machines
```

virt-install 스크립트를 이용해서 우분투 서버를 설치해봅시다.

virt-install 스크립트가 하는 일은 가상 머신 관리자로 게스트를 생성할 때 입력했던 내용들을 한 번에 입력하는 과정으로 이해하면 됩니다.

게스트 속성을 정의하는 데 여러 옵션이 필요합니다.

▼ 표 4-1게스트 속성을 정의하는 옵션
|옵션|설명|
|:---:|:---|
|name|게스트 이름을 입력합니다. 관리하는 게스트 이름이 중복되면 안 되기 때문에 guest로 결정했습니다 (가상 머신 관리자에서 virtual_machine을 생성했었습니다).|
|ram|게스트에 할당할 메모리 용량을 결정합니다. 1GB를 할당했습니다.|
|os-type|게스트 운영체제의 종류로 linux라고 입력했습니다.|
|os-variant|게스트 운영체제의 정확한 명칭을 입력합니다. 우분투 14.04는 ubuntutrusty로 정의되어 있습니다.|
|hvm|게스트가 전가상 기술(Full Virtuaization)을 사용한다는 의미입니다.|
|connect|설치 과정에서 virt-viewer로 qemu가 에뮬레이트하는 시스템에 접속합니다. `qemu:///system`에서 `/`가 셋이므로 오타에 주의하기 바랍니다.|
|network|호스트 또는 외부와 연결하기 위한 가상 네트워크를 지정합니다. 기본값인 default를 사용하는데, 게스트는 192.168.122.0/24 대역의 IP 주소를 호스트에서 자동으로 할당받게 됩니다.|
|cdrom|전에 받아둔 우분투 서버의 iso 이미지 경로를 입력합니다.|
|disk path|게스트 이미지 파일의 경로를 지정합니다. 앞에서 생성한 virtual_machines에 게스트 이름과 동일한 이미지 파일을 생성하겠습니다. 하위 옵션인 size는 게스트 이미지의 크기를 기가바이트 단위로 나타냅니다|

```s
shinjaehun@losttemple:~$ sudo virt-install --name=guest \
> --ram=1024 --os-type=linux --os-variant=ubuntutrusty \
> --hvm -connect=qemu:///system --network network:default \
> --cdrom=/home/shinjaehun/ubuntu-14.04.1-server-i386.iso \
> --disk path=/home/shinjaehun/virtual_machines/guest.img,size=10
```

- - -

Tip

추가 옵션이 많아 명령이 길어지기 때문에 보기 쉽게 줄마다 `\`를 붙였습니다.

터미널에서 `\`를 입력하고 Enter를 누르면 행이 바뀌면서 추가로 명령을 입력할 수 있습니다.

이 명령에서 가장 중요한 옵션은 게스트가 사용할 메모리 크기를 결정하는 ram입니다. `게스트 생성하기`를 참고해서 결정하기 바랍니다.

- - -

스크립트가 시작되면 가장 먼저 가상 디스크 이미지를 생성하고 게스트를 등록합니다.

게스트가 준비되면 자동으로 virt-viewer를 통해 접속됩니다.

`우분투 서버 설치하기`를 참고하여 우분투 서버를 설치합니다.

가상 머신 관리자처럼 게스트 창에서 마우스를 클릭하면 게스트를 제어할 수 있으며 다시 호스트를 제어하려면 Ctrl + Alt를 동시에 눌러야 합니다.

앞으로 다른 게스트는 이번에 설치하는 게스트를 기반으로 만들어지므로 한 가지 주의하기 바랍니다.

호스트 이름을 `guest`로, 사용자 이름은 `administrator`로 통일하도록 합니다.

▼ 그림 4-20 virt-viewer로 가상 콘솔에 접속
![ ](/img/04/20.jpg)

- - -

Tip

libvirt에서는 게스트를 도메인이라고 합니다.

게스트를 생성한 다음 virt-viewer로 실행 중인 게스트에 접속하려면 `virsh로 가상 시스템 관리하기`를 참고합니다.

- - -

#### virsh로 가상 시스템 관리하기

virsh는 libvirt로 만들어진 가상 시스템 관리 셸입니다.

게스트를 관리하는 virsh 하위 명령들을 살펴봅시다.

list 명령은 활성화된 게스트 목록과 상태를 화면에 보여줍니다.

옵션 -all을 추가 입력하면 시스템에 설치된 모든 게스트 목록과 상태를 보여줍니다.

virtual_machine은 가상 머신 관리자를 이용해서, guest는 virt-install을 이용해서 설치한 게스트입니다.

```s
shinjaehun@losttemple:~$ virsh list
 Id 이름                상태
----------------------------------

shinjaehun@losttemple:~$ virsh list --all
 Id 이름                상태
----------------------------------
- virtual_machine       종료
- guest                 종료
```

- - -

**이렇게 하세요!**

virsh만 입력하면 대화식 터미널 상태에서 명령을 내릴 수 있습니다.

virsh 프롬프트에서 하위 명령을 직접 입력할 수 있으며 quit를 입력해서 virsh 터미널을 종료할 수 있습니다.

```s
shinjaehun@losttemple:~$ virsh
virsh, 가상화 대화식 터미널에 오신 것을 환영합니다.

입력: 명령을 사용하여 모든 문제 해결을 위해 `help` 입력
      종료하기 위해 `quit` 입력

virsh #
```

- - -

start 명령으로 게스트를 시작합니다.

부팅할 게스트 이름을 옵션으로 붙여서 입력합니다.

list 명령으로 확인하면 게스트가 실행 상태인 것을 확인할 수 있습니다.

실행 중인 게스트는 ID가 붙습니다.

게스트 이름과 함께 ID를 이용해서 게스트 제어가 가능합니다.

```s
shinjaehun@losttemple:~$ virsh start virtual_machine
도메인 virtual_machine가 시작됨

shinjaehun@losttemple:~$ virsh list --all
Id 이름                 상태
----------------------------------
 1 virtual_machine      실행중
 - guest                종료
```

실행 중인 게스트에 접속하려면 앞에서 설치한 virt-viewer를 이용합니다.

-c 스위치로 qemu가 에뮬레이트하는 로컬 시스템의 게스트에 접속하고 마지막에 접속 대상 게스트 ID나 게스트 이름을 입력합니다.

명령 마지막에 & 기호를 붙이는 이유는 virt-viewer를 실행시켜 놓고 터미널을 사용할 수 있는 상태로 남겨두기 위해서입니다.

virt-viewer를 백그라운드에서 실행시킵니다.

```s
shinjaehun@losttemple:~$ virt-viewer -c qemu:///system 1 &
```

- - -

Tip
-c 스위치로 입력하는 값 `qemu:///system`에서 URI 식별자 `/`를 세 번 입력해야 합니다.

주의하세요.

접속 대상으로 게스트 ID 값인 1을 입력했는데 `virtual_machine`이라고 직접 게스트 이름을 입력해도 됩니다.

- - -

shutdown 명령으로 게스트를 종료합니다.

종료할 게스트의 ID나 이름을 입력합니다.

게스트에 접속하여 명령 프롬프트에서 shutdown 명령을 입력하는 것과 동일합니다.

참고로 게스트를 종료하거나 실행할 때마다 게스트 ID 값이 변경되므로 게스트를 제어할 때마다 virsh list로 ID 값을 확인할 필요가 있습니다.

```s
shinjaehun@losttemple:~$ virsh list
 Id 이름                 상태
----------------------------------
  1 virtual_machine     실행중

shinjaehun@losttemple:~$ virsh shutdown 1
도메인 virtual_machine가 종료됨

shinjaehun@losttemple:~$ virsh list --all
 Id 이름                 상태
----------------------------------
 - virtual_machine       종료
 - guest                 종료
 ```

- - -

이렇게 하세요!
`가상 머신 관리자로 게스트 관리하기`에서 설명했듯이 호스트에서 virsh로 shutdown 명령이나 reboot 명령을 입력했는데 게스트가 반응이 없다면 게스트에 전원 관리 패키지인 acpid를 설치해야 합니다.

- - -

reboot 명령은 게스트를 재부팅합니다.

게스트가 실행 중인 상태에서 다시 부팅하는 명령으로 게스트에 접속하여 명령 프롬프트에서 reboot 명령을 입력하는 것과 동일합니다.

```s
shinjaehun@losttemple:~$ virsh list
 Id 이름                 상태
----------------------------------
  2 virtual_machine      실행중

shinjaehun@losttemple:~$ virsh reboot 2
도메인 2가 재부팅됨
```

어떤 이유로 게스트를 강제로 종료해야 한다면 destroy 명령을 사용합니다.

컴퓨터를 사용하다 전원 스위치를 내리는 것과 같으며 파일 시스템에 문제가 발생할 수도 있습니다.

그래도 어쩔 수 없는 경우가 발생하기 마련입니다.

```s
shinjaehun@losttemple:~$ virsh list
Id 이름                 상태
----------------------------------
2 virtual_machine       실행중

shinjaehun@losttemple:~$ virsh destroy 2
2 도메인 강제 종료
```

VMware 같은 다른 가상 시스템에서 스냅샷이라고 부르는 기능으로 게스트 상태를 저장하는 명령 save가 있습니다.

먼저 게스트를 시작해서 virt-viewer로 접속합니다.

```s
shinjaehun@losttemple:~$ virsh start virtual_machine
shinjaehun@losttemple:~$ virt-viewer -c qemu:///system virtual_machine &
```

테스트를 위해 로그인하고 touch a b c d e f g 명령으로 파일들을 생성해둡니다.

▼ 그림 4-21 virsh save로 상태 저장하기
![ ](/img/04/21.jpg)

게스트 상태를 저장하는 save 명령은 `virsh save [게스트] [파일명]` 형식으로 입력합니다.

virtual_machine의 상태를 `virtual_machine_140925`라는 파일에 저장합니다.

상태가 저장된 이후 게스트는 종료됩니다.

```s
shinjaehun@losttemple:~$ virsh save virtual_machine virtual_machine_140925
```

- - -

**이렇게 하세요!**

하드디스크 제어기로 SATA 버스를 사용하면 스냅샷을 저장하는 과정에서 다음과 같이 오류가 발생합니다.

버그를 해결하려면 SATA 대신 SCSI 버스를 선택하기 바랍니다.

```s
shinjaehun@losttemple:~$ virsh save virtual_machine virtual_machine_140925

오류: 도메인 virtual_machine를 virtual_machine_140925에 저장하기 실패
오류: internal error: unable to execute QEMU command 'migrate': State
blocked by non-migratable device '0000:00:06.0/ich9_ahci'
```

게스트를 복원하는 명령은 restore입니다.

`virsh restore [파일명]` 형식으로 입력합니다.

앞에서 저장한 파일을 지정해서 복원합니다.

```s
shinjaehun@losttemple:~$ virsh restore virtual_machine_140925
virtual_machine_140925에서 도메인이 복구됨
```

virt-viewer로 가상 콘솔에 접속해보면 저장하기 전 게스트 상태(파일들을 생성한 상태)가 그대로 유지됨을 확인할 수 있습니다.

이 기능을 활용하면 게스트를 어떻게 바꿔놓더라도 항상 특정 시점으로 돌려놓을 수 있게 됩니다.

가상 시스템이기 때문에 사용 가능한 매력적인 기능입니다.

```s
shinjaehun@losttemple:~$ virt-viewer -c qemu:///system virtual_machine &
```

게스트를 삭제하려면 undefine 명령을 사용합니다.

undefine 명령은 게스트가 종료된 상태에서 입력해야 합니다.

가상 시스템 하나를 완전히 사라지므로 이 명령을 내릴 때는 매우 조심해야 합니다.

여기에서는 undefine에 대해서 이해하고 virtual_machine을 바로 삭제하지 않습니다.

```s
shinjaehun@losttemple:~$ virsh undefine virtual_machine
도메인 virtual_machine는 정의되지 않음

shinjaehun@losttemple:~$ virsh list --all
 Id 이름                 상태
----------------------------------
 - guest                 종료
 ```

 - - -

Tip

virtual_machine을 여기에서 바로 삭제하지 않도록 합니다.

- - -

가상 머신 관리자로 생성한 게스트를 virsh undefine으로 삭제한 다음에 /etc/libvirt/qemu 디렉터리의 게스트 설정 파일은 삭제되지만 /var/lib/libvirt/images 디렉터리의 가상 디스크 이미지는 그대로 남습니다.

가상 디스크 이미지까지 삭제해야 게스트를 깨끗하게 제거할 수 있습니다.

/var/lib/libvirt/images 디렉터리의 접근 권한 때문에 rm 명령을 실행하기 위해 sudo를 입력했습니다.

```s
shinjaehun@losttemple:~$ sudo rm /var/lib/libvirt/images/virtual_machine.img
```

- - -

Q 가상 콘솔에 접속하는 데 쉬운 방법이 없을까요?

A virt-viewer 가 생각보다 타이핑하기 까다롭습니다.

```s
shinjaehun@losttemple:~$ virsh start guest
shinjaehun@losttemple:~$ virt-viewer -c qemu:///system guest &
```

3장에서 배운 셸 스크립트를 이용해서 시스템 관리자의 수고를 덜어봅시다.

vv라는 이름의 스크립트를 만들어보겠습니다.

```s
shinjaehun@losttemple:~$ vi vv
```

`vv [게스트 이름]` 형식으로 입력해서 지정한 게스트를 실행하려고 합니다.

`[ -z 문자열 ]` 조건은 해당 문자열이 null인 경우, 즉 문자열이 비어 있으면 참으로 then 이하를 실행합니다.

변수 `$1`은 명령을 실행하는 셸 스크립트 바로 다음의 매개변수인 `게스트 이름`을 의미합니다.

게스트 이름이 존재하지 않으면 `echo` 명령으로 사용법을 알려줄 것입니다.

게스트 이름이 존재하면 else 이하를 실행하며, virt-viewer로 가상 콘솔에 접속할 것입니다.

```s
#!/bin/bash
if [ -z "$1" ]
then
 echo "usage: vv guestname"
else
 virt-viewer -c qemu:///system "$1" &
fi
exit 0
```

chmod 명령으로 vv에 실행 권한을 부여하고 /usr/local/bin으로 옮깁니다.

```s
shinjaehun@losttemple:~$ sudo chmod +x vv
shinjaehun@losttemple:~$ sudo cp vv /usr/local/bin/
```

이제부터는 virt-viewer 명령 대신 vv로 게스트를 시작할 수 있습니다.

```s
shinjaehun@losttemple:~$ vv guest
```

- - -

#### 게스트 비디오 어댑터 모델 변경하기

말이 나온 김에, 게스트 환경 설정 파일에 대해 살펴봅시다.

게스트 환경 설정 파일은 XML 형식 문서로 각 속성이 HTML 문서의 태그처럼 정의되어 있습니다.

이 파일을 이용하면 `가상 머신 관리자로 게스트 관리하기`와 `가상 머신 하드디스크 추가하기`에서 살펴본 가상 머신 관리자의 가상 머신 상세 정보 창에서 할 수 있는 일을 확인하거나 편집해볼 수 있습니다.

처음에는 이해하기 어렵지만 나중을 위해서라도 각 항목을 훑어볼 필요가 있습니다.

환경 설정 파일을 수정해서 게스트에 반영하려면 먼저 각 게스트가 종료된 상태여야 합니다.

```s
shinjaehun@losttemple:~$ virsh list --all

 Id 이름                상태
----------------------------------
 - guest                종료
 ```

virsh edit 명령으로 게스트의 환경 설정을 수정합니다.

```s
shinjaehun@losttemple:~$ virsh edit guest
```

- - -

Tip
virsh edit으로 게스트의 환경 설정 내용을 수정하면 실제 환경 설정 파일 `/etc/libvirt/qemu/[게스트].xml`을 수정하게 됩니다.

- - -

virsh edit 명령을 내리면 vi 편집기가 실행됩니다.

게스트에 대한 속성이 xml 형식으로 정의되어 있습니다.

`<domain type>`에는 도메인 유형으로 kvm이 정의되어 있으며 `<name>`에는 게스트 이름이 설정되어 있습니다.

`<uuid>`는 게스트에 부여된 고유 번호로 자동으로 할당되는 태그입니다.

`<memory>`와 `<vcpu>`는 게스트에 할당된 메모리와 CPU 수를 의미합니다.

```xml
<domain type='kvm'>
  <name>guest</name>
  <uuid>40290cba-e71f-0a3e-2225-885bff08dc63</uuid>
  <memory unit='KiB'>1048576</memory>
  <currentMemory unit='KiB'>1048576</currentMemory>
  <vcpu placement='static'>1</vcpu>
  <os>
    <type arch='i686' machine='pc-i440fx-trusty'>hvm</type>
    <boot dev='hd'/>
  </os>
  <features>
    <acpi/>
    <apic/>
    <pae/>
  </features>
  <clock offset='utc'/>
  <on_poweroff>destroy</on_poweroff>
  <on_reboot>restart</on_reboot>
  <on_crash>restart</on_crash>
```

다음은 장치 속성입니다.

시스템에 설치된 하드디스크와 CD 롬 드라이브, USB 컨트롤러가 정의되어 있습니다.

virt-install로 게스트를 생성하면서 지정한 하드디스크 이미지의 파일 경로가 보입니다.

```xml
<devices>
 <emulator>/usr/bin/kvm-spice</emulator>
 <disk type='file' device='disk'>
   <driver name='qemu' type='raw'/>
   <source file='/home/shinjaehun/virtual_machines/guest.img'/>
   <target dev='vda' bus='virtio'/>
   <address type='pci' domain='0x0000' bus='0x00' slot='0x04' function='0x0'/>
 </disk>
 <disk type='block' device='cdrom'>
   <driver name='qemu' type='raw'/>
   <target dev='hdc' bus='ide'/>
   <readonly/>
   <address type='drive' controller='0' bus='1' target='0' unit='0'/>
   </disk>
   <controller type='usb' index='0'>
     <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x2'/>
   </controller>
```

네트워크 인터페이스 속성입니다.

`<mac address>`에서 네트워크 어댑터에 부여된 하드웨어 주소를 확인할 수 있습니다.

```xml
<interface type='network'>
  <mac address='52:54:00:da:92:4a'/>
  <source network='default'/>
  <model type='virtio'/>
  <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/>
</interface>
```

나머지 내용은 게스트가 사용하는 장치에 대한 속성이 정의되어 있습니다.

`<video>`의 속성인 `<model type>`에서 비디오 어댑터 모델을 변경할 수 있습니다.

해상도를 떨어뜨리기 위해 cirrus에서 vga로 변경해봅시다.

파일을 저장하고 명령 프롬프트로 나갑니다.

```xml
    <serial type='pty'>
      <target port='0'/>
    </serial>
    <console type='pty'>
      <target type='serial' port='0'/>
    </console>
    <input type='mouse' bus='ps2'/>
    <input type='keyboard' bus='ps2'/>
    <graphics type='vnc' port='-1' autoport='yes'/>
    <video>

      <model type='vga' vram='9216' heads='1'/>

    <address type='pci' domain='0x0000' bus='0x00' slot='0x02' function='0x0'/>
    </video>
    <memballoon model='virtio'>
      <address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x0'/>
    </memballoon>
  </devices>
</domain>
```

- - -

Tip

오타 또는 구문 오류가 발생하면 방금 입력했던 내용이 자동으로 취소됩니다.

- - -

libvirt-bin 서비스를 재시작하여 변경된 환경 설정 내용을 적용합니다.

libvirt-bin 서비스를 재시작했기 때문에 게스트 ID는 1로 초기화됩니다.

```s
shinjaehun@losttemple:~$ sudo service libvirt-bin restart
libvirt-bin stop/waiting
libvirt-bin start/running, process 16542
```

게스트를 실행하고 접속하여 변경 여부를 확인합니다.

```s
shinjaehun@losttemple:~$ virsh start guest
shinjaehun@losttemple:~$ vv guest
```

- - -

이렇게 하세요!
`가상 콘솔에 접속하는 데 쉬운 방법이 없을까요?`에서 만들어 놓은 vv는 virt-viewer로 가상 콘솔에 접속하는 셸 스크립트입니다.

다음과 같이 직접 명령해도 문제없습니다.

```s
shinjaehun@losttemple:~$ virt-viewer -c qemu:///system guest &
```

- - -

#### 게스트 하드디스크 추가하기

물론 텍스트 환경에서도 게스트 하드웨어를 추가할 수 있습니다.

하드디스크를 추가해봅시다.

먼저 호스트에서 dd 명령으로 10GB의 이미지를 생성합니다.

dd는 파일을 변환해서 복사하는 명령으로 0을 반환하는 가상의 장치 `/dev/zero(if=/dev/zero)`를 1MB(bs=1M)씩 10240번(count=10240) 변환하여 `virtual_machine-2.img`라는 이미지 파일로 복사(of=virtual_machines/virtual_machine-2.img)합니다.

10GB의 이미지를 생성하는 과정은 시간이 좀 걸릴 것입니다.

```s
shinjaehun@losttemple:~$ dd if=/dev/zero of=virtual_machines/virtual_machine-2.img
bs=1M count=10240
```

생성한 하드디스크 이미지의 소유권을 root로, 접근 권한을 755로 조정합니다.

```s
shinjaehun@losttemple:~$ cd virtual_machines
shinjaehun@losttemple:~/virtual_machines$ sudo chown root:root virtual_machine-2.img
shinjaehun@losttemple:~/virtual_machines$ sudo chmod 755 virtual_machine-2.img
```

virsh edit 명령으로 게스트의 환경 설정을 수정합니다.

```s
shinjaehun@losttemple:~/virtual_machines$ virsh edit virtual_machine
```

시스템에 설치된 하드디스크 정보 `<disk type=`file` device=`disk`>` ~ `</disk>`를 복사해서 바로 아래 붙인 다음 하드디스크 `<source file>`에서 이미지의 파일 경로를 수정합니다.

시스템이 시작하면서 SCSI 방식의 하드디스크 sdb로 인식하도록 `<target>`을 수정합니다.

붙여 넣은 행에서 `<address>` 행은 삭제해야 합니다.

파일을 저장하고 편집기를 종료합니다.

```xml
<devices>
  <emulator>/usr/bin/kvm-spice</emulator>
  <disk type='file' device='disk'>
    <driver name='qemu' type='raw'/>
    <source file='/home/shinjaehun/virtual_machines/virtual_machine.img'/>
    <target dev='vda' bus='virtio'/>
    <address type='pci' domain='0x0000' bus='0x00' slot='0x04' function='0x0'/>
  </disk>
  <disk type='file' device='disk'>
    <driver name='qemu' type='raw'/>
    <source file='/var/lib/libvirt/images/virtual_machine-1.img'/>
    <target dev='sda' bus='scsi'/>
    <address type='drive' controller='0' bus='0' target='0' unit='0'/>
  </disk>
  <disk type='file' device='disk'>
    <driver name='qemu' type='raw'/>
    <source file='/home/shinjaehun/virtual_machines/virtual_machine-2.img'/>
    <target dev='sdb' bus='scsi'/>
  </disk>
  <disk type='block' device='cdrom'>
    <driver name='qemu' type='raw'/>
    <target dev='hdc' bus='ide'/>
    <readonly/>
    <address type='drive' controller='0' bus='1' target='0' unit='0'/>
  </disk>
```

다시 virsh edit 명령으로 게스트의 환경 설정을 확인합니다.

```s
shinjaehun@losttemple:~/virtual_machines$ virsh edit virtual_machine
```

앞에서 `<address>`를 삭제했는데 자동으로 값이 생성된 것을 확인할 수 있습니다. 하드디스크를 연결하면 시스템이 알아서 하드디스크를 인식하고 제어를 위해 자동으로 주소를 부여하는 원리와 같습니다.

```xml
<disk type='file' device='disk'>
   <driver name='qemu' type='raw'/>
  <source file='/home/shinjaehun/virtual_machines/virtual_machine-2.img'/>
  <target dev='sdb' bus='scsi'/>
  <address type='drive' controller='0' bus='0' target='0' unit='0'/>
</disk>
```

libvirt-bin 서비스를 재시작합니다.

```s
shinjaehun@losttemple:~$ sudo service libvirt-bin restart
```

게스트 virtual_machine을 시작해서 가상 콘솔에 접속해보면 /dev/sdb를 인식한 상태를 확인할 수 있습니다.

파티션을 생성하고 마운트하는 방법은 `가상 머신 하드디스크 추가하기`를 참고하면 될 것입니다.

```s
administrator@guest:~$ ls -l /dev/sdb
brw-rw---- 1 root disk 8, 0 10월   25   00:13   /dev/sdb
```

#### virt-clone으로 게스트 복제하기

게스트를 생성할 때마다 운영체제를 설치를 반복하는 일은 매우 번거롭습니다.

virt-clone을 이용하면 동일한 게스트를 다른 이름으로 복제할 수 있습니다.

virt-clone 역시 virtinstall 패키지에 포함되어 있는 스크립트입니다.

virt-clone으로 게스트를 복제해봅시다.

original에 복사할 원본, name에 생성할 대상을 입력합니다.

file은 복사 후 생성된 게스트가 사용할 가상 디스크 이미지 경로를 지정합니다.

명령을 실행하면 가상 디스크 이미지를 먼저 생성하고 게스트 정보를 복사해옵니다.

복사 시간은 가상 디스크 이미지 용량에 따라 다릅니다.

용량이 클수록 시간이 오래 걸립니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name clone \ 
> --file /home/shinjaehun/virtual_machines/clone.img
```

새로운 게스트 clone이 생성되었습니다.

guest와 중복되는 네트워크 설정을 수정하는 일이 남아 있지만 그래도 virt-install로 운영체제를 설치하는 과정에 비하면 매우 빠르게 게스트를 생성했습니다.

```s
shinjaehun@losttemple:~$ virsh list --all
Id  이름                 상태
----------------------------------
- virtual_machine        종료
- guest                  종료
- clone                  종료
```

- - -

Tip

게스트를 복제한 다음 호스트 이름을 수정하거나 IP 주소 정보를 변경해야 합니다.

호스트 이름 변경은 아래에서, IP 주소 변경은 `초보 시스템 관리자의 일기 | 실습에 필요한 가상 게스트 준비하기`에서 설명합니다.

- - -

복사 과정에서 네트워크 인터페이스의 하드웨어 주소(mac address)는 그대로 복사하지 않고 새로운 값을 생성해서 적용한다는 점이 중요합니다.

가상 디스크 이미지를 그대로 복사해서 사용하면 동일한 네트워크 인터페이스의 하드웨어 주소가 중복되어 발생하는 충돌 문제를 피할 수 없습니다.

virt-clone으로 복제한 게스트는 하드웨어 주소가 중복되지 않습니다.

diff 명령으로 복제한 게스트 환경 설정 파일을 비교해봅시다.

diff는 파일을 비교하는 명령이며, `diff [원본파일] [대상파일]` 형식으로 입력합니다.

게스트 이름 name과 고유번호인 uuid, 가상 디스크 이미지 파일 경로 뿐 아니라 하드웨어 주소도 자동적으로 변경되어 있습니다.

```s
shinjaehun@losttemple:~$ sudo diff /etc/libvirt/qemu/guest.xml /etc/libvirt/qemu/clone.xml
4c4
<   virsh edit guest
---
>   virsh edit clone
9,10c9,10
<   <name>guest</name>
<   <uuid>40290cba-e71f-0a3e-2225-885bff08dc63</uuid>
---
>   <name>clone</name>
>   <uuid>dc785847-ecda-6e90-b224-8a333954d6d6</uuid>
31c31
<       <source file='/home/shinjaehun/virtual_machines/guest.img'/>
---
>       <source file='/home/shinjaehun/virtual_machines/clone.img'/>
49c49
<       <mac address='52:54:00:da:92:4a'/>
---
>       <mac address='52:54:00:5d:33:a8'/>
```

virt-clone으로 복제한 게스트를 시작하고 콘솔에 접속합니다.

```s
shinjaehun@losttemple:~$ virsh start clone
shinjaehun@losttemple:~$ vv clone
```

- - -

이렇게 하세요!

virt-viewer로 가상 콘솔에 접속해도 됩니다. `virsh로 가상 시스템 관리하기`를 참고하세요.

- - -

네트워크 정보 중에서 호스트 이름은 변경하도록 합니다.

호스트 이름은 /etc/hostname에서 수정합니다.

```s
administrator@guest:~$ sudo vi /etc/hostname
```

`guest`라는 이름을 새로운 이름으로 수정합니다.

파일을 저장합니다.

```s
clone
```

호스트 이름을 변경한 다음에는 반드시 시스템을 다시 시작해야 합니다.

재부팅하고 로그인하면 명령 프롬프트의 호스트 이름이 `aministrator@clone:~$`처럼 바뀌게 됩니다.

```s
administrator@guest:~$ sudo reboot
```

#### 초보 시스템 관리자의 일기 | 실습에 필요한 가상 게스트 준비하기

앞으로 virt-clone으로 수없이 많은 게스트들을 붕어빵 찍어내듯이 복제할 것이다.

오늘 했던 작업을 한 마디로 요약하자면 `복제할 대상 준비하기`라고 할 수 있다.

KVM의 가상 게스트는 네트워크 주소 정보를 자동으로 할당받는다.

게스트가 부팅하는 과정에서 IP 주소 정보를 요구하면, libvirt는 보유하고 있는 IP 주소 풀에서 사용하지 않는 주소 정보를 제공한다.

이 때문에 생길 수 있는 문제를 발견해서 선배에게 칭찬받았다.

뭐냐고? 게스트를 시작할 때마다 IP 주소가 달라진다는 점이다.

TCP/IP 기반 네트워크에서 호스트(가상 시스템에서의 호스트가 아니라 네트워크에 연결된 모든 장치들을 말하는 용어)끼리 접속하기 위해서는 접속 대상 호스트의 IP 주소를 알고 있어야 하는데 IP 주소가 계속 바뀐다면 사용자는 난처해질 수밖에 없다.

가상 시스템에서도 고정된 IP 주소를 사용할 수 있으며, 호스트와 동일한 네트워크에 존재한다면 외부 연결도 문제가 없다고 한다.

호스트는 외부 네트워크 192.168.0.0과 가상 네트워크 192.168.122.0을 연결한다.

외부 네트워크와 연결하기 위해 유선 네트워크 인터페이스, eth0에는 192.168.0.2를 할당하며 가상 네트워크 인터페이스 virbr0에는 192.168.122.1을 할당한 상태이다.

유선 네트워크 인터페이스의 IP 주소는 /etc/network/interface에서 수정 가능하며 가상 네트워크 인터페이스의 IP 주소는 virsh net-edit default 명령으로 수정할 수 있다.

게스트마다 고정적으로 IP 주소를 부여하려면 가상 시스템의 IP 주소 자동 할당 기능을 해제해야 한다.

guest에 네트워크 인터페이스(eth0)에 사설 IP 주소 192.168.122.100을 할당했듯이 나중에 게스트를 추가할 때마다 IP 주소를 규칙적으로 할당할 것이다.

▼ 그림 4-22 가상 게스트 guest 준비하기
![ ](/img/04/22.jpg)

앞에서 만들어둔, 그러나 불필요한 게스트를 모두 삭제하자.

가상 머신 관리자로 생성한 virtual_machine과 virt-clone 예제에서 나온 clone이 대상이다.

```s
shinjaehun@losttemple:~$ virsh list --all
 Id 이름                 상태
----------------------------------
 - virtual_machine       종료
 - guest                 종료
 - clone                 종료
 ```

 virsh undefine 명령으로 두 게스트를 삭제한다.

```s
shinjaehun@losttemple:~$ virsh undefine virtual_machine
shinjaehun@losttemple:~$ virsh undefine clone
shinjaehun@losttemple:~$ virsh list --all
 Id 이름                 상태
----------------------------------
 - guest                 종료
```

게스트의 하드디스크 이미지도 함께 삭제해야 한다.

하드디스크 이미지 경로는 가상 머신 관리자로 생성한 게스트는 /var/lib/libvirt/images, virt-install로 생성한 게스트는 홈 디렉터리에 만들어둔 virtual_machines이다.

virtual_machine에 추가한 하드디스크 이미지 `virtual_machine-1.img`와 `virtual_machine-2.img`도 함께 삭제한다.

디렉터리의 접근 권한 때문에 sudo를 사용했다.

이제 `guest.img`만 남았다.

```s
shinjaehun@losttemple:~$ sudo rm /var/lib/libvirt/images/virtual_machine.img
shinjaehun@losttemple:~$ sudo rm /var/lib/libvirt/images/virtual_machine-1.img
shinjaehun@losttemple:~$ sudo rm virtual_machines/virtual_machine-2.img
shinjaehun@losttemple:~$ sudo rm virtual_machines/clone.img
shinjaehun@losttemple:~$ ls virtual_machines
guest.img
```

안정적인 네트워크 환경을 고려해서 무선 네트워크보다는 유선 네트워크를 선택하자.

호스트의 네트워크 인터페이스 파일을 수정해서 eth0에 대한 정보를 입력한다.

```s
shinjaehun@losttemple:~$ sudo vi /etc/network/interfaces
```

무선 네트워크 인터페이스 wlan0에 대한 설정 내용은 행 앞에 `#` 표시를 붙여 주석 처리해서 무효로 한다.

케이블이 연결된 네트워크 인터페이스 eth0을 설정한다(설마 케이블을 연결하지도 않고 네트워크 연결이 가능할거라고 생각하지는 않는지?).

IP 주소 정보를 입력한다.

외부 네트워크 192.168.0.0에 연결하기 위해 192.168.0.2를 할당했다.

게이트웨이에서 IP 주소를 자동으로 받아온다면 2장의 `네트워크 설정하기`를 참고하여 dhcp 설정을 입력한다.

게스트와 연결되는 호스트의 가상 네트워크 인터페이스 virbr0에는 192.168.122.1이 부여될 것이다.

같은 IP 주소를 동일한 네트워크에서 사용하면 IP 주소가 충돌하므로 192.168.122.1에서 192.168.122.254까지의 주소는 피하도록 하자.

파일을 저장하고 편집기를 종료한다.

```s
auto lo
#iface lo inet loopback

auto eth0
iface eth0 inet static
       address 192.168.0.2
       network 192.168.0.0
       netmask 255.255.255.0
       broadcast 192.168.0.255
       gateway 192.168.0.1
       dns-nameservers 8.8.8.8 8.8.4.4

#auto wlan0
#iface wlan0 inet dhcp
#   allow-hotplug wlan0
#   wpa-ssid "gateway"
#   wpa-psk "password"
```

시스템을 다시 부팅해서 네트워크 연결 상태를 확인한다.

3장의 `연결 상태 진단 도구 ping`을 참고하여 ping으로 점검한다.

```s
shinjaehun@losttemple:~$ sudo reboot
```

virsh를 이용해서 게스트에 IP 주소를 자동으로 할당하는 기능을 중지해보자.

하위 명령 net-list는 현재 활성화 상태인 가상 네트워크를 보여준다.

목록에 나오는 default는 가상 시스템을 설치했을 때 자동으로 생성되는 기본 네트워크다.

```s
shinjaehun@losttemple:~$ virsh net-list

이름         상태   자동 시작 Persistent
----------------------------------------------------------
default      활성화  예          예
```

net-edit 명령을 내리면 vi 편집기가 실행되면서 가상 네트워크를 수정할 수 있다.

```s
shinjaehun@losttemple:~$ virsh net-edit default
```

게스트 하드웨어를 변경할 때처럼 네트워크 정보가 xml 형식으로 정리되어 있다.

다음과 같이 `<ip address>`에 중첩되어 있던 IP 주소의 자동 할당 범위(192.168.122.1 ~ 192.168.122.254)를 지정한 `<dhcp>`를 삭제하자.

참고로 `<ip address>`는 게스트와 연결하는 네트워크 인터페이스 virbr0의 IP 주소가 입력되어 있다.

파일을 저장하고 명령 프롬프트로 되돌아간다.

```xml
<network>
  <name>default</name>
  <uuid>84da0678-e56d-8fc2-6f8b-e8eba784849a</uuid>
  <forward mode='nat'/>
  <bridge name='virbr0' stp='on' delay='0' />
  <mac address='52:54:00:7B:64:0B'/>
  <ip address='192.168.122.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.122.2' end='192.168.122.254' />
    </dhcp>
  </ip>
</network>
```

virsh net-start로 변경된 default 네트워크를 시작한다.

```s
shinjaehun@losttemple:~$ virsh net-start default
```

게스트를 시작하고 가상 콘솔에 접속한다.

이번에는 부팅에 걸리는 시간이 길어진다.

`Waiting for network configuration…`이라는 메시지를 확인할 수 있는데 게스트는 아직 IP 주소를 자동으로 할당받도록 설정되어 있어 네트워크를 통해 IP 주소를 요청하지만, 가상 네트워크 default는 IP 주소를 자동으로 할당하는 기능을 해제했기 때문이다.

부팅에 성공하면 로그인한다.

```s
shinjaehun@losttemple:~$ virsh start guest
shinjaehun@losttemple:~$ vv guest
```

vi 편집기로 네트워크 설정을 변경한다.

```s
administrator@guest:~$ sudo vi /etc/network/interfaces
```

자동으로 주소 정보를 받아오는 `iface eth0 inet dhcp` 항목을 삭제하고 eth0의 IP 주소 정보를 다음과 같이 입력한다.

이때 게스트는 호스트와 동일한 네트워크에 존재해야 하며 호스트와 똑같은 IP 주소를 할당해서는 안 된다.

gateway는 게이트웨이 주소로 게스트와 연결되는 호스트의 네트워크 인터페이스 주소를 입력하고 dns-nameserver는 DNS 주소로 공용 DNS 주소를 입력하면 된다.

무엇보다 오타에 주의하기 바란다.

심지어 dns-namesers에서 마지막 `s`를 붙이지 않아 오류가 발생한 적도 많았다.

```s
# The primary network interface
auto eth0
iface eth0 inet static
   address 192.168.122.100
   network 192.168.122.0
   netmask 255.255.255.0
   broadcast 192.168.122.255
   gateway 192.168.122.1
   dns-nameservers 8.8.8.8 8.8.4.4
```

변경한 주소 정보를 적용해서 네트워크 인터페이스 eth0을 다시 활성화시킨다.

ifconfig 명령으로 IP 주소가 정상적으로 할당되었는지 살펴보고 3장의 `연결 상태 진단 도구 ping`을 참고해서 ping으로 연결 상태를 점검한다.

특히 호스트의 가상 네트워크 인터페이스 192.168.122.1과 연결이 되어야 한다.

호스트 쪽에서도 게스트에 대한 연결 상태를 점검(ping 192.168.122.100)한다.

```s
administrator@guest:~$ sudo ifdown eth0
administrator@guest:~$ sudo ifup eth0
```

네트워크에 연결된 호스트끼리 호스트 이름을 알고 있다면 서로 접속할 때 편리하다.

호스트 이름은 /etc/hosts 파일에 등록해둘 수 있다.

먼저 게스트의 /etc/hosts를 편집기로 열어 수정한다.

```s
administrator@guest:~$ sudo vi /etc/hosts
```

호스트의 IP 주소와 호스트 이름을 한 행으로 입력한다. 파일을 저장하고 편집기를 종료한다.

```s
127.0.0.1 localhost
127.0.0.1 guest
192.168.122.1  losttemple
```

호스트 /etc/hosts에도 게스트 주소 정보를 등록하자. /etc/hosts를 편집기로 연다.

```s
shinjaehun@losttemple:~$ sudo vi /etc/hosts
```

게스트의 IP 주소와 호스트 이름을 아래 행에 입력해서 파일을 저장한다.

```s
127.0.0.1 localhost
127.0.1.1 losttemple
192.168.122.100 guest
```

연결 상태를 다시 점검한다.

호스트와 게스트 양쪽 hosts 파일에 호스트 이름을 등록해뒀기 때문에 `ping [호스트 이름]` 형식으로 입력해도 자동으로 호스트 이름이 IP 주소로 변환되어 명령을 실행할 것이다.

```s
administrator@guest:~$ ping losttemple

shinjaehun@losttemple:~$ ping guest
```

필요한 설정은 모두 끝냈는가?

나중에 게스트를 사용할 때마다 반복하지 않도록 sudo apt-get upgrade 명령으로 최신 패키지로 업그레이드 해두고

2장의 `우분투 서버에서 영문 로케일 설정하기`를 참고해서 로케일은 영문으로 변경해두기 바란다.

마지막으로 언제든지 다시 복원할 수 있도록 현재의 게스트 상태를 스냅샷으로 저장해두자.

홈 디렉터리에 스냅샷을 저장할 디렉터리 snapshot을 생성하고 virsh save 명령으로 게스트 상태를 저장한다.

```s
shinjaehun@losttemple:~$ mkdir snapshot
shinjaehun@losttemple:~$ virsh save guest snapshot/guest_init
```

이쯤에서 정리하자. 게스트를 생성하고 나서 해야 할 일은 다음과 같다.

1. 게스트를 시작해서 가상 콘솔에 접속,로그인하기
2. 네트워크 인터페이스 설정 파일 `/etc/network/interfaces`에 게스트의 IP 주소 등록하기
3. `/etc/hosts`에 호스트 정보 추가하기
4. `/etc/hostname`을 열어서 호스트 이름 바꾸기 (가상 게스트인 guest는 virt-install을 설치하는 과정에서 호스트 이름을 지정했지만 virt-clone으로 게스트를 복제하면 호스트 이름도 복제한다. `virt-clone으로 게스트 복제하기`을 참고해서 호스트 이름을 바꿔야 한다.)
5. 시스템 재부팅하기