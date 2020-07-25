---
title: 파일 서버
key: linux ubuntu file server
date: 2020-03-08
---

# 리눅스 네트워크 서버 활용하기

## 파일 서버로 자료 공유하기

- - -

열씨미&게을러

**열씨미** 네트워크로 연결한 리눅스 시스템을 유용하게 활용하고 싶은데, 선배는 주로 어떤 용도로 사용하나요?

**게을러** 앞 장에서 SSH를 배웠잖아. 네트워크를 통해 제어 가능한 서버 시스템에 접속해서 ls 명령을 내릴 수 있지.

**열씨미** 좀 더 쓸 만한 네트워크 서비스를 제공하는 서버 시스템을 만들고 싶거든요?

**게을러** 이 사람이 뭘 몰라도 한참 모르는구먼… 과장님이 내 뒤에 계실 때 ls 명령으로 홈 디렉터리와 기타 시스템 디렉터리를 탭 키를 함께 써서 빠르게 조회하고 있으면 근무 시간에 매우 열심히 일 한다 생각하신단 말야.

**열씨미** 그런 거 말구요. 저는 네트워크를 통해 자료를 공유할 수 있는 시스템을 생각하고 있어요.

**게을러** 자료? 무슨 자료?

**열씨미** 뭐 사진, 음악, 영상 자료… 그런 거?

**게을러** 잠깐, 이상한 냄새가 나는군. 자네, 방금 영상자료라고 했나? 기쁨은 나누면 배가 되고 슬픔은 나누면 반이 된다는 우리 옛 조상들의 슬기로운 가르침 몰라? 훌륭한 영상 자료는 혼자서 독점하는 게 아니라 함께 공유하는 거라구!

**열씨미** 대체 무슨 생각하는 거예요!!! 그런 동영상 아니니 오해하지 마세요!

**게을러** 일반적으로 리눅스 기반 시스템끼리는 네트워크 파일 시스템(Network File System, NFS)을 사용하고 마이크로소프트 윈도 시스템과 자료를 공유하려면 삼바(SAMBA)가 필요해. 외부 네트워크를 통해 자료를 전송하려면 FTP를 사용하는 방법도 나쁘지 않지.

**열씨미** 음… 오늘따라 선배가 유난히 친절하다고 느껴지는 이유는 기분 탓일까요?

**게을러** 그러지 말고 어서 자료 공유 시스템을 구축해보자고. 스토리지 용량은 어느 정도 되는가? 기가바이트? 아니 테라바이트? 내 시스템에도 새 하드디스크를 추가해야 하는 거 아냐?

**열씨미** 그동안 미처 몰랐던 선배의 친절하고 상냥한 마음씨를 불에 기름을 부은 것 같은 선배의 눈빛을 통해 느낄 수 있네요.

- - -

### 자료 공유, 어떻게 해야 하나요

NFS, 삼바, FTP, SFTP에 대해 한 번쯤 들어본 적 있나요? 없어도 괜찮습니다.

이번 절에서는 리눅스 환경에서 자료를 공유할 수 있는 여러 가지 방법에 대해 살펴보겠습니다.

#### 리눅스 환경에서 자료 공유하기

리눅스에서 자료를 공유하는 수단은 다양합니다.

로컬 네트워크에서 자료를 공유할 때는 네트워크 파일 시스템 (Network File System, NFS)이나 삼바 (SAMBA)를 사용합니다.

대체로 유닉스 및 리눅스 시스템으로만 구성된 네트워크에서는 NFS를, 유닉스 및 리눅스 시스템과 마이크로소프트 윈도 Microsoft Windows 시스템이 혼합된 네트워크에서는 삼바를 사용합니다.

- - -

Tip

삼바를 이용해서 리눅스와 윈도, 맥 사이의 파일 공유도 가능합니다.

윈도에서 NFS 클라이언트가 존재합니다만 윈도와 혼합된 네트워크에서는 삼바를 사용하는 편이 일반적입니다.

- - -

인터넷과 같은 외부 네트워크를 통해 파일을 배포하려면 NFS나 삼바 대신 별도의 파일 전송 프로토콜인 FTP(File Trans ferProtocol)를 사용합니다.

인터넷 서비스 제공 업체가 보안을 이유로 NFS나 삼바가 사용하는 포트를 사용하지 못하도록 제한하기 때문입니다.

FTP 역시 인터넷 서비스 제공 업체가 사용하지 못하도록 제한하는 경우가 많지만 FTP의 경우 서버와 클라이언트에서 기본 포트 번호가 아닌 다른 번호를 사용해서 우회가 가능합니다.

- - -

Tip

윈도에서 폴더를 공유해 사용해본 경험이 있다면 폴더 공유 과정에서 윈도우가 파일 공유를 위해 사용하는 포트 번호 따위는 몰라도 된다는 사실을 알고 있을 것입니다.

다시 말해 윈도우 시스템의 파일 공유는 포트 변경이 불가능합니다.

윈도에서 변경된 포트로 접근할 수도 없습니다.

- - -

FTP로 파일을 배포하면 전송 자료가 그대로 외부에 노출될 위험이 있습니다.

따라서 보안을 유지해야할 필요가 있다면 SFTP(Secure FTP)를 사용해야 합니다.

SFTP는 앞 장에서 살펴본 SSH를 이용한 파일 전송 프로토콜입니다.

유닉스 및 리눅스 외에 다른 운영체제와 파일을 공유하기 위해서는 삼바가 유일한 대안입니다.

하지만, 사용자 영역에서 파일 공유를 처리하는 삼바에 비해 커널 영역에서 파일 공유를 처리하는 NFS가 성능 면에서 더 우수합니다.

보안을 위해 SFTP를 선택했다면 성능을 희생할 수밖에 없습니다.

네트워크를 통해 전송되는 자료를 암호화하는 과정을 거쳐야 하므로 SFTP는 다른 파일 공유 방법과 비교해서 가장 느린 것이 사실입니다.

일장일단이 있기 때문에 필요에 따라 적절한 파일 공유 서비스를 사용할 필요가 있습니다.

그림 7-1을 볼까요?

▼ 그림 7-1 내게 필요한 파일 공유 서비스 찾기
![ ](/img/07/01.jpg)

### NFS로 리눅스 시스템끼리 파일 공유하기

유닉스 및 리눅스 시스템끼리 자료를 공유하기 위해 네트워크 파일 시스템 (NetworkFileSystem, NFS)을 사용합니다.

NFS로 파일을 공유하면 로컬 시스템에 저장된 파일처럼 원격 시스템의 파일을 사용할 수 있습니다.

#### NFS란 무엇인가요

공유된 원격 호스트의 파일을 로컬에서 사용할 수 있도록 개발된 파일 시스템을 네트워크 파일 시스템(NFS)이라고 합니다.

전통적인 유닉스 환경에서는 오랫동안 네트워크에서 자료를 공유하는 방법으로 NFS를 사용했습니다.

NFS 서버가 파일을 공유하면 NFS 클라이언트가 공유한 디렉터리를 마운트해서 원격 호스트(NFS 서버)의 파일을 사용합니다.

▼ 그림 7-2 네트워크 파일 시스템
![ ](/img/07/02.jpg)

NFS는 손쉽게 파일을 공유할 수 있다는 장점이 있지만 보안에 취약하다는 단점이 있습니다.

NFS로 공유한 파일에는 일반적인 소유권과 접근 권한이 그대로 적용됩니다.

원격 시스템에서 어떤 사용자가 파일 소유자와 같은 UID로 공유 디렉터리에 접근해서 파일을 마음대로 사용할 수 있습니다.

루트 권한이 부여된 사용자가 공유 디렉터리에 접근한다면 더욱 위험합니다.

NFS로 파일을 공유할 때는 보안에 특별히 신경 써야 합니다.

#### NFS 서버 준비하기

6장에서 생성한 가상 게스트 server01에 NFS 서버를 설치해서 디렉터리를 공유합니다.

server02에서 공유 디렉터리를 마운트해서 사용해보겠습니다.

▼ 그림 7-3 NFS 서버에서 마운트한 공유 디렉터리 사용하기
![ ](/img/07/03.jpg)

디렉터리를 공유할 게스트 server01을 시작하고 ssh로 로그인합니다.

```bash
shinjaehun@losttemple:~$ virsh start server01
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
```

먼저 NFS 서버를 설치합니다.

apt-get install 명령으로 nfs-common와 nfs-kernel-server 패키지를 함께 설치합니다.

```bash
administrator@server01:~$ sudo apt-get update
administrator@server01:~$ sudo apt-get install nfs-common nfs-kernel-server
```

런레벨 편집기 sysv-rc-conf를 실행합니다.

```bash
administrator@server01:~$ sudo sysv-rc-config
```

nfs-kernel-server 서비스를 런레벨 2부터 5까지 활성화시킵니다.

설정이 끝나면 q를 눌러 런레벨 vi를 종료합니다.

▼ 그림 7-4 nfs-kernel-server 서비스 런레벨 2~5 활성화
![ ](/img/07/04.jpg)

클라이언트로 내보낼 공유 디렉터리를 생성합니다.

시스템 보안을 고려해 디렉터리 소유권을 nobody:nogroup으로 설정했습니다.

공유 디렉터리에 대한 접근 권한은 755로 설정했습니다.

```bash
administrator@server01:~$ sudo mkdir -p /srv/nfs/public
administrator@server01:~$ sudo chown nobody:nogroup /srv/nfs/public/
administrator@server01:~$ sudo chmod 755 /srv/nfs/public/
administrator@server01:~$ ls -l /srv/nfs/
drwxr-xr-x 2 nobody nogroup 4096 Apr 6 23:26 public
```

NFS로 공유할(내보낼) 디렉터리는 /etc/exports에서 설정합니다.

vi로 설정 파일을 편집합니다.

```bash
administrator@server01:~$ sudo vi /etc/exports
```

`[공유할 디렉터리]` 호스트 형식으로 입력합니다.

공유 디렉터리에 접근을 허용할 호스트 목록으로 IP 주소(192.168.122.202)를 입력해서 특정 호스트를 지정합니다.

192.168.122.0/24와 같이 네트워크 주소가 192.168.122.0인 호스트 목록을 함께 지정할 수도 있습니다.

all_squash 옵션을 부여해서 공유 디렉터리에 접근하는 사용자 권한을 익명 사용자 nobody로 지정합니다.

```bash
/srv/nfs/public 192.168.122.0/24(rw,all_squash,no_subtree_check)
```

- - -

Tip

괄호 안에 옵션을 입력할 때 `,` 전후로 공백 없이 입력해야 합니다.

- - -

설정 내용을 적용하기 위해 exportfs -ra 명령을 실행합니다.

```bash
administrator@server01:~$ sudo exportfs -ra
```

-v 옵션으로 공유한 디렉터리 정보를 확인합니다.

```bash
administrator@server01:~$ sudo exportfs -v
/srv/nfs/public
192.168.122.0/24(rw,wdelay,root_squash,all_squash,no_subtree_check,sec=sys,rw,root_squash,all_squash)
```

NFS 서비스를 재시작합니다.

```bash
administrator@server01:~$ sudo service nfs-kernel-server restart
```

netstat 명령을 실행하면 NFS 서버가 접속 요청을 기다리는 상태를 확인할 수 있습니다.

```bash
administrator@server01:~$ netstat -a | grep nfs
tcp     0    0 *:nfs                *:*                   LISTEN
tcp6    0    0 [::]:nfs             [::]:*                LISTEN
udp     0    0 *:nfs                *:*
udp6    0    0 [::]:nfs             [::]:*
```

다음은 방화벽 설정입니다.

보안을 위해 내부 네트워크에서 접근만 허용( allow from 192.168.122.0/24)하고 NFS 서버가 사용하는 2049포트와 111포트를 개방합니다.

```bash
administrator@server01:~$ sudo ufw allow from 192.168.122.0/24 to any port 2049
administrator@server01:~$ sudo ufw allow from 192.168.122.0/24 to any port 111
administrator@server01:~$ sudo ufw status
...
2049                       ALLOW       192.168.122.0/24
111                        ALLOW       192.168.122.0/24
```

- - -

**Q** NFS 공유 디렉터리 설정 옵션에 대해 알려주세요.
**A** /etc/exports에서 사용할 수 있는 공유 디렉터리 옵션을 소개합니다.

* rw: 파일 시스템을 읽고 쓰기가 가능하도록 공유합니다.

* ro: 파일 시스템을 읽기 전용으로 공유합니다.

* subtree_check: 시스템 보안 유지를 위해 하위 디렉터리를 검사하는 옵션입니다. 클라이언트가 파일을 사용할 때마다 해당 파일이 공유 디렉터리의 하위 디렉터리에 존재하는지 확인합니다. 악의적인 사용자나 프로그램에 의해 변조된 파일이 있는지 확인하기 때문에 안전하지만, 시스템 성능을 희생해야 합니다.

* no_subtree_check: 시스템 성능을 고려하여 하위 디렉터리 검사를 하지 않습니다(기본값).

* root_squash: 시스템 보안을 위해 공유 디렉터리에 대한 사용자의 루트 권한을 제한합니다(기본값).

* no_root_squash: 공유 디렉터리에 대한 사용자의 루트 권한을 허용합니다. 클라이언트에서 루트 권한을 가진 사용자가 공유 디렉터리를 마음대로 사용할 수 있기 때문에 관리에는 유용할지 몰라도 보안을 위협하는 불안 요소이기도 합니다.

* all_squash: 모든 사용자 권한을 익명 사용자 권한, nobody:nogroup으로 지정합니다. 불특정 다수를 대상으로 공유 디렉터리를 제공할 때 유용합니다.

- - -

#### 공유 디렉터리 마운트하기

공유 디렉터리를 마운트해서 사용할 NFS 클라이언트인 가상 호스트 server02를 시작하고 로그인합니다.

```bash
shinjaehun@losttemple:~$ virsh start server02
shinjaehun@losttemple:~$ ssh administrator@192.168.122.202
```

클라이언트에서 NFS 공유 디렉터리를 사용하기 위해 nfs-common 패키지를 설치합니다.

NFS 서버를 사용할 일이 없으면 nfs-kernel-server 패키지는 설치할 필요가 없습니다.

```bash
administrator@server02:~$ sudo apt-get install nfs-common
```

공유 디렉터리를 마운트할 디렉터리를 생성합니다.

```bash
administrator@server02:~$ sudo mkdir -p /mnt/nfs/public
```

공유 디렉터리를 마운트합니다.

mount 명령은 `mount [옵션] [NFS 서버]:/[공유 디렉터리 경로] [마운트할 경로]` 형식으로 입력합니다.

-t nfs 옵션으로 마운트 대상 유형이 NFS 파일 시스템이라고 지정합니다.

```bash
administrator@server02:~$ sudo mount -t nfs 192.168.122.201:/srv/nfs/public /mnt/nfs/pulic
```

df 명령으로 시스템에 마운트된 파일 시스템을 확인합니다.

다음과 같이 NFS 공유 디렉터리가 시스템에 마운트된 상태를 확인할 수 있습니다.

```bash
administrator@server02:~$ df -h
Filesystem                      Size Used Avail Use% Mounted on
...
192.168.122.201:/srv/nfs/public 8.0G 1.1G  6.5G  15% /mnt/nfs/public
```

클라이언트의 파일을 공유 디렉터리로 복사해봅시다.

클라이언트 홈 디렉터리에 생성한 `test_nfs` 파일을 공유 디렉터리로 복사합니다.

파일을 복사한 다음 파일 소유권을 확인하면 nobody:nogroup으로 설정되는데, 디렉터리를 공유할 때 all_squash 옵션을 지정했기 때문에 이런 현상이 발생하는 것입니다.

```bash
administrator@server02:~$ touch test_nfs
administrator@server02:~$ cp test_nfs /mnt/nfs/public/
administrator@server02:~$ ls -l /mnt/nfs/public/
-rw-rw-r-- 1 nobody       nogroup       13 Apr 12 14:34 test_nfs
```

- - -

Tip
공유 디렉터리를 ro 옵션으로 공유하면 읽기 전용 파일 시스템으로 마운트되기 때문에 쓰기를 허용하지 않습니다.

- - -

공유 디렉터리 사용이 끝나면 umount 명령으로 마운트해제 합니다.

umount [마운트 경로] 형식으로 입력합니다.

umount 명령 후, 공유 디렉터리에 존재하던 파일 정보가 사라집니다.

```bash
administrator@server02:~$ sudo umount /mnt/nfs/public
administrator@server02:~$ ls /mnt/nfs/public
```

- - -

**이렇게 하세요!**

공유 디렉터리 내에서 umount 명령을 실행하면 실패합니다(`device is busy`).

umount 명령은 공유 디렉터리 밖에서 실행해야 합니다.

```bash
administrator@server02:~$ cd /mnt/nfs/public
administrator@server02:/mnt/nfs/public$ sudo umount /mnt/nfs/public
umount.nfs: /mnt/nfs/public: device is busy
```

mount 명령을 실행할 때 NFS 서버의 공유 디렉터리 경로를 지정하지 않아도 마운트는 성공합니다.

단, 마운트 경로가 달라지는데 공유 디렉터리 경로가 추가됩니다.

administrator@server02:~$ sudo mount -t nfs 192.168.122.201:/ /mnt/nfs/public
administrator@server02:~$ ls /mnt/nfs/public
srv
administrator@server02:~$ ls /mnt/nfs/public/srv/nfs/public/
test_nfs

- - -

#### 공유 디렉터리 사용자 권한 유지하기

공유 디렉터리에 접근하는 사용자 권한을 그대로 유지하면 사용자 계정에 따라 공유 디렉터리를 좀 더 유연하게 활용할 수 있습니다.

먼저 NFS 서버를 운영하고 있는 server01에 공유할 디렉터리를 생성합니다.

```bash
administrator@server01:~$ sudo mkdir -p /srv/nfs/private
```

소유권은 시스템 사용자 계정 administrator에게, 접근 권한은 755로 설정합니다.

ls -l로 public 디렉터리와 private 디렉터리의 차이를 확인할 수 있습니다.

```bash
administrator@server01:~$ sudo chown administrator:administrator /srv/nfs/private
administrator@server01:~$ sudo chmod 755 /srv/nfs/private
administrator@server01:~$ ls -l /srv/nfs
drwxr-xr-x 2 administrator administrator 4096 Apr  7 00:14 private
drwxr-xr-x 2 nobody        nogroup       4096 Apr  6 23:58 public
```

/etc/exports에서 내보낼 디렉터리에 대한 설정을 추가합니다.

private 디렉터리에는 all_squash 옵션을 생략했습니다. 이렇게 되면 기본값인 root_squash 옵션만 적용됩니다.

```bash
/srv/nfs/public 192.168.122.0/24(rw,sync,all_squash,no_subtree_check)
/srv/nfs/private 192.168.122.0/24(rw,sync,no_subtree_check)
```

NFS 서버의 설정 파일을 다시 읽고(exportfs -ra) 내보낸 공유 디렉터리 목록을 확인(exportfs -v)합니다.

private 디렉터리에 root_squash 옵션이 자동 할당되었습니다.

public과 달리 private 디렉터리에는 all_squash가 할당되지 않습니다.

```bash
administrator@server01:~$ sudo exportfs -ra
administrator@server01:~$ sudo exportfs -v
/srv/nfs/public
192.168.122.0/24(rw,wdelay,root_squash,all_squash,no_subtree_check,sec=sys,rw,root_
squash,all_squash)
/srv/nfs/private
192.168.122.0/24(rw,wdelay,root_squash,no_subtree_check,sec=sys,rw,root_squash,no_all_
squash)
```

클라이언트에서 공유 디렉터리를 마운트할 디렉터리를 생성하고 private 디렉터리를 마운트합니다.

```bash
administrator@server02:~$ sudo mkdir -p /mnt/nfs/private
administrator@server02:~$ sudo mount -t nfs 192.168.122.201:/srv/nfs/private /mnt/nfs/private
```

df 명령으로 마운트한 파일 시스템을 확인할 수 있습니다.

```bash
administrator@server02:~$ df -h
Filesystem                        Size  Used  Avail Use% Mounted on
...
192.168.122.201:/srv/nfs/public   8.0G  1.1G  6.5G   15% /mnt/nfs/public
192.168.122.201:/srv/nfs/private  8.0G  1.1G  6.5G   15% /mnt/nfs/private
```

홈 디렉터리의 `test_nfs` 파일을 공유 디렉터리로 복사해보면 복사한 파일의 소유권이 그대로 유지되는 것을 확인할 수 있습니다.

```bash
administrator@server02:~$ cp test_nfs /mnt/nfs/private/
administrator@server02:~$ ls -l /mnt/nfs/private/
-rw-rw-r-- 1 administrator administrator 13 Apr   7 00:35 test_nfs
```

- - -

**Q** 다른 사용자는 공유 디렉터리에 어떤 권한을 가지고 있을까요?
**A** 일반적으로 NFS 공유 디렉터리에 적용된 소유권과 접근 권한이 그대로 적용됩니다. 시험 삼아 새로운 사용자 계정을 생성하고 exit로 로그아웃합니다.

```bash
administrator@server02:~$ sudo adduser jaehun
...
administrator@server02:~$ exit
```

ssh로 로그인하려면 인증키가 필요한데 server02에는 아직 없습니다.

virt-viewer로 가상 콘솔에 직접 접속해서 추가한 사용자 계정 jaehun으로 로그인합니다.

```bash
shinjaehun@losttemple:~$ ssh jaehun@192.168.122.202
Permission denied (publickey).
shinjaehun@losttemple:~$ vv server02
```

새로운 사용자 계정으로 공유 디렉터리에 파일을 복사하면 쓰기 권한이 없어 거부될 것입니다.

물론 /mnt/nfs/public에는 누구나 쓸 수 있기 때문에 파일을 복사할 수 있습니다.

```bash
jaehun@server02:~$ touch test_nfs_private
jaehun@server02:~$ cp test_nfs_private /mnt/nfs/private/
cp: cannot create reuglar file `/mnt/nfs/private/test_nfs_private`: Permission
denied
```

공유 디렉터리의 접근 권한을 755로 설정해뒀기 때문에 소유자가 아닌 다른 사용자인 경우 쓰기를 할 수 없습니다.

administrator@server01:~$ ls -l /srv/nfs/
drwxr-xr-x 2 administrator administrator 4096 Apr 7 00:14 private

- - -

#### 공유 디렉터리 자동 마운트하기

시스템이 부팅할 때부터 NFS 공유 디렉터리를 자동으로 마운트하면 매번 mount 명령을 실행할 필요가 없어 편리합니다.

파일 시스템 정보를 저장하는 파일 시스템 테이블 /etc/fstab에 공유 디렉터리를 등록합니다.

```bash
administrator@server02:~$ sudo vi /etc/fstab
```

NFS 파일 시스템을 자동 마운트하도록 공유 디렉터리 정보를 추가합니다.

`[파일 시스템] [마운트할 경로] [유형] [옵션] [덤프] [파일 시스템 점검 순서]` 형식으로 입력합니다.

rsize는 NFS 서버로부터 읽는 바이트 크기, wsize는 NFS 서버에 쓰는 바이트 크기로 각각 기본값이 1024바이트입니다.

이 값을 8192로 설정해서 성능을 향상시킬 수 있습니다.

timeo 값은 서버와 클라이언트 사이의 원격 통신 장애(RPC timeout)가 발생했을 때 재전송 요청을 보낼 때까지 대기하는 시간을 설정합니다.

intr은 통신장애가 발생했을 때 파일 처리를 중단하는 신호를 허용하는 옵션입니다.

```bash
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
#
proc             /proc           proc    nodev,noexec,nosuid 0       0
# / was on /dev/vda1 during installation
UUID=9a4507f7-fbfe-41fa-b5c1-5f031c87b568 /       ext4     errors=remount-ro 0      0
# swap was on /dev/vda5 during installation
UUID=8524705a-b20f-4db9-9893-0da5484589b5 none    swap     sw                0      0
192.168.122.201:/srv/nfs/public /mnt/nfs/public   nfs      rsize=8192,wsize=8192,timeo=14,intr
```

- - -

Tip

UUID로 시작하는 행은 시스템에 설치한 하드디스크 파티션 정보입니다.

예전에는 fstab에 `/dev/hda1` 또는 `/dev/sda1`과 같이 실제 하드디스크 파티션 정보를 직접 입력했지만

최근에는 리눅스 시스템 대부분이 파일 시스템 정보를 추상화 과정을 거쳐 UUID 형태로 자동 저장됩니다.

- - -

fstab에 마운트할 공유 디렉터리 정보를 추가했으면 시스템을 재부팅해서 자동으로 마운트되는지 확인합니다.

```bash
administrator@server02:~$ sudo reboot
```

- - -

Tip

일반적으로 fstab에는 시스템에 설치된 하드디스크 파티션 정보와 같이 쉽게 바뀌지 않는 파일 시스템 정보를 등록합니다.

만일 파일 시스템 정보를 가져오지 못하면, 예를 들어 NFS 서버보다 클라이언트를 먼저 부팅하는 단순한 실수로 부팅 과정에서 파일 시스템을 찾기 위해 무한 대기 상태로 빠지게 됩니다.

따라서 공유 디렉터리는 파일 시스템 테이블보다는 자동 마운트를 이용하는 편이 합리적입니다.

`초보 시스템 관리자의 일기 | 자동 마운트 활용하기`에서 설명합니다.

- - -

### 삼바로 윈도 시스템과 파일 공유하기

네트워크에 윈도 시스템이 존재한다면 리눅스와 윈도 시스템의 자원 공유를 위해 삼바가 필요합니다.

삼바를 이용해서 리눅스 서버를 로컬 네트워크의 파일 서버로 활용할 수 있고 반대로 윈도에서 공유하는 자원을 리눅스에서 사용할 수도 있습니다.

#### 삼바가 무엇인가요

마이크로소프트에서는 윈도 시스템끼리 자원 공유를 위해 SMB(Server Message Block, 서버 메시지 블록)라는 프로토콜을 개발했습니다.

현재 윈도 시스템의 자원 공유는 SMB를 확장한 CIFS(Common Internet File System, 공통 인터넷 파일 시스템) 프로토콜이 처리합니다.

SMB/CIFS는 계층적인 구조의 프로토콜로 기본적인 프로토콜인 TCP/IP 위에 근거리 네트워크 LocalAreaNetwork, LAN에서 통신할 수 있도록 통신 규약을 모아 놓은 인터페이스(ApplicationProgrammingInterface, API) NetBIOS(NetworkBasicInputOutputSystem)를 쌓아 놓은 형태로 동작합니다.

SMB/CIFS도 TCP/IP를 기반으로 운영됩니다(그림 7-5).

▼ 그림 7-5 윈도 자원 공유에 필요한 SMB/CIFS 프로토콜의 구조
![ ](/img/07/05.jpg)

리눅스 및 유닉스에서 윈도와 동일한 네트워크 프로토콜로 통신할 수 있도록 SMB/CIFS 프로토콜을 처리하는 프로그램이 삼바(SAMBA)입니다.

실제 삼바라는 이름도 SMB에서 유래했습니다.

삼바를 이용하면 유닉스 및 리눅스와 윈도 사이의 파일 및 프린터 공유, 윈도 호스트 탐색 서비스를 제공할 수 있습니다.

또한, 사용자 인증 처리, 사용자 권한 확인과 같은 윈도 서버 제품군이 할 수 있는 도메인 컨트롤러의 역할을 대신할 수도 있습니다.

이 책에서는 삼바를 이용해서 윈도 파일 서버를 설치하고 운영하는 방법과 윈도에서 공유한 자원을 리눅스에서 사용하는 방법에 초점을 맞춰 설명합니다.

- - -

Tip

윈도 시스템으로 이루어진 네트워크 도메인(작업그룹을 확장한 네트워크)에서 사용자 인증을 통해 네트워크 자원에 대해 접근을 관리하는 일을 처리하는 서버를 도메인 컨트롤러(Domain Controller, DC)라고 합니다.

- - -

#### 윈도 게스트 준비하기

server01에 삼바를 설치하고 삼바 서버가 공유한 디렉터리를 윈도 시스템 winvm01에서 사용합니다.

실습을 위해 윈도 가상 게스트 필요합니다.

▼ 그림 7-6 삼바 서버에서 공유한 디렉터리 사용하기
![ ](/img/07/06.jpg)

**1** 가상 시스템에 윈도를 설치하고 기본적인 네트워크 설정을 해보겠습니다.

virt-install 명령으로 윈도 게스트를 설치합니다.

윈도 게스트 이름은 winvm01이라고 정했으며 50GB의 저장 공간을 할당했습니다.

윈도 7 DVD 이미지를 사용하기 위해 -cdrom 옵션을 실제 CD 드라이브 경로(/dev/cdrom)로 설정했습니다.

명령을 실행하면 설치할 공간을 준비하고 DVD 이미지로 부팅하면서 윈도 7 설치를 시작합니다.

윈도 7 설치 과정에 대한 설명은 생략하겠습니다.

```bash
shinjaehun@losttemple:~$ sudo virt-install --name=winvm01 --ram=1024 \
> --os-type=windows --os-variant=win7 --hvm --connect=qemu:///system \
> --network network:default \
> --cdrom=/dev/cdrom \
> --disk path=/home/shinjaehun/virtual_machines/winvm01.img,size=50
```

**2** 설치가 끝나고 기본적인 네트워크 환경을 설정합니다.

삼바 서버와의 연결을 신뢰할 만한 네트워크인 홈/회사 네트워크로 설정해서 네트워크 검색 및 파일 공유를 허용하도록 설정해보겠습니다.

`[제어판] 메뉴` → `네트워크 및 인터넷` → `네트워크 및 공유 센터`를 선택합니다.

➊ `활성 네트워크 보기`에서 `네트워크`를 `홈` 또는 `회사 네트워크`로 설정합니다.

➋ 왼쪽에 있는 `어댑터 설정 변경`을 선택하면 시스템에 설치된 네트워크 어댑터 목록이 나타납니다.

▼ 그림 7-7 네트워크 유형 설정
![ ](/img/07/07.jpg)

- - -

Tip
일반적으로 윈도 7은 시스템이 접속하는 네트워크의 유형을 홈 네트워크, 회사 네트워크, 공용 네트워크로 나누고

각 네트워크 유형에 따라 네트워크 자원 사용 권한 및 보안 설정 을 제한합니다.

여기에서는 삼바 서버와의 연결을 위해 네트워크 유형을 `홈` 또는 `회사 네트워크`로 설정합니다.

- - -

**3** ➊ 네트워크에 연결된 네트워크 어댑터(로컬 영역 연결)를 마우스 오른쪽 버튼으로 클릭하면 나오는 팝업 메뉴에서 `속성`을 선택합니다.

➋ `로컬 영역 연결 속성` 창에서 `Internet Protocol Version 4 (TCP/IPv4)`를 선택하고 <속성> 버튼을 클릭합니다.

`Internet Protocol Version 4 (TCP/IPv4) 속성` 창에서

➌ `다음 IP 주소 사용`에 체크하고 IP 주소 정보를 그림 7-8과 같이 입력합니다.

➍ `다음 DNS 서버 주소 사용`에 체크하고 사설 DNS 주소 정보를 그림 7-8과 같이 입력합니다.

<확인>을 선택하고 다시 `로컬 영역 연결 속성` 창에서 <닫기>를 클릭하면 네트워크 설정이 끝납니다.

▼ 그림 7-8 네트워크 유형 설정
![ ](/img/07/08.jpg)

- - -

Tip

윈도 게스트의 IP 주소는 삼바 서버를 운영하는 게스트 server01과 같은 네트워크 주소(192.168.122.0)로 설정합니다. 물론 IP 충돌이 발생하지 않도록 동일한 IP 주소를 사용하면 안 됩니다 (server01에 할당된 192.168.122.201, server02에 할당된 192.168.122.202를 피해야 합니다).

- - -

4 연결 상태를 확인해보겠습니다.
  
윈도에서도 연결 상태 확인에 ping 명령을 사용합니다.

`[시작]` 버튼을 누르고

➊ `cmd`라고 입력하면 윈도 터미널이 검색됩니다.

➋ 윈도 터미널을 클릭해서 시작합니다.

▼ 그림 7-9 윈도 터미널 실행
![ ](/img/07/09.jpg)

**5** 윈도 ping 명령 사용법은 리눅스의 ping 명령과 거의 동일합니다.

다음과 같이 게이트웨이(192.168.122.1)와 삼바 서버를 운영하고 있는 server01(192.168.122.201)에 대해 ping을 실시합니다.

연결에 성공했으면 윈도 게스트의 준비가 끝났습니다.

▼ 그림 7-10 윈도 ping 명령
![ ](/img/07/10.jpg)

#### 삼바 서버 준비하기

삼바 서버를 설치할 가상 호스트 server01을 시작하고 ssh로 접속합니다.

```bash
shinjaehun@losttemple:~$ virsh start server01
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
```

삼바 패키지를 설치합니다.

```bash
administrator@server01:~$ sudo apt-get update
administrator@server01:~$ sudo apt-get install samba
```

설치가 끝나면 SMB/CIFS 서비스를 처리하는 넷바이오스 포트가 접속을 기다리는 상태를 확인할 수 있습니다.

이름 탐색을 처리하는 넷바이오스 네임 서비스(netbios-ns)는 137포트, 세션 통신을 처리하는 넷바이오스 세션 서비스(netbios-ssn)는 138포트, 비연결형 통신을 처리하는 넷바이오스 데이터그램 서비스(netbios-datagram)는 139포트를 통해 서비스됩니다.

```bash
administrator@server01:~$ netstat -a | grep netbios
tcp    0     0 *:netbios-ssn        *:*                      LISTEN
tcp6   0     0 [::]:netbios-ssn     [::]:*                   LISTEN
udp    0     0 192.168.122.:netbios-ns *:*
udp    0     0 192.168.122.:netbios-ns *:*
udp    0     0 *:netbios-ns           *:*
udp    0     0 192.168.122:netbios-dgm *:*
udp    0     0 192.168.122:netbios-dgm *:*
udp    0     0 *:netbios-dgm          *:*
```

넷바이오스를 거치지 않고 CIFS로 직접 통신하는 디렉터리 서비스(microsoft-ds)는 445포트를 통해 서비스됩니다.

```bash
administrator@server01:~$ netstat -a | grep microsoft
tcp    0     0 *:microsoft-ds       *:*                     LISTEN
tcp6   0     0 [::]:microsoft-ds    [::]:*                  LISTEN
```

삼바 서버는 smbd와 nmbd 두 데몬으로 동작합니다.

smbd는 삼바의 핵심 기능을 담당하는 데몬으로 넷바이오스 세션 서비스인 연결, 인증, 파일 시스템 접근을 처리합니다.

nmbd가 필요한 이유는 네트워크에서 윈도 공유 자원 목록을 검색하기 위해서입니다.

nmbd는 이름 탐색을 처리하는 데몬으로 넷바이오스 네임 서비스를 처리합니다.

```bash
administrator@server01:~$ sudo service samba status
 * nmbd is running
 * smbd is running
```

런레벨 편집기 sysv-rc-conf를 실행합니다.

```bash
administrator@server01:~$ sudo sysv-rc-config
```

삼바 서버를 런레벨 2부터 5까지 활성화시킵니다.

smbd와 nmbd 모두 시작하도록 설정해야 합니다.

▼ 그림 7-11 smbd 실행을 위한 런레벨 설정
![ ](/img/07/11.jpg)

체크가 끝나면 q를 눌러 명령 프롬프트로 돌아갑니다.

▼ 그림 7-12 nmbd 실행을 위한 런레벨 설정
![ ](/img/07/12.jpg)

삼바 환경 설정 파일인 /etc/samba/smb.conf는 코드 길이가 300행 정도로 10KB가 넘는 거대한 파일입니다.

수많은 옵션을 제공하지만, 여기에서는 꼭 알아둘 만한 옵션을 소개합니다.

▼ 그림 7-13 삼바 환경 설정 옵션
![ ](/img/07/13.jpg)

```bash
administrator@server01:~$ sudo vi /etc/samba/smb.conf
```

먼저 삼바 서버의 환경 설정 항목인 `[global]`입니다.

삼바 서버의 동작과 관련하여 필요한 값을 설정합니다.

workgroup은 작업 그룹 이름을 지정하고 server string은 삼바 서버에 대한 설명을 표시합니다.

```conf
[global]
workgroup = WORKGROUP
server string = %h server (Samba, Ubuntu)
```

interfaces는 삼바가 특정 네트워크에 대한 접근만 허용하려고 할 때 사용 가능합니다.

기본적으로 `;`로 주석처리되어 있습니다.

```conf
; interfaces = 127.0.0.0/8 eth0
```

- - -

Tip
삼바 설정 파일에서 `#`와 `;`로 시작하는 행은 주석처리되어 반영되지 않습니다.

- - -

log file은 로그 파일 경로를 지정합니다.

네트워크 탐색을 처리하는 데몬 nmbd와 삼바 데몬인 smbd의 로그 정보를 /var/log/samba 디렉터리에 각각 `log.nmbd`와 `log.smbd` 파일로 기록합니다.

max log size는 로그 파일의 최대 크기를 결정합니다.

```bash
log file = /var/log/samba/log.%m
max log size = 1000
```

server role로 삼바의 역할을 정의합니다.

삼바를 도메인 컨트롤러로 사용하지 않는 이상 단일 서버(standaloneserver)로 사용합니다.

passdb backend는 사용자 패스워드를 어떻게 관리할지 결정합니다.

예전에는 smbpasswd를 사용했는데 지금은 계정 수가 많아져도 부하가 적어 빠른 성능을 보여주는 tdbsam으로 처리합니다.

```bash
server role = standalone server
passdb backend = tdbsam
```

공유할 자원에 대한 설정은 다음과 같이 `[공유대상]`으로 묶어 지정합니다.

주석처리되어 있는 `[profiles]` 항목에서 사용 가능한 옵션을 살펴봅시다.

* comment: 공유 디렉터리에 대한 설명

* path: 공유할 디렉터리 경로를 지정

* browseable: 네트워크 목록에 표시할지 여부를 결정

* guest ok: 사용자 인증을 거치지 않은 익명 사용자에 대한 접근 허용 여부 결정

* read only: 디렉터리를 읽기 전용으로 공유할지 결정

* create mask: 파일을 생성할 때 접근 권한을 어떻게 지정할지 결정

* directory mask: 하위 디렉터리를 생성할 때 접근 권한을 어떻게 지정할지 결정

```conf
;[profiles]
;   comment = Users profiles
;   path = /home/samba/profiles
;   guest ok = no
;   browseable = no
;   create mask = 0600
;   directory mask = 0700
```

삼바에 대한 접근을 허용하도록 방화벽 설정을 수정합니다.

보안을 고려하여 내부 네트워크 호스트인 192.168.122.0/24 네트워크에 대한 접근만 허용합니다 (allow from 192.168.122.0/24).

SSH와 달리 삼바는 여러 포트를 사용하기 때문에 ufw로 해당 포트들을 개방해야 합니다.

다음과 같이 `to any app samba`라는 이름으로 예약된 값을 사용하면 삼바가 사용하는 포트를 동시에 개방할 수 있습니다.

```bash
administrator@server01:~$ sudo ufw allow from 192.168.122.0/24 to any app samba
Rule added
administrator@server01:~$ sudo ufw status
...
Samba                      ALLOW       192.168.122.0/24
```

iptables의 filter 테이블을 살펴보면( sudo iptables -L) ufw-user-input 사슬에 사용자가 접근을 허용한 정책 목록을 확인할 수 있습니다.

udp netbios-ns와 netbios-dgm에 대한 포트와 tcp netbios-ssn과 microsoft-ds에 대한 포트를 허용하고 있습니다.

```bash
Chain ufw-user-input (1 references)
...
ACCEPT     udp  --  192.168.122.0/24   anywhere          multiport dports netbios-ns,netbios-dgm /* 'dapp_Samba' */
ACCEPT     tcp  --  192.168.122.0/24   anywhere          multiport dports netbios-ssn,microsoft-ds /* 'dapp_Samba' */
```

#### 파일 공유 실습하기: 누구나 사용 가능한 공유 디렉터리 설정하기

**1** 기본적인 설정 내용을 수정해서 삼바 서버를 운영해보겠습니다.

삼바 설정 파일을 vi로 엽니다.

```bash
administrator@server01:~$ sudo vi /etc/samba/smb.conf
```

**2** 공유 디렉터리 항목을 추가합니다.

public이라는 공유 디렉터리를 생성하고자 합니다.

공유 디렉터리 경로는 /srv/samba/public

네트워크 탐색이 가능하고(browsable = yes)

익명 사용자에 대한 접근을 허용하며(guest ok = yes)

읽기 쓰기 권한을 부여하고(read only = no)

파일을 생성하면 기본적으로 접근 권한을 755(rwxr-xr-x)으로 설정하게 됩니다(create mask = 0755)

```bash
[public]
  comment = Public File Share
  path = /srv/samba/public
  browsable = yes
  guest ok = yes
  read only = no
  create mask = 0755
```

- - -

Tip
`read only = yes` 옵션은 디렉터리를 읽기 전용으로 공유합니다.

이 옵션은 `writeable = no` 옵션과 동일하게 동작합니다.

디렉터리에 쓰기 권한을 부여하기 위해서는 `read only = no` 또는 `writeable = yes` 옵션을 사용합니다.

- - -

**3** 변경된 설정 내용을 반영하기 위해 삼바 서버를 재시작합니다.

nmbd는 삼바의 윈도 네트워크 검색, 목록 확인을 위한 데몬으로 재시작할 필요가 없습니다.

```bash
administrator@server01:~$ sudo service smbd restart
```

- - -

**이렇게 하세요!**

물론 samba 서비스를 재시작해도 변경된 내용이 반영됩니다.

administrator@server01:~$ sudo service samba restart

- - -

**4** 공유할 디렉터리를 생성하고 공유 디렉터리의 소유권을 nobody:nogroup으로 설정해서 익명 사용자가 공유 디렉터리를 읽고 쓸 수 있도록 만들어줍니다.

```bash
administrator@server01:~$ sudo mkdir -p /srv/samba/public
administrator@server01:~$ sudo chown nobody:nogroup /srv/samba/public
administrator@server01:~$ ls -l /srv/samba
drwxr-xr-x 2 nobody nogroup 4096 Apr 2 06:28 public
```

**5** 윈도 게스트를 시작합니다.

```bash
shinjaehun@losttemple:~$ virsh start winvm01
shinjaehun@losttemple:~$ vv winvm01
```

- - -

**이렇게 하세요!**

virt-viewer를 이용해서도 접속할 수도 있습니다.

shinjaehun@losttemple:~$ virt-viewer -c qemu:///system virt-viewer &

- - -

6 탐색기를 실행하여 ➊ `네트워크`를 클릭합니다.

처음 네트워크를 검색한다면 네트워크 검색 및 파일 공유를 활성화시켜야 합니다.

➋ `네트워크 검색 및 파일 공유 설정`을 선택합니다.

▼ 그림 7-14 네트워크 검색 및 파일 공유 활성화
![ ](/img/07/14.jpg)

7 삼바 서버가 실행 중인 server01이 네트워크 목록에 표시되며

다시 server01을 더블클릭하면 공유 디렉터리인 public을 확인할 수 있습니다.

guest ok = yes 옵션이 설정되어 있기 때문에 공유 디렉터리에 접근하기 위한 사용자 인증 과정은 생략합니다 (삼바는 공유 폴더에 접근하는 모든 사용자를 nobody로 처리합니다).

▼ 그림 7-15 SERVER01의 공유 디렉터리 public
![ ](/img/07/15.jpg)

**8** 공유 디렉터리(/srv/samba/public)의 소유권은 nobody로 설정되어 있으며, 소유자에게 쓰기 권한이 있어(drwxr-xr-x) 누구나 공유 디렉터리에 파일을 복사할 수 있습니다.

▼ 그림 7-16 공유 디렉터리의 파일 복사
![ ](/img/07/16.jpg)

- - -

이렇게 하세요!
권한이 필요하다는 오류가 발생하면 공유 디렉터리의 소유권과 접근 권한을 다시 확인해보기 바랍니다.

▼ 그림 7-17 공유 폴더에 쓰기 권한이 없어 거부됨
![ ](/img/07/17.jpg)

소유권은 nobody:nogroup으로 익명 사용자 접근이 가능해야 하며, 접근 권한은 drwxr-xr-x로 소유자가 읽기 쓰기가 가능해야 합니다.

```bash
administrator@server01:~$ ls -l /srv/samba
drwxr-xr-x 2 nobody nogroup 4096 Apr 2 06:28 public
```

- - -

#### 파일 공유 실습하기: 특정 사용자에게 디렉터리 할당하기

**1** 사용자별로 공유 디렉터리를 제공할 수 있습니다.

먼저 adduser 명령으로 공유 디렉터리를 사용할 사용자를 추가합니다.

로그인 암호를 설정하고 추가한 사용자에 대한 개인 정보를 입력합니다.

```bash
administrator@server01:~$ sudo adduser winuser01
```

- - -

Tip

adduser에 대한 설명은 3장의 `사용자 계정 관리하기`를 참고합니다.

- - -

**2** smbpasswd -a 명령으로 추가한 사용자를 삼바 유저로 등록합니다.

여기에서 SMB 패스워드를 입력하는데 이 패스워드는 리눅스 로그인 패스워드와 다른, 사용자가 공유 디렉터리에 접근할 때 입력하는 패스워드입니다.

```bash
administrator@server01:~$ sudo smbpasswd -a winuser01
New SMB password: ********
Retype new SMB password: ********
Added user winuser01.
```

**3** 삼바 설정 파일 `/etc/samba/smb.conf`에 새로운 공유 디렉터리 항목을 추가합니다.

winuser01이라는 사용자 계정 이름과 동일한 공유 디렉터리를 생성하고자 합니다.

공유 디렉터리 경로는 `/srv/samba/winuser01`로 네트워크 환경에서 탐색이 가능하고( browsable = yes), 익명 사용자에 대한 접근을 제한하며( guest ok = no), 읽기 쓰기 권한을 부여하고( read only = no), 파일을 생성하면 기본적으로 접근 권한을 755( rwxr-xr-x)로 설정하게 됩니다(create mask = 0755).

```conf
[winuser01]
  comment = Private File Share
  path = /srv/samba/winuser01
  browsable = yes
  guest ok = no
  read only = no
  create mask = 0755
```

**4** 설정 내용을 적용하기 위해 smbd를 재시작합니다.

```bash
administrator@server01:~$ sudo service smbd restart
```

**5** 공유 디렉터리를 생성합니다.

디렉터리 소유권을 공유 디렉터리에 접근할 사용자 winuser01로 지정하고 공유 폴더의 접근 권한은 755(drwxr-xr-x)로 설정합니다.

```bash
administrator@server01:~$ sudo mkdir -p /srv/samba/winuser01
administrator@server01:~$ sudo chown winuser01:winuser01 /srv/samba/winuser01
administrator@server01:~$ ls -l /srv/samba
drwxr-xr-x 2 nobody nogroup 4096 Apr 2 06:28 public
drwxr-xr-x 2 winuser01 winuser01 4096 Apr 2 06:55 winuser01
```

**6** 윈도에서 탐색기를 실행하고 네트워크를 선택하여 삼바 서버가 실행 중인 server01을 찾습니다.

server01에서 공유하는 디렉터리 public과 winuser01이 보입니다.

➊ `winuser01`을 더블클릭하면 `Windows 보안` 창이 나타납니다.

➋ 사용자 계정과 사용자의 SMB 패스워드를 입력합니다(로그인 패스워드가 아닙니다).

➌ `[확인]` 버튼을 클릭합니다.

▼ 그림 7-18 네트워크 암호 입력하기
![ ](/img/07/18.jpg)

- - -

**이렇게 하세요!**

winuser01로 로그인한 상태이므로 읽고 쓰는 데 권한 문제가 발생한다면

공유 디렉터리 `/srv/samba/winuser01`의 소유권과 접근 권한을 확인해야 합니다.

```bash
dministrator@server01:~$ ls -l /srv/samba
drwxr-xr-x 2 winuser01 winuser01 4096 Apr 2 06:55 winuser01
```

**Q** smbpasswd 명령에 대해 알려주세요.

**A** 삼바 사용자 계정을 관리하는 명령 smbpasswd에 대해 소개합니다.

-a 옵션은 공유 디렉터리에 접속할 사용자 계정을 추가합니다.

공유 디렉터리에 접근할 때 필요한 SMB 패스워드를 입력합니다.

```bash
administrator@server01:~$ sudo smbpasswd -a jaehun
```

-d 옵션은 삼바 사용자를 삭제합니다.

```bash
administrator@server01:~$ sudo smbpasswd -d jaehun
```

아무 옵션 없이 smbpasswd를 입력하면 해당 사용자의 SMB 패스워드를 변경합니다.

```bash
administrator@server01:~$ sudo smbpasswd jaehun
```

삼바 사용자 목록을 확인하는 명령은 `pdbedit -L` 명령입니다.

```bash
administrator@server01:~$ sudo pdbedit -L
winuser01:1001:Windows User
```

- - -

#### 파일 공유 실습하기: 특정 그룹에게 디렉터리 할당하기

**1** 특정 사용자뿐 아니라 특정 그룹에 속해 있는 사용자에게 공유 디렉터리를 사용 권한을 부여할 수 있습니다.

먼저 groupadd 명령으로 smbgroup이라는 그룹을 추가합니다.

```bash
administrator@server01:~$ sudo groupadd smbgroup
```

**2** 앞에서 추가한 사용자 계정 winuser01은 winuser01 그룹에 속해 있는 상태입니다.

```bash
administrator@server01:~$ id winuser01
uid=1001(winuser01) gid=1001(winuser01) groups=1001(winuser01)
```

usermod 명령으로 winuser01 사용자를 smbgroup에 추가( -G smbgroup)합니다.

`usermod -G [그룹] [추가할 사용자 계정]` 형식으로 입력합니다.

id 명령으로 winuser01의 상태를 확인하면 smbgroup 그룹에 속해 있음을 알 수 있습니다.

- - -

Tip

usermod 명령에 대한 설명은 `sudo 권한 부여하기`를 참고합니다.

- - -

**3** 실습을 위해 winuser02 사용자를 추가(sudo adduser winuser02)하고 SMB 패스워드를 설정(sudo smbpasswd -a winuser02)합니다.

winuser02는 smbgroup 그룹에 속하지 않은 사용자라는 사실을 기억해두기 바랍니다.

```bash
administrator@server01:~$ sudo adduser winuser02
administrator@server01:~$ sudo smbpasswd -a winuser02
```

**4** 삼바 설정 파일 `/etc/samba/smb.conf`에 새로운 공유 디렉터리 항목 smbgroup을 추가합니다.

공유 디렉터리 경로는 `/srv/samba/smbgroup`이며

네트워크 탐색이 가능하고(browsable = yes)

익명 사용자에 대한 접근을 제한하며( guest ok = no)

읽기 쓰기 권한을 부여하고( read only = no)

파일을 생성하면 기본적으로 접근 권한을 755(rwxr-xr-x)로 설정하게 됩니다(create mask = 0755)

마지막에 추가한 valid users 옵션은 공유 디렉터리에 접근 가능한 사용자를 지정합니다.

사용자 계정을 직접 입력하거나 아래와 같이 @을 붙여서 그룹을 지정할 수도 있습니다.

```bash
[smbgroup]
  comment = smbgroup File Share
  path = /srv/samba/smbgroup
  browsable = yes
  guest ok = no
  read only = no
  create mask = 0755
  valid users = @smbgroup
```

- - -

**이렇게 하세요!**

valid users 옵션으로 다른 사용자나 그룹을 추가하려면 다음과 같이 쉼표로 구분해서 입력하면 됩니다.

```bash
valid users = @smbgroup, administrator
```

- - -

**5** 설정 내용을 적용하기 위해 smbd를 재시작합니다.

```bash
administrator@server01:~$ sudo service smbd restart
```

**6** 공유 디렉터리를 생성하고 공유 디렉터리의 소유 그룹을 smbgroup으로 설정(:smbgroup)합니다.

소유자를 비워뒀기 때문에 소유 그룹만 변경될 것입니다.

```bash
administrator@server01:~$ sudo mkdir -p /srv/samba/smbgroup
administrator@server01:~$ sudo chown :smbgroup /srv/samba/smbgroup/
administrator@server01:~$ ls -l /srv/samba/
...
drwxr-xr-x 2 root smbgroup 4096 Apr 3 23:49 smbgroup
```

**7** 소유 그룹에 속한 사용자에게 공유 디렉터리 쓰기 권한을 부여해야 하므로 접근 권한을 775로 설정해야 합니다.

```bash
administrator@server01:~$ sudo chmod 775 /srv/samba/smbgroup/
administrator@server01:~$ ls -l /srv/samba/
drwxrwxr-x 2 root smbgroup 4096 Apr 3 23:49 smbgroup
```

8 확인을 위해 윈도에서 로그오프합니다.

`[시작]` 메뉴에서 `시스템 종료` 옆의 작은 화살표를 누르면 나오는 메뉴에서 `로그오프`를 선택할 수 있습니다.

앞에서 winuser01 사용자로 공유 디렉터리에 접근했기 때문에 다른 사용자 권한을 확인해보려면 매번 로그오프해야 합니다.

▼ 그림 7-19 로그오프
![ ](/img/07/19.jpg)

**9** winuser02 계정은 공유 디렉터리 smbgroup에 접근이 거부됩니다.

winuser02는 공유 디렉터리의 유효한 사용자(smbgroup에 속한 사용자)가 아니기 때문입니다.

하지만, smbgroup에 속한 사용자 winuser01은 그대로 접근 가능합니다.

▼ 그림 7-20 winuser02 계정은 접근 거부됨
![ ](/img/07/20.jpg)

- - -

Tip

공유 디렉터리에 접근하는 방법은 동일합니다.

탐색기에서 네트워크를 선택하여 server01을 클릭합니다.

- - -

#### 윈도에서 공유한 폴더 리눅스에서 사용하기

삼바 클라이언트를 이용하면 윈도에서 공유한 폴더를 리눅스에서 사용할 수 있습니다.

윈도 시스템 winvm01에서 공유한 폴더를 게스트 server02에서 사용해봅시다(그림 7-21).

▼ 그림 7-21 윈도에서 공유한 폴더 리눅스에서 사용하기
![ ](/img/07/21.jpg)

**1** 먼저 누구든지 윈도에서 공유한 폴더를 사용할 수 있게 설정합니다.

윈도 탐색기에서 공유할 폴더 `C:\share`를 생성합니다.

생성한 폴더를 마우스 오른쪽 버튼으로 클릭하면 나오는 메뉴에서 `속성`을 선택합니다.

`속성` 창이 나타나면

➊ `공유` 탭을 클릭하고

➋ `[공유]` 버튼을 클릭 한 다음 `파일 공유` 창에서 폴더를 공유할 사용자를 선택합니다.

➌ 펼침 목록에서 `Everyone`을 선택 한 다음

➍ `[추가]` 버튼을 클릭하여 추가한 사용자의 사용 권한 수준을 클릭하고

➎ `읽기/쓰기`를 선택합니다.

`[공유]` 버튼을 클릭합니다.

▼ 그림 7-22 윈도에서 폴더 공유하기
![ ](/img/07/22.jpg)

**2** 폴더가 공유되었다는 메시지가 나타나면 `[완료]`를 선택합니다.

▼ 그림 7-23 폴더 공유 완료
![ ](/img/07/23.jpg)

- - -

**이렇게 하세요!**

고급 공유를 선택해서 폴더를 공유할 수도 있습니다.

➊ `선택한 폴더 공유`에 체크하고

➋ `[권한]`을 클릭합니다.

`share의 사용 권한` 창이 나타나면 그룹 또는 사용자 이름 항목에서

➌ `Everyone`을 선택하고 `Everyone의 사용 권한`에서

➍ 변경, 읽기를 비롯한 `모든 권한`을 허용하도록 설정합니다.

권한 부여가 끝나면 `[확인]`을 클릭합니다.

- - -

▼ 그림 7-24 고급 공유에서 설정하기

3 폴더가 공유되면 `[완료]`를 클릭하고 다시 `[확인]`을 클릭해서 폴더 속성 창을 닫습니다.

누구든지 공유 폴더를 사용하려면 사용자 인증 과정을 생략해야 합니다.

`[제어판]`에서 `네트워크 및 공유 센터`를 선택하고 왼쪽 메뉴에서 `고급 공유 설정 변경`을 선택합니다.

▼ 그림 7-25 고급 공유 설정 변경하기
![ ](/img/07/25.jpg)

**4** 여러 선택 항목 중에서 `암호로 보호된 공유` 항목을 찾고 `암호 보호 공유 끄기`를 선택합니다.

이때 윈도 시스템이 현재 사용하고 있는 네트워크 프로필(홈 또는 회사)의 항목을 수정해야 합니다.

`[변경 내용 저장]`을 클릭합니다.

▼ 그림 7-26 고급 공유 설정 변경하기
![ ](/img/07/26.jpg)

**5** 나중에 확인을 위해서 공유 폴더(C:\share)에 파일 하나를 복사해둡니다.

▼ 그림 7-27 확인용 파일 복사
![ ](/img/07/27.jpg)

**6** 삼바 클라이언트를 설치할 게스트 server02를 시작하고 ssh로 접속합니다.

```bash
administrator@server02:~$ virsh start server02
administrator@server02:~$ ssh administrator@192.168.122.202
```

**7** 리눅스 시스템으로 돌아와서 윈도 공유 폴더를 사용하기 위한 smbclient 패키지를 설치합니다.

```bash
administrator@server02:~$ sudo apt-get update
administrator@server02:~$ sudo apt-get install smbclient
```

**8** -L 옵션으로 폴더를 공유한 윈도 시스템의 공유 자원 목록을 확인합니다.

smbclient -L [윈도 시스템의 IP 주소] 형식으로 입력합니다.

이때 비밀번호를 묻는데 윈도 시스템에 사용자 비밀번호를 설정해두지 않았기 때문에 그냥 Enter를 눌러도 됩니다.

가운데 공유 폴더인 share를 확인할 수 있습니다.

```bash
administrator@server02:~$ smbclient -L 192.168.122.250
Enter administrator\'s password:
Domain=[WINVM01] OS=[Windows 7] Server=[Windows 7]

  Sharename      Type      Comment
  ---------      ----      -------

  ADMIN$         Disk      원격 관리
  C$             Disk      기본 공유
  IPC$           IPC       원격 IPC
  share          Disk
```

- - -

Tip

`ADMIN$`, `C$`, `IPC$`, 이처럼 폴더 이름 뒤에 `$`가 붙은 공유 자원은 숨은 공유(또는 관리 공유)라고 하며 실제 공유 폴더 외에는 윈도 사용자에게 보이지 않습니다.

주로 관리자가 공유 자원을 관리하기 위한 목적으로 사용되며 윈도 시스템이 부팅할 때 자동으로 공유됩니다.

`ADMIN$`은 윈도 시스템 폴더인 `C:\WINDOWS`를, `C$`는 루트 폴더인 `C:\`를 의미합니다.

`IPC$`는 자원 공유에 필요한 세션 연결, 사용자 인증을 처리하기 위한 공유 자원입니다.

- - -

**9** smbclient를 이용해서 공유 폴더에 접속하고 파일을 내려받거나 올릴 수 있습니다.

`smbclient //[윈도 시스템의 주소]/[공유 폴더 경로]` 형식으로 공유 폴더에 접속합니다.

접속에 성공하면 ls 명령을 비롯한 하위 명령을 사용할 수 있습니다.

```bash
administrator@server02:~$ smbclient //192.168.122.250/share
Enter administrator\'s password:
Domain=[WINVM01] OS=[Windows 7] Server=[Windows 7]
smb: \> ls
  .                                   DR      0 Mon Apr 21 03:11:33 2014
  ..                                  DR      0 Mon Apr 21 03:11:33 2014
  desktop.ini                         HS     75 Mon Apr 21 02:31:32 2014
  Koala.jpg                            A 780831 Tue Jul 14 13:52:25 2009
       51097 blocks of size 1048576. 40126 blocks available
```

- - -

Tip

smbclient에서 사용 가능한 하위 명령은 FTP 클라이언트인 ftp의 명령 목록과 거의 동일합니다.

help 명령을 내리면 사용 가능한 명령 목록을 조회할 수 있으며, exit 명령은 smbclient를 종료합니다.

자세한 내용은 `누구나 사용할 수 있는 FTP 서버 운영하기`를 참고하세요.

- - -

하지만, 로컬 네트워크에서 이렇게 파일을 일일이 업로드하거나 다운로드하는 일은 무척이나 불편합니다.

NFS처럼 마치 시스템에 존재하는 파일 시스템을 사용하듯이 마운트해서 사용하는 편이 편리합니다.

**10** 윈도 파일 시스템을 마운트하기 위해 cifs-utils 패키지를 설치합니다.

```bash
administrator@server02:~$ sudo apt-get install cifs-utils
```

11 윈도 공유 폴더를 마운트합니다.

마운트할 파일 시스템 형식을 cifs로 지정하고(-t cifs) `mount -t cifs // [윈도 시스템IP 주소]/[공유 폴더 경로] /[마운트할 디렉터리 경로]` 형식으로 입력합니다.

패스워드를 묻는데 역시 아직까지는 입력할 필요가 없습니다.

```bash
administrator@server02:~$ sudo mkdir /mnt/smbmount
administrator@server02:~$ sudo mount -t cifs //192.168.122.250/share /mnt/smbmount
Password:
```

**12** df -h 명령으로 윈도 공유 폴더가 마운트된 사실을 확인할 수 있습니다.

```bash
administrator@server02:~$ df -h
Filesystem                         Size  Used Avail Use% Mounted on
...
//192.168.122.250/share             50G   11G   40G  21% /mnt/smbmount
```

**13** 마운트된 디렉터리를 조회하면 윈도 공유 폴더에서 복사해둔 파일을 확인할 수 있습니다.

```bash
administrator@server02:~$ ls /mnt/smbmount/
desktop.ini Koala.jpg
```

하지만, 아직 공유 폴더에 파일을 복사해서 쓰는 작업은 할 수 없는데, 현재 사용자가 윈도 공유 폴더의 소유자가 아니기 때문입니다.

```bash
administrator@server02:~$ touch test_samba
administrator@server02:~$ cp test_samba /mnt/smbmount/
cp: cannot create regular file `/mnt/smbmount/test_samba`: Permission denied
```

**14** 문제를 해결해봅시다.

우선 공유 폴더를 언마운트합니다.

```bash
administrator@server02:~$ sudo umount /mnt/smbmount/
```

15 공유 폴더를 다시 마운트합니다.

이때 -o 옵션을 추가해서 공유 폴더를 마운트하는 리눅스 시스템의 사용자가 누구인지 UID와 GID를 지정합니다(-o uid=1000,gid=1000).

```bash
administrator@server02:~$ sudo mount -t cifs -o uid=1000,gid=1000 //192.168.122.250/share /mnt/smbmount
```

- - -

**이렇게 하세요!**

사용자 계정의 UID와 GID는 id 명령으로 확인할 수 있습니다.

```bash
administrator@server02:~$ id administrator
uid=1000(administrator) gid=1000(administrator) groups=1000(administrator)
```

- - -

**16** 이번에는 파일 복사에 성공했습니다.

```bash
administrator@server02:~$ cp test_samba /mnt/smbmount/
administrator@server02:~$ ls /mnt/smbmount/
desktop.ini Koala.jpg test_samba
```

**17** 윈도 사용자 계정으로 인증 과정을 거쳐 공유 폴더를 사용하는 방법을 알아봅시다.

먼저 윈도 사용자 계정을 생성하고 비밀번호를 설정합니다.

`[제어판]` → `사용자 계정 및 가족 보호` → `사용자 계정 추가 또는 제거`를 선택하고 `새 계정 만들기`를 클릭해서 새로운 사용자 계정 `Jaehun`을 생성합니다.

새 계정에는 관리자 권한을 부여합니다.

`[제어판]`에서 `사용자 계정 및 가족 보호` → `사용자 계정`을 차례로 클릭하고 `사용자 계정 변경` 항목에서 `사용자 계정에 대한 암호를 만듭니다.`를 선택합니다.

▼ 그림 7-28 사용자 계정 변경 항목
![ ](/img/07/28.jpg)

**18** 암호를 설정하고 확인을 위해 같은 암호를 한 번 더 입력합니다.

`[암호 만들기]`를 클릭해서 암호를 생성합니다.

▼ 그림 7-29 사용자 계정 암호 만들기
![ ](/img/07/29.jpg)

**19** `[제어판]`에서 `네트워크 및 공유 센터`를 선택하고 왼쪽 하위 메뉴에서 `고급 공유 설정 변경`을 선택합니다.

`암호 보호 공유 켜기`를 선택합니다.

이때 윈도 시스템이 현재 사용하고 있는 네트워크 프로필(홈 또는 회사)의 항목을 수정해야 합니다.

`[변경 내용 저장]`을 클릭합니다.

▼ 그림 7-30 고급 공유 설정
![ ](/img/07/30.jpg)

**20** 다시 리눅스 시스템으로 돌아가 smbclient -L 명령으로 윈도 공유 폴더 목록을 조회합니다.

-U 옵션으로 윈도 사용자를 명시해야 하며 앞에서 생성한 윈도 사용자 계정의 암호를 입력해야 합니다.

```bash
administrator@server02:~$ smbclient -L 192.168.122.250 -U Jaehun
Enter Jaehun\'s password: ********
Domain=[WINVM01] OS=[Windows 7] Server=[Windows 7]

   Sharename     Type     Comment
   ---------     ----     -------
   ADMIN$        Disk     원격 관리
   C$            Disk     기본 공유
   IPC$          IPC      원격 IPC
   share         Disk
```

- - -

Tip

실습하기 8번 항목과 달리 이번에는 잘못된 암호를 입력하거나 그냥 Enter를 누르면 접근이 거부됩니다.

- - -

**21** smbclient로 공유 폴더에 접속도 가능합니다.

물론 여기에서도 -U 옵션으로 윈도 사용자 계정을 명시해야 합니다.

```bash
administrator@server02:~$ smbclient //192.168.122.250/share -U Jaehun
Enter Jaehun\'s password: ********
Domain=[WINVM01] OS=[Windows 7] Server=[Windows 7]
smb: \> ls
.                                   DR        0 Mon Apr 21 03:11:33 2014
..                                  DR        0 Mon Apr 21 03:11:33 2014
desktop.ini                         HS       75 Mon Apr 21 02:31:32 2014
Koala.jpg                            A   780831 Tue Jul 14 13:52:25 2009
test_samba                           A       13 Mon Apr 21 03:11:33 2014
     51097 blocks of size 1048576. 40262 blocks available
```

**22** 공유 폴더를 마운트하는 방법도 조금 다릅니다.

현재 마운트된 윈도 공유 폴더를 언마운트하고 공유 폴더를 다시 마운트합니다.

이때 -o 옵션을 추가해서 윈도 시스템의 사용자 계정과 암호를 입력( -o user=[윈도 사용자 계정], password=[윈도 사용자 암호])합니다. 

공유 폴더를 마운트하는 리눅스 시스템의 사용자를 지정하기 위해 UID와 GID 정보도 추가했습니다.

```bash
administrator@server02:~$ sudo umount /mnt/smbmount/
administrator@server02:~$ sudo mount -t cifs -o user='Jaehun',password=******,uid=1000,gid=1000 //192.168.122.250/share /mnt/smbmount
```

- - -

Tip

공유 폴더를 마운트한 다음 마운트한 디렉터리를 확인해보고 쓰기 가능한지도 확인해보기 바랍니다.

**Q** 윈도 공유 폴더도 자동으로 마운트할 수 있을까요?
**A** NFS처럼 파일 시스템 테이블(/etc/fstab)을 수정해서 시스템 부팅 과정에서 공유 폴더를 자동으로 마운트할 수 있습니다.

fstab 파일 가장 아래에 윈도 공유 폴더에 대한 정보를 추가합니다.

`//[윈도 시스템 IP 주소]/[공유 디렉터리 경로] /[마운트할 디렉터리 경로] cifs defaults,username=[윈도 사용자 계정], password=[윈도 사용자 암호],uid=[리눅스 사용자 UID],gid=[리눅스 사용자 GID] 0 0` 형식으로 입력합니다.

시스템을 재부팅하고 마운트 디렉터리에 파일 목록이 제대로 조회되는지 확인해야 합니다.

```bash
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options><dump> <pass>
...

//192.168.122.250/share /mnt/smbmount cifs defaults,username=Jaehun,password=******,uid=1000,gid=1000 0 0
```

하지만, 다른 시스템의 사용자 계정 정보(username과 password)가 그대로 노출되는 상태는 보안을 고려했을 때 그리 바람직하지 못합니다.

파일 시스템 탭에서 credentials 옵션을 이용해서 사용자 계정 정보가 저장된 파일을 따로 지정합니다.

```bash
//192.168.122.250/share /mnt/smbmount cifs defaults,credentials=/etc/auto.auth,uid=1000,gid=1000 0 0
```

/etc/auto.auth 파일을 다음과 같이 생성합니다.

이 파일의 접근 권한을 600으로 제한하면 sudo 권한이 없는 사용자는 이 파일의 내용을 확인할 수 없습니다 (보안을 위해 패스워드를 암호화하면 좋겠지만 아쉽게도 암호화한 패스워드는 허용되지 않습니다).

```bash
username=Jaehun
password=******
```

- - -

### FTP 서버로 파일 서버 운영하기

로컬 네트워크를 벗어나 인터넷을 통해 파일을 주고받기 위해 FTP를 사용합니다.

여기에서는 FTP 서버를 설치, 운영하는 방법을 소개하고 인터넷에서 FTP 서버를 운영하기 위한 FTP 패시브 모드에 대해 살펴봅니다.

#### FTP에 대해 알려주세요

인터넷을 통해 파일을 배포하는 서비스는 주로 FTP(File Transfer Protocol, 파일 전송 프로토콜)를 사용합니다.

FTP는 TCP/IP를 기반으로 서버와 클라이언트 사이의 파일 전송을 제공합니다.

아주 오래 전에 개발된 프로토콜이지만 지금도 인터넷에서 사용됩니다.

클라이언트가 서버의 특정 포트로 요청하면 서버가 이를 처리하고 클라이언트에게 처리 결과를 제공하는 다른 네트워크 서버와 달리 FTP에는 클라이언트와 서버 사이에 서비스 요청 및 결과 통보를 알리기 위한 명령 포트와 실재로 파일을 전송하기 위한 데이터 전송 포트가 존재합니다.

FTP의 동작 원리도 다소 복잡합니다.

그림 7-31에서 FTP의 일반적인 작동 방식인 액티브 모드를 소개합니다.

▼ 그림 7-31 FTP 액티브 모드
![ ](/img/07/31.jpg)

1. FTP 클라이언트 ftp는 FTP 서버의 21번 포트(FTP 명령 포트)로 파일 전송을 요청합니다. 이 과정에서 클라이언트는 실제 데이터를 전송할 클라이언트의 포트 번호(5123)를 리눅스 서버에 알립니다.

2. FTP 서버 ftpd는 접속 여부를 결정하고 FTP 요청을 허가한다는 메시지만 보냅니다.

3. FTP 서버는 20번 포트(FTP 데이터 포트)를 출발지로 삼아 클라이언트가 알려준 클라이언트의 데이터 전송 포트로 접속을 시도합니다(그렇습니다. 서버가 클라이언트로 접속을 시도합니다).

4. 클라이언트 쪽에서 접속을 허용하고 파일을 주고받습니다.

FTP 액티브 모드는 인터넷 초창기 FTP가 처음 고안되었을 때는 효과적이었을지 모르나 네트워크 서비스의 보안이 강조되는 지금 사용하기에는 문제가 있습니다.

서버가 클라이언트에 접속을 시도하기 때문에 클라이언트의 방화벽이 서버의 접근을 차단하면 FTP가 정상적으로 동작하지 않기 때문입니다.

이를 해결하기 위한 방법이 그림 7-32의 FTP 패시브 모드입니다.

▼ 그림 7-32 FTP 패시브 모드
![ ](/img/07/32.jpg)

1. FTP 클라이언트가 리눅스 서버의 21번 포트(명령 포트)로 접속 요청합니다. 이때 액티브 모드와 달리 이 FTP 요청이 패시브 모드임을 알립니다.

2. FTP 서버는 데이터 통로를 위한 새로운 포트(3479)를 임의로 하나 할당하고 선택된 포트 번호를 클라이언트에게 알려줍니다.

3. 클라이언트는 출발지 포트를 선택하고 FTP 서버가 알려준 데이터 전송 포트(3479)에 대해 다시 접속 요청을 합니다.

4. 서버 쪽에서 접속을 허용하고 파일을 주고받습니다.

패시브 모드로 동작하기 위해서는 FTP 서버와 클라이언트 양쪽에서 패시브 모드를 지원해야 합니다.

FTP 서버와 클라이언트 대부분이 패시브 모드를 지원합니다.

#### FTP 서버, vsftp 준비하기

server01에서 FTP 서버를 운영하고 server02에서 FTP 클라이언트로 접속합니다.

FTP 서버를 이용해서 파일을 업로드 및 다운로드할 수 있습니다.

▼ 그림 7-33 FTP 서버의 파일 사용하기
![ ](/img/07/33.jpg)

먼저 FTP 서버로 사용할 vsftpd를 설치합니다.

```bash
administrator@server01:~$ sudo apt-get update
administrator@server01:~$ sudo apt-get install vsftpd
```

vsftpd 설치 과정에서 FTP 서버가 시작됩니다.

netstat를 실행하면 접속 대기 중인 ftp 포트를 확인할 수 있습니다.

```bash
administrator@server01:~$ netstat -a | grep ftp
tcp    0     0 *:ftp                *:*                      LISTEN
```

lsof 명령으로 ftp 포트로 접속 대기 중인 FTP 서버 데몬, vsftpd를 확인할 수 있습니다.

```bash
administrator@server01:~$ sudo lsof -i | grep ftp
vsftpd    1331          root    3u  IPv4   9463      0t0 TCP *:ftp (LISTEN)
```

vsftpd의 환경 설정 파일은 /etc/vsftpd.conf입니다.

꼭 알아둘 만한 항목을 소개합니다.

```bash
administrator@server01:~$ sudo vi /etc/vsftpd.conf
```

listen은 vsftpd가 외부 접근에 귀 기울이겠다는 항목입니다.

anonymous_enable은 익명 접속자를 허용할지 결정합니다. 기본값은 No(불허)입니다.

local_enable은 로컬 사용자의 로그인을 허용할지 결정합니다.

```conf
listen=YES
anonymous_enable=NO
local_enable=YES
```

write_enable은 FTP 서버가 제공하는 디렉터리에 쓰기를 허용할지 결정합니다.

local_umask는 디렉터리에 쓰기 가능한 경우 생성한 파일의 접근 권한을 결정합니다.

umask 022는 접근 권한을 755로 설정합니다.

```conf
#write_enable=YES
#local_umask=022
```

anon_upload_enable은 익명 사용자의 업로드 권한을 활성화합니다.

anon_mkdir_write_enable은 익명 사용자가 mkdir 명령으로 하위 디렉터리를 생성할 수 있게 만들지 결정합니다.

```conf
#anon_upload_enable=YES
#anon_mkdir_write_enable=YES
```

connect_from_port_20은 FTP 서버의 데이터 전송 포트 번호를 20번으로 설정합니다.

패시브 모드로 FTP 서버를 운영할 때는 해제해야 합니다.

```conf
connect_from_port_20=YES
```

chroot_local_user는 FTP 접속으로 홈 디렉터리를 벗어나지 못하게 합니다.

FTP 서버를 운영할 때는 리눅스 시스템의 보안을 위해 이 옵션을 활성화하는 편이 바람직합니다.

```conf
#chroot_local_user=YES
```

ufw 방화벽으로 FTP 서버에 대한 접근을 허용(allow ftp)합니다.

ufw는 tcp 21번 포트를 개방합니다.

```s
administrator@server01:~$ sudo ufw allow ftp
administrator@server01:~$ sudo ufw status
Status: active

To                  Action    From
--                  ------    ----
...
21/tcp              ALLOW     Anywhere
21/tcp              ALLOW     Anywhere (v6)
```

익명 FTP 서버에서 클라이언트에 제공할 디렉터리는 다음과 같이 usermod 명령으로 설정합니다.

`usermod -d [사용할 디렉터리 경로] ftp` 형식으로 입력합니다.

```s
administrator@server01:~$ sudo usermod -d /srv/ftp ftp
administrator@server01:~$ ls -l /srv/
drwxr-xr-x 2 root ftp 4096 Apr 7 23:06 ftp
drwxr-xr-x 4 root root 4096 Apr 7 00:14 nfs
drwxr-xr-x 5 root root 4096 Apr 3 23:49 samba
```

FTP 서버를 통해 배포할 파일을 방금 생성한 디렉터리에 복사해둡니다.

```s
administrator@server01:~$ touch test_ftp_down
administrator@server01:~$ sudo cp test_ftp_down/srv/ftp/
```

#### 누구나 사용할 수 있는 FTP 서버 운영하기

누구나 사용 가능한 FTP 서버를 운영해봅시다.

vsftpd 설정 파일을 vi로 엽니다.

```s
administrator@server01:~$ sudo vi /etc/vsftpd.conf
```

익명 사용자 접근을 허용하기 위해 anonymous_enable 항목을 활성화시킵니다.

```conf
anonymous_enable=YES
```

변경된 설정 내용을 반영하기 위해 vsftpd를 재시작합니다.

```s
administrator@server01:~$ sudo service vsftpd restart
```

클라이언트로 FTP 서버에 접속해봅시다.

FTP 클라이언트인 ftp는 우분투에 기본으로 설치되어 있습니다.

`ftp [접속할 FTP 서버 주소]` 형식으로 입력합니다.

IP 주소 또는 호스트 이름을 사용할 수 있습니다.

익명 사용자로 접속하기 위해 사용자 이은 anonymous로 입력하고 패스워드는 빈칸으로 놔두고 Enter를 누릅니다.

접속에 성공했다는 메시지를 확인할 수 있습니다.

```s
administrator@server02:~$ ftp 192.168.122.201
Connected to server01.
220 (vsFTPd 3.0.2)
Name (192.168.122.201:administrator): anonymous
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.

ftp>

```

ls 명령으로 접속한 FTP 서버의 디렉터리를 조회할 수 있습니다.

앞서 복사해둔 `test_ftp_down` 파일을 확인할 수 있습니다.

```bash
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
-rw-r--r--   1  0        0              13 Apr 07 23:16 test_ftp_down
226 Directory send OK.
```

get으로 파일을 다운로드합니다. get [다운로드할 파일] 형식으로 입력합니다.

```s
ftp> get test_ftp_down
local: test_ftp_down remote: test_ftp_down
200 PORT command successful. Consider using PASV.
150 Opening BINARY mode data connection for test_ftp_down (13 bytes).
226 Transfer complete.
13 bytes received in 0.00 secs (92.7 kB/s)
```

ftp를 종료하려면 exit 명령을 사용합니다.

다시 명령 프롬프트로 나가게 됩니다.

FTP 서버에서 다운로드한 `test_ftp_down` 파일을 확인할 수 있습니다.

```s
ftp> exit
221 Goodbye.
administrator@server02:~$ ls
test_ftp_down
```

다시 클라이언트에서 ftp를 실행해서 FTP 서버에 익명(anonymous)으로 접속한 다음 put으로 FTP 서버에 파일을 업로드해봅니다.

`put [업로드할 파일]` 형식으로 입력합니다.

권한이 없어서 파일을 업로드할 수 없다는 오류 메시지(550 Permission denied)를 확인할 수 있습니다.

```s
administrator@server02:~$ touch test_ftp_up
administrator@server02:~$ ftp 192.168.122.201
ftp> put test_ftp_up
local: test_ftp_up remote: test_ftp_up
200 PORT command successful. Consider using PASV.
550 Permission denied.
```

FTP 서버인 server01로 돌아와 vsftp 설정 파일인 /etc/vsftpd.conf를 vi로 엽니다.

쓰기 권한을 부여하기 위해 write_enable을 활성화합니다.

```conf
write_enable = YES
```

익명 사용자의 업로드가 가능하도록 anon_upload_enable을 활성화하고 바로 아래에 anon_root를 추가하여 익명 FTP 서버의 루트 디렉터리가 /srv/ftp임을 지정합니다.

```conf
anon_upload_enable=YES
anon_root=/srv/ftp
```

vsftpd를 재시작합니다.

```s
administrator@server01:~$ sudo service vsftpd restart
```

익명 FTP 서버의 루트 디렉터리인 /srv/ftp는 그대로 두고 /srv/ftp에 하위 디렉터리를 생성해서 쓰기 권한을 허용하는 편이 안전합니다.

익명 사용자의 쓰기 전용 디렉터리 upload를 생성해서 접근 권한 777을 할당했습니다.

```s
administrator@server01:~$ sudo mkdir /srv/ftp/upload
administrator@server01:~$ sudo chmod 777 /srv/ftp/upload/
```

- - -

Tip

누구든 파일을 쓸 수 있도록 익명 FTP 서버의 루트 디렉터리인 /srv/ftp의 접근 권한을 777로 설정하면 클라이언트에서 접속하려고 할 때 문제가 발생합니다.

이것은 FTP 서버를 보호하기 위해 새로 추가된 기능입니다.

- - -

다시 클라이언트에서 익명(anonymous)으로 FTP 서버에 접속합니다.

앞에서 생성한 upload 디렉터리를 확인할 수 있습니다.

```s
administrator@server02:~$ ftp 192.168.122.201
ftp> ls
...
drwxrwxrwx  2 0      0        4096 Nov 01 00:22 upload
```

upload 디렉터리로 이동해서 `test_ftp_up` 파일을 업로드합니다. 이번에는 성공할 것입니다.

```s
ftp> cd upload
250 Directory successfully changed.
ftp> put test_ftp_up
local: test_ftp_up remote: test_ftp_up
200 PORT command successful. Consider using PASV.
150 Ok to send data.
226 Transfer complete.
```

- - -

**Q** ftp 명령에 대해 더 알려주세요.
**A** FTP 클라이언트인 ftp 사용법에 대해 더 살펴보겠습니다. ftp는 일반적으로 리눅스 명령행에서 내리는 명령을 그대로 사용합니다. 몇 가지 알아둘 만한 ftp 명령을 소개합니다.

`!` 기호를 붙이면 로컬 시스템에 대한 명령을 수행합니다.

ls와 pwd가 원격 시스템을 대상으로 동작하는데 비해 !ls는 로컬 시스템의 파일을 목록을 조회하고 !pwd는 로컬 시스템의 현재 작업 디렉터리를 보여줍니다.

```s
ftp> !ls
ftp> !pwd
```

lcd는 로컬 시스템의 작업 디렉터리를 변경합니다.

```s
ftp> lcd
```

get, put은 각각 파일 하나씩 다운로드, 업로드하는 명령입니다.

여러 파일을 다운로드하거나 업로드할 때는 mget, mput 명령을 사용합니다.

mget, mput을 사용하면 메타 문자를 사용할 수 있습니다.

```s
ftp> mget *.html
ftp> mput *.h
```

prompt는 대화식 모드를 활성화하거나 해제합니다.

mget과 mput을 사용할 때 각 파일마다 업로드, 다운로드할지 여부를 사용자에게 묻습니다.

이런 과정이 번거롭기 때문에 mget, mput 명령을 사용하기 전에 prompt 명령으로 대화식 모드를 해제해둡니다.

```s
ftp> prompt
```

- - -

#### 특정 사용자를 위한 FTP 서버 운영하기

이번에는 특정 사용자를 위한 FTP 서버 운영 방법을 알아봅시다.

vsftpd 설정 파일인 /etc/vsftpd.conf를 수정합니다.

```s
administrator@server01:~$ sudo vi /etc/vsftpd.conf
```

익명 사용자를 위한 설정은 모두 주석처리하고(설정 항목 앞에 # 표시 입력), local_enable=YES는 활성화하여 로컬 사용자의 접근을 허용합니다.

```conf
#anonymous_enable=YES
local_enable=YES
write_enable=YES
#anon_upload_enable=YES
#anon_root=/srv/ftp
```

보안을 위해서라도 FTP 서버에 접속한 사용자는 사용자 계정의 홈 디렉터리를 벗어나지 않도록 제한해야 합니다.

chroot_local_user=YES 항목을 찾아 활성화시키고 FTP 디렉터리에 쓰기 가능하도록 allow_writeable_chroot=YES 항목을 추가로 입력합니다.

```conf
chroot_local_user=YES
allow_writeable_chroot=YES
```

설정 내용을 적용하기 위해 vsftpd를 재시작합니다.

```s
administrator@server01:~$ sudo service vsftpd restart
```

익명 사용자를 위한 FTP 서버를 운영할 때와 달리 사용자 계정의 홈 디렉터리에 접속하게 됩니다.

홈 디렉터리에 다운로드를 테스트할 파일을 생성합니다.

```s
administrator@server01:~$ touch test_ftp_user_down
```

업로드를 테스트할 파일을 만들어두고 클라이언트에서 ftp를 이용해서 FTP 서버에 접속합니다.

이번에는 FTP 서버의 사용자 계정을 입력합니다.

```s
administrator@server02:~$ touch test_ftp_user_up
administrator@server02:~$ ftp 192.168.122.201
Connected to 192.168.122.201
220 (vsFTPd 3.0.2)
Name (192.168.122.201:administrator): administrator
331 Please specify the password.
Password: ********
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
```

get, put으로 파일 다운로드, 업로드가 정상적으로 이루어지는지 확인합니다.

```s
ftp> ls
...
-rw-rw-r--    1 1000     1000              13 Mar 13 06:31 test_ftp_user_down
ftp> get test_ftp_user_down
ftp> put test_ftp_user_up
```

chroot 옵션이 제대로 동작하는지 확인해봅시다.

루트 디렉터리로 이동한 다음( cd /) 다시 ls 명령을 해봐도 FTP 홈 디렉터리를 벗어나지 않는 것을 알 수 있습니다.

```s
ftp> cd /
250 Directory successfully changed.
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
-rw-------    1 1000    1000             13 Apr 07 23:33 test_ftp_user_down
-rw-rw-r--    1 1000    1000             13 Mar 13 06:31 test_ftp_user_up
226 Directory send OK.
```

#### 패시브 모드 FTP 서버 운영하기

FTP 서버를 외부로 공개하려면 FTP 서버를 패시브 모드로 운영해야 합니다.

vsftpd의 패시브 모드 설정 방법을 살펴봅시다.

설정 파일 /etc/vsftpd.conf를 vi로 엽니다.

```s
administrator@server01:~$ sudo vi /etc/vsftpd.conf
```

- - -

Tip

`FTP에 대해 알려주세요!`에서 FTP 서버의 패시브 모드에 대해 설명했습니다.

- - -

FTP 서버가 접속 요청을 대기할 21번 포트를 사용하지 못하는 경우를 대비해 50021번 포트를 사용합니다.

```conf
listen=YES
listen_port=50021
```

패시브 모드에서 ftp-data 포트 20번은 사용하지 않기 때문에 connect_from_port_20=YES 항목을 주석처리합니다.

```conf
#connect_from_port_20=YES
```

설정 파일의 마지막에 다음 내용을 추가합니다.

패시브 모드를 활성화(pasv_enable=YES)하고 ftp-data 포트로 50090부터(pasv_min_port=50090) 50100까지 사용(pasv_max_port=50100)하게 됩니다.

```conf
pasv_enable=YES
pasv_min_port=50090
pasv_max_port=50100
```

vsftpd를 재시작합니다.

```s
administrator@server01:~$ sudo service vsftpd restart
```

lsof 명령으로 vsftpd가 접속 대기하는 포트 번호가 21에서 50021로 변경된 것을 확인할 수 있습니다.

```s
administrator@server01:~$ sudo lsof -i | grep ftp
vsftpd 1315             root   3u   IPv4  10505      0t0  TCP *:50021 (LISTEN)
```

방화벽 설정을 변경합니다. FTP 접속을 위해 50021 포트를 개방(ufw allow 50021)하고 ftp-data 포트로 사용할 50090부터 50100까지( to any port 50090:50100) tcp( proto tcp) 포트를 개방합니다.

```s
administrator@server01:~$ sudo ufw allow 50021
administrator@server01:~$ sudo ufw allow to any port 50090:50100 proto tcp
administrator@server01:~$ sudo ufw status
Status: active

To                        Action    From
--                        ------    ----
...
50021                     ALLOW     Anywhere
50090:50100/tcp           ALLOW     Anywhere
50021                     ALLOW     Anywhere (v6)
50090:50100/tcp           ALLOW     Anywhere (v6)
```

클라이언트에서 FTP 서버로 접속해봅시다.

패시브 모드 FTP 서버의 접속 요청을 받기 위해 FTP 클라이언트도 패시브 모드로 실행해야 합니다.

ftp에서 패시브 모드를 활성화하는 옵션은 -p입니다.

FTP 서버가 21번 대신 50021번 포트로 접속 요청을 기다리고 있으므로 `ftp -p [FTP 서버 주소] [변경된 포트번호]` 형식으로 ftp를 실행합니다.

FTP 서버에 접속하면 패시브 모드가 활성화되었다는 메시지( Entering Passive Mode)를 확인할 수 있습니다.

```s
administrator@server02:~$ ftp -p 192.168.122.201 50021
Connected to 192.168.122.201.
220 (vsFTPd 3.0.2)
Name (192.168.122.201:administrator): administrator
331 Please specify the password.
Password: ********
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
227 Entering Passive Mode (192,168,122,201,195,177).
150 Here comes the directory listing.
-rw-------   1 1000      1000           13 Apr 07 23:33 test_ftp_user_down
-rw-rw-r--   1 1000      1000           13 Mar 13 06:31 test_ftp_user_up
226 Directory send OK.
```

### SFTP로 보안 유지하기

파일 전송을 위한 프로토콜 FTP는 파일의 안전한 전송을 보장하지는 않습니다.

이를 보완할 수 있는 SFTP를 알아보고 사용법을 소개합니다.

#### SFTP는 어떻게 동작하나요

외부 네트워크를 통해 파일을 전송하는데 FTP가 위험한 이유는 자료를 암호화하지 않고 전송하기 때문입니다.

사용자 인증 정보를 암호화하지 않은 채 전송하는 태생적인 문제는 인터넷을 통해 FTP 서버를 운영하는 일이 얼마나 위험한지 드러냅니다.

텔넷의 결함을 보완하기 위해 보안 셸, SSH가 등장했듯이 FTP 대신 SFTP를 사용해서 보안을 유지할 수 있습니다.

자료 전송 과정 전후로 사용자 인증을 SSH가 처리하고 자료를 암호화해서 전송하기 때문에 FTP보다 안전하다고 할 수 있습니다.

SFTP는 SFTP 클라이언트인 sftp 요청에 대해 SSH 서버의 하위 시스템인 sftp-server가 응답하고 SFTP 프로토콜을 통해 파일 전송을 처리하는 방식으로 동작합니다.

그림 7-34는 이를 SFTP의 동작 원리를 보여줍니다.

▼ 그림 7-34 SFTP 동작 원리
![ ](/img/07/34.jpg)

참고로 이 장에서 SSH와 더불어 원격으로 파일을 복사하는 명령 scp를 함께 소개했는데, scp도 실제로는 SFTP 프로토콜을 통해 파일을 전송합니다.

#### SFTP 서버 설정하고 클라이언트에서 접속하기

SSH가 설치되는 과정에서 scp, sftp, sftp-server와 같은 모든 하위 시스템이 설치되기 때문에 SSH 서버가 곧 SFTP 서버입니다.

server02에서 SFTP 서버인 server01에 접속해보겠습니다.

▼ 그림 7-35 SFTP 서버의 파일 사용하기
![ ](/img/07/35.jpg)

- - -

이렇게 하세요!

SSH 서버 설정 파일 /etc/ssh/sshd_config에 SSH 서버의 하위 시스템을 지정하는 옵션이 있습니다.

다음과 같이 sftp 서버로 sftp-server가 등록되어 있습니다.

```s
Subsystem sftp /usr/lib/openssh/sftp-server
```

- - -

SSH 서버만 제대로 동작하고 있다면 SFTP 클라이언트로 바로 접속 가능합니다.

```s
administrator@server01:~$ netstat -a | grep ssh
tcp        0     0 *:ssh                    *:*                   LISTEN
tcp        0     0 192.168.122.201:ssh      losttemple:41996      ESTABLISHED
tcp6       0     0 [::]:ssh                 [::]:*                LISTEN
```

- - -

Tip
아직 SSH 서버가 설치되지 않은 상태라면 6장을 참고하여 SSH 서버를 설치하고 동작시켜야 합니다.

- - -

물론 SFTP 서버에 접속 가능하도록 SSH 포트인 22번을 개방해야 합니다.

```s
administrator@server01:~$ sudo ufw status
Status: active

To                        Action    From
--                        ------    ----
...
22                        ALLOW     Anywhere
22                        ALLOW     Anywhere (v6)
```

- - -

Tip

SFTP는 명령과 자료 전송에 포트 22 하나만 사용하므로 명령 포트와 데이터 포트로 이원화되어 동작하는 FTP 서버에서 발생하는 문제는 자동적으로 해결됩니다.

- - -

server02에서 공개키 인증을 사용하고 있는 SSH 서버에 접근하려면 server02에서 생성한 공개키를 전송해야 할 필요가 있습니다.

잠시만 패스워드 인증을 허용하도록 설정해야 합니다.

```s
administrator@server01:~$ sudo vi /etc/ssh/sshd_config
```

패스워드 인증 기능을 활성화하기 위해 PasswordAuthentication 옵션을 주석처리합니다.

```conf
#PasswordAuthentication no
```

ssh 서비스를 다시 시작합니다.

```s
administrator@server01:~$ sudo service ssh restart
```

클라이언트인 server02에서 개인키를 생성합니다.

생성 과정에서 패스구문을 입력해야 합니다.

```s
shinjaehun@server02:~$ ssh-keygen
```

ssh-copy-id로 개인키를 전송합니다.

```s
shinjaehun@server02:~$ ssh-copy-id administrator@192.168.122.201
```

- - -

Tip

개인키를 전송하는 과정에서 묻는 비밀번호는 개인키를 생성할 때 입력한 패스구문이 아니라 server01 사용자인 administrator 계정의 로그인 패스워드입니다.

- - -

다시 server01의 공개키 인증을 활성화합니다.

```s
administrator@server01:~$ sudo vi /etc/ssh/sshd_config
```

PasswordAuthentication의 주석을 해제해서 패스워드 인증을 허용하지 않습니다.

```s
PasswordAuthentication no
```

ssh 서비스를 다시 시작합니다.

```s
administrator@server01:~$ sudo service ssh restart
```

SFTP 클라이언트 sftp로 SSH 서버에 접속해봅시다.

`sftp [사용자 계정]@[서버 주소]` 형식으로 입력합니다.

접속 과정에서 개인키를 생성할 때 입력한 패스구문이 필요합니다.

```s
administrator@server02:~$ sftp administrator@192.168.122.201
Enter passphrase for key '/home/administrator/.ssh/id_rsa': ********
Connected to 192.168.122.201.
sftp>
```

- - -

Tip

server01 사용자 administrator의 로그인 패스워드가 아니라 server02 사용자 administrator의 개인키 패스구문을 입력합니다.

- - -

sftp 사용법은 ftp 사용 방법과 거의 동일합니다.

유닉스/리눅스 환경의 명령행에서 쓰는 셸 명령은 SFTP 서버인 원격 호스트를 대상으로 하고 ‘ !’ 기호를 붙여 명령을 실행하면 로컬 호스트를 대상으로 실행됩니다.

파일 다운로드와 업로드에 get, put 명령을 사용합니다.

```s
sftp> ls
sftp> !ls
```

- - -

Tip

sftp 사용 방법은 ‘SFTP 서버 설정하고 클라이언트에서 접속하기’를 참고합니다.

- - -

### 초보 시스템 관리자의 일기 | 자동 마운트 활용하기

autofs의 자동 마운트 기능을 사용하면 서버에 대한 접근 요청이 있을 때만 파일 시스템을 마운트하고 더 이상 사용하지 않을 때는 자동으로 언마운트한다.

공유 디렉터리를 파일 시스템 테이블 /etc/fstab에 직접 등록하는 것보다 안전한 방법이라고 할 수 있다.

server01에서 제공하는 NFS 공유 디렉터리와 winvm01에서 제공하는 삼바 공유 폴더를 server02에서 autofs로 등록해서 사용해보자.

▼ 그림 7-36 자동 마운트 기능으로 NFS 공유 디렉토리와 윈도 공유 폴더 사용하기
![ ](/img/07/36.jpg)

server02의 파일 시스템 테이블을 vi로 열어서 수정한다.

```s
administrator@server02:~$ sudo vi /etc/fstab
```

마운트했던 공유 디렉터리 정보를 주석처리하고 파일 시스템 테이블을 저장한다.

```s
#192.168.122.201:/srv/nfs/public /mnt/nfs/public      nfs rsize=8192,wsize=8192,timeo=14,intr
#//192.168.122.250/share /mnt/smbmount cifs defaults,credentials=/etc/auto.auth,uid=1000,gid=1000 0 0
```

자동 마운트 기능을 사용하기 위해 autofs 패키지를 설치한다.

```s
administrator@server02:~$ sudo apt-get update
administrator@server02:~$ sudo apt-get install autofs
```

NFS 서버에서 공유하는 디렉터리 /srv/nfs/public을 /mnt/nfs/public으로 자동으로 마운트해보자.

먼저 aufofs의 마스터 설정 파일인 ‘auto.master’를 vi로 연다.

```s
administrator@server02:~$ sudo vi /etc/auto.master
```

+auto.master 부분을 주석처리하고 `[마운트 위치(절대경로)] [맵 파일 경로] [옵션]` 형식으로 자동으로 마운트할 디렉터리 경로를 명시해보자.

이때 맵 파일은 이 마운트 대상에 대한 세부 옵션을 처리하게 된다.

60초 동안 자동 마운트된 파일 시스템을 사용하지 않으면 autofs가 자동으로 파일 시스템을 마운트 해제할 것이다( –timeout=60).

실제 마운트가 되지 않았더라도 디렉터리 내용을 확인할 수 있도록 허용하는 것이 좋겠다( –ghost).

```s
#+auto.master
/mnt/nfs /etc/auto.nfs --timeout=60 --ghost
```

NFS 형식의 파일 시스템을 처리하기 위한 맵 파일, /etc/auto.nfs를 생성한다.

```s
administrator@server02:~$ sudo vi /etc/auto.nfs
```

autofs 주 설정 파일과 마찬가지로 세 부분으로 나뉘는데 `[마운트 위치(상대경로)] -fstype=[파일 시스템 형식] [마운트할 장치]`를 의미한다.

마스터 설정 파일에 `/mnt/nfs`로, 맵 파일에 ‘public’으로 등록되어 있어 실제 마운트 위치는 `/mnt/nfs/public`이 된다.

파일 시스템 형식은 NFS 버전 4이므로 nfs4를, 마운트할 장치는 NFS 서버에서 제공하는 공유 디렉터리의 경로를 주소와 함께 입력해야 한다.

공유 디렉터리를 마운트하는 시스템에는 마스터 설정 파일에 설정된 절대경로, `/mnt/nfs` 디렉터리가 존재해야 한다.

상대경로인 public_server01은 autofs가 자동으로 생성할 것이다.

```conf
public_server01 -fstype=nfs4 192.168.122.201:/srv/nfs/public
```

autofs 서비스를 재시작한다.

```s
administrator@server02:~$ sudo service autofs restart
```

마운트한 공유 디렉터리(/mnt/nfs/public_server01)를 확인한다.

```s
administrator@server02:~$ ls /mnt/nfs/public_server01
test_nfs
```

mount 명령을 실행하면 NFS 공유 디렉터리가 마운트된 사실을 확인할 수 있다.

```s
administrator@server02:~$ mount
/dev/vda1 on / type ext4 (rw,errors=remount-ro)
...
192.168.122.201:/srv/nfs/public on /mnt/nfs/public type nfs4 (rw,addr=192.168.122.201,clientaddr=192.168.122.202)
```

이번에는 윈도 공유 폴더를 마운트해보자.

마스터 설정 파일 /etc/auto.master에 윈도 공유 폴더를 처리할 항목을 추가한다.

설정 내용은 NFS와 동일하다.

```conf
#+auto.master
/mnt/nfs /etc/auto.nfs --timeout=60 --ghost
/mnt/smbmount /etc/auto.windows --timeout=60 --ghost
```

맵 파일 /etc/auto.windows의 내용은 다음과 같다.

이때 마운트할 장치 경로가 NFS와 다르다는 사실에 주목해야 한다.

NFS 공유 디렉터리는 아무 기호 없이 시작하지만, 윈도 공유 폴더 주소는 ‘://’로 시작해야 한다.

윈도 공유 폴더를 마운트하는 시스템에는 마스터 설정 파일에 설정된 절대경로, /mnt/smbmount 디렉터리가 존재해야 한다.

상대경로인 share_winvm01은 autofs가 자동으로 생성할 것이다.

```conf
share_winvm01 -fstype=cifs ://192.168.122.250/share
```

윈도 공유 폴더를 마운트하는데 사용자 계정에 대한 정보가 필요하다면 맵 파일(/etc/auto.windows)에 사용자 계정 username과 패스워드 password 옵션을 설정할 수 있다.

‘윈도에서 공유한 폴더 리눅스에서 사용하기’의 22번 항목에서 살펴본 옵션과 동일하다.

```conf
share_winvm01 -fstype=cifs,username=Jaehun,password=****** ://192.168.122.250/share
```

마운트한 파일 시스템에 읽고 쓰기가 가능하도록 파일 시스템의 사용자에 대한 uid와 gid 정보도 설정해야 한다.

```conf
share_winvm01 -fstype=cifs,username=Jaehun,password=******,uid=1000,gid=1000 ://192.168.122.250/share
```

물론 credentials 옵션을 사용해서 사용자 계정 정보가 저장된 파일을 따로 분리할 수도 있다.

‘윈도 공유 폴더도 자동으로 마운트할 수 있을까요?’에서처럼 사용자 계정 정보를 저장한 파일(/etc/auto.auth)을 생성하고 접근 권한을 600으로 제한해야 한다.

```conf
share_winvm01 -fstype=cifs,credentials=/etc/auto.auth,uid=1000,gid=1000 ://192.168.122.250/share
```

이제 autofs 서비스를 재시작해볼까?

```s
administrator@server02:~$ sudo service autofs restart
```

마운트한 디렉터리로 이동하여 파일 목록을 확인한다.

mount 명령으로 확인하니 윈도 공유 폴더가 마운트됐다. 빙고!

```s
administrator@server02:~$ ls /mnt/smbmount/share_winvm01
desktop.ini Koala.jpg test_samba
administrator@server02:~$ mount
...
//192.168.122.250/share on /mnt/smbmount/share_winvm01 type cifs (rw)
```

맵 파일의 접근 권한 때문에 autofs가 문제를 일으킬 수 있다.

접근 권한은 644로 설정해야 한다.

```s
administrator@server02:~$ sudo ls -l /etc/auto*
-rw-r--r-- 1 root root 810 Apr 27 18:29 /etc/auto.master
-rw-r--r-- 1 root root 107 Apr 11 20:12 /etc/auto.nfs
-rw-r--r-- 1 root root 44 Apr 27 18:46 /etc/auto.winvm01
```
