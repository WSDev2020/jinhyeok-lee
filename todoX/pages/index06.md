---
title: 텔넷
key: linux ubuntu telnet
date: 2020-03-08
---

# 리눅스 네트워크 서버 활용하기

## SSH로 원격 시스템 안전하게 관리하기

- - -

열씨미&게을러

**열씨미** 그러고 보니 아까는 가상 시스템으로 실습했지만 실제 네트워크로 연결한 서버가 물리적으로 멀리 떨어진 곳에 존재한다면 관리하기가 쉽지 않겠어요.

**게을러** 그러네.

**열씨미** 생각해보세요. 관리해야 할 리눅스 서버가 다섯 대만 되더라도 제가 명령 하나 내리고 싶을 때마다 다섯 번씩 자리를 옮겨서 실행해야 할 텐데 얼마나 힘들겠어요?

**게을러** 그러네… 다른 건 몰라도 백업 명령 하나 내리기 위해서 B동 건물 3층까지 오르락내리락해야 한다면 운동은 되겠다.

**열씨미** 그렇게 영혼 없는 대답, 말구요!

**게을러** 뭐라고? 매일 어두운 곳에서 서버가 돌아가는 소음 속에서 시달리는 우리 시스템 관리자의 건강 증진을 위해 이 선배가 장고 끝에 내 놓은 획기적인 아이디어를 그렇게 매도할 수 있는 거야?

**열씨미** 말도 안 되는 소리 그만둬요.

**게을러** 우리 예의 바른 후배님이 이젠 이 못난 선배에게 훈계까지 해주시는 군요.

**열씨미** 아이… 참. 알았어요. 미안해요.선배. 그러지 말고~ 뭔가 실용적인 해결책을 알려주세요.

**게을러** 그… 민폐가 되는 귀여운 애교는 여자 친구 앞에서만 해줄 수 없겠어? 점심 때 먹은 된장찌개가… 뭐 어쨌든 결론은 앞에서 네트워크 구축하면서 나왔어. 원격 제어를 이용해서 관리자의 수고를 덜 수 있지.

**열씨미** 예? 원격 제어요? 아, 앞에서 설치한 텔넷 말이군요!

**게을러** 그럼… 텔넷도 네트워크로 연결된 시스템에 접속해서 제어할 수 있는 유용한 원격 제어 도구이긴 하지. 그런데.

**열씨미** 그런데?

**게을러** 텔넷은 보안에 심각한 결함이 있어서 시스템을 제어하는 용도로는 더 이상 잘 쓰지 않아. 텔넷 대신 보안 셸(Secure SHell, SSH)을 사용하는 편이 일반적이야.

**열씨미** 음… 텔넷에 어떤 결함이 있는지, SSH는 어떤 도구인지 궁금해지는군요. 어? 선배! 대답하다 말고 어디가요!

- - -

### SSH는 무엇이며 왜 등장했습니까?

시스템 관리자들은 리눅스 시스템을 관리하는 원격 제어 도구로 텔넷보다 SSH를 선호합니다.

텔넷보다 SSH(Secure SHell)가 인기를 누리는 이유는 무엇일까요?

#### 텔넷의 문제

네트워크로 연결된 시스템에 접속해서 관리를 도와주는 원격 제어 도구는 시스템 관리자의 필수 프로그램 중 하나입니다.

5장에서 살펴본 텔넷이 대표적인 원격 제어 도구입니다.

텔넷은 사용자 이름 username과 패스워드 password를 입력해서 사용자 인증을 처리합니다.

```s
administrator@test01:~$ telnet 10.0.0.2
Trying 10.0.0.2...
Connected to 10.0.0.2.
Escape character is '^]'.
Ubuntu 14.04.1 LTS
test02 login: administrator
password: *******
...
administrator@test02:~$
```

하지만, 텔넷에는 심각한 보안 결함이 있습니다.

텔넷을 통해 서버와 클라이언트 사이에 오가는 자료가 암호화되지 않은 텍스트 형태로 전송된다는 점입니다.

그렇기 때문에 그림 6-1처럼 악의적인 사용자가 서버와 클라이언트 사이의 자료를 중간에 가로챌 경우,

텔넷 접속 과정에서 입력하는 사용자 이름과 패스워드와 같은 사용자 정보를 쉽게 손에 넣을 수 있습니다.

게다가 이렇게 가로챈 사용자 정보로 개인정보를 빼내거나 시스템을 손상시킨다면 2차, 3차 피해로 이어질 수도 있습니다.

▼ 그림 6-1 텔넷 통신에서 사용자 ID와 패스워드 정보를 가로채는 악의적인 사용자
![ ](/img/06/01.jpg)

- - -

Tip
이렇게 네트워크를 통해 전달되는 자료인 패킷을 중간에 가로채는 악의적인 기술을 스니핑(Sniffing)이라고 합니다.

- - -

#### 보안 셸, SSH

보안 셸(Secure SHell, SSH)은 보안에 취약한 텔넷을 대체하는 원격 제어 도구입니다.

네트워크 통신을 암호화하여 자료를 보호하고 강력한 사용자 인증 기능을 제공합니다.

SSH가 텔넷보다 안전한 이유는 자료를 암호화해서 전송하기 때문입니다.

악의적인 사용자가 네트워크 통신 중간에 자료를 가로채도 알아내기가 쉽지 않습니다(그림 6-2).

따라서 특수한 경우를 제외하고 시스템 관리를 위한 네트워크 원격 접속은 SSH를 사용하는 편이 일반적입니다.

▼ 그림 6-2 SSH의 네트워크 통신 암호화 기능
![ ](/img/06/02.jpg)

### SSH로 리눅스 시스템 관리하기

SSH로 리눅스 시스템을 관리해봅시다.

먼저 기본적인 패스워드 인증 과정의 원리를 소개합니다.

SSH 서버를 설치해보고 ssh를 이용해서 서버에 접속해보겠습니다.

#### SSH의 패스워드 인증

SSH는 기본적으로 텔넷과 같은 패스워드 인증 기능을 제공합니다.

SSH 서버, 클라이언트 사이의 통신은 암호화되기 때문에 인증 과정에서 사용자 이름이나 패스워드도 암호화되어 전송됩니다.

그림 6-3의 패스워드 인증 과정을 한 단계씩 살펴봅시다.

▼ 그림 6-3 SSH 패스워드 인증
![ ](/img/06/03.jpg)

1. 사용자가 ssh(SSH 클라이언트)로 사용자 이름(username)을 입력해서 sshd(SSH 서버)에 접속 요청합니다.

2. sshd는 ssh에 패스워드(password)를 요구합니다.

3. 사용자가 패스워드를 입력하면 ssh가 패스워드를 암호화하여 sshd로 전송합니다.

4. 사용자 패스워드가 인증되면 sshd는 ssh의 접속을 승인합니다.

- - -

Tip

여기서 ssh는 SSH 접속에 사용하는 클라이언트 프로그램을, sshd는 SSH 서버,

즉 ssh 데몬(daemon)을 의미합니다.

ssh 클라이언트의 실행 파일은 /usr/bin/ssh, sshd 실행 파일은 /usr/sbin/sshd로 각각 다릅니다.

- - -

#### SSH 서버 설치하기

SSH 서버를 서비스할 가상 게스트 server01을 생성하고 SSH 서버를 설치합니다.

몇 가지 필요한 설정이 끝나면 호스트의 SSH 클라이언트로 SSH 서버에 접속해보겠습니다.

![ ](/img/06/04.jpg)

virt-clone을 이용해서 실습에 사용할 게스트 server01을 생성합니다.

생성이 끝나면 server01을 시작해서 로그인하고, 5장의 ‘실습에 사용할 게스트 준비하기’를 참고하여 네트워크 환경을 설정합니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name server01 \
> --file /home/shinjaehun/virtual_machines/server01.img
```

- - -

Tip

IP 주소는 192.168.122.201, 호스트 이름은 server01로 설정합니다

**이렇게 하세요!**

게스트를 시작하고 가상 콘솔에 접속하는 방법은 다음과 같습니다.

```s
shinjaehun@losttemple:~$ virsh start server01
shinjaehun@losttemple:~$ vv server01
```

- - -

게스트 준비가 끝나면 server01에 SSH 서버인 openssh-server 패키지를 시스템에 설치합니다.

```s
administrator@server01:~$ sudo apt-get update
administrator@server01:~$ sudo apt-get install openssh-server
```

서버 설치 과정에서 sshd가 자동으로 시작됩니다.

열려 있는 포트 목록( LISTEN: 접속을 기다리는 대기 상태) 중에서 ssh라는 포트가 검색될 것입니다.

ssh의 실제 포트 번호는 22번입니다.

```s
administrator@server01:~$ netstat -a | grep ssh
tcp        0   0 *:ssh                    *:*                  LISTEN
tcp6       0   0 [::]:ssh                 [::]:*               LISTEN
```

lsof -i 명령으로 확인하면 sshd가 클라이언트의 접속을 기다리는 대기 상태( LISTEN)라는 사실을 알 수 있습니다.

```s
administrator@server01:~$ sudo lsof -i
COMMAND PID         USER    FD  TYPE DEVICE SIZE/OFF NODE NAME
sshd    686         root    3r  IPv4   8034      0t0  TCP *:ssh (LISTEN)
sshd    686         root    4u  IPv6   8045      0t0  TCP *:ssh (LISTEN)
```

- - -

Tip

lsof는 시스템에서 동작하는 프로세스에 의해 열린 파일을 확인하는 명령으로 -i 스위치를 함께 입력하면 네트워크와 연결된 프로세스와 파일 정보를 보여줍니다.

- - -

server01에서 런레벨을 제어하기 위해 런레벨 편집기 sysv-rc-conf를 설치합니다.

설치가 끝나면 sysv-rc-conf를 실행합니다.

```s
administrator@server01:~$ sudo apt-get install sysv-rc-config
administrator@server01:~$ sysv-rc-config
```

터미널에서 실행하는 sysv-rc-conf와 사용 방법은 동일합니다.

ssh 서비스를 찾아서 런레벨 2부터 5까지 모두 시작하도록 설정해주면 됩니다.

설정이 끝나면 q를 눌러 런레벨 편집기를 종료합니다.

▼ 그림 6-5 런레벨 2~5 모두 시작하도록 편집
![ ](/img/06/05.jpg)

sshd 설정 파일 /etc/ssh/sshd_config를 살펴봅시다.

주석 처리된 옵션(옵션 앞에 ‘#’ 표시가 붙은 행)은 sshd에 영향을 미치지 않습니다.

보안을 고려해서 일부 옵션을 수정하는 편이 바람직합니다.

```s
administrator@server01:~$ sudo vi /etc/ssh/sshd_config
```

Port는 포트 번호를 지정하는 옵션입니다.

22번이 기본이지만 사정에 따라 포트 번호를 변경해서 운영할 수 있습니다.

주석 처리되어 있는 ListenAddress는 접속 허용할 대상을 지정하는 옵션입니다.

이 옵션이 활성화되지 않았을 때 기본값은 0.0.0.0으로 모든 네트워크에 대한 접속을 허용합니다.

이 책에서는 기본값을 그대로 사용하지만, 실무에서는 SSH 서버를 보호하기 위하여 특정 호스트에 대한 접근만 허용하는 편이 일반적입니다.

Protocol에서는 SSH 프로토콜 1 또는 2 중에서 무엇을 사용할지 결정합니다.

보안을 이유로 SSH 프로토콜 1은 사용하지 않습니다.

```s
Port 22
...
#ListenAddress 0.0.0.0
Protocol 2
```

HostKey는 암호화 방식(rsa, dsa, ecdsa)에 따른 호스트키를 지정합니다.

호스트키는 공개키 인증에서 호스트를 구분하는 데 사용하는 공개키입니다.

‘ssh 활용하기’에서 저장된 호스트 정보를 확인하는 방법을 소개합니다.

```s
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_dsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
```

UsePrivilegeSeparation은 권한을 분리할지 여부를 결정합니다.

보안을 위해 분리하는 편이 일반적입니다.

```s
UsePrivilegeSeparation yes
```

SSH 서버의 활동은 syslog에 의해 INFO 수준의 로그를 저장합니다.

```s
SyslogFacility AUTH
LogLevel INFO
```

* LoginGraceTime: 로그인 제한 시간을 결정합니다. 120초 동안 로그인하지 않으면 연결이 끊어질 것입니다.
* PermitRootLogin: 루트 계정 로그인을 허용할지 결정합니다. 시스템 보안 유지를 위해 이 옵션은 no로 설정하는 편이 바람직합니다.
* StrictModes: 로그인을 허용하기 전에 사용자 홈 디렉터리에 대한 소유권 및 접근 권한을 sshd가 확인할지 결정합니다. 혹시 모를 악의적인 사용자가 숨겨 놓은 악성 코드를 찾아내기 위한 옵션입니다.
* RSAAuthentication: SSH 프로토콜 1에서 RSA 인증을 사용하는 옵션입니다. SSH 프로토콜 1은 보안 문제로 더 이상 사용하지 않으니 no로 설정하는 편이 바람직합니다.
* PubkeyAuthentication: 공개키 인증을 사용하는 옵션입니다. 아직 패스워드 인증을 사용해야 하므로 주석 처리해둡니다.
* AuthorizedKeysFile: 공개키 인증을 사용할 때 공개키를 저장할 위치를 지정합니다. 옵션이 활성화되지 않았을 때 기본값은 [사용자 홈 디렉터리]/.ssh /authorized_keys입니다.

```s
LoginGraceTime 120
PermitRootLogin no
StrictModes yes
RSAAuthentication no
PubkeyAuthentication yes
#AuthorizedKeysFile  %h/.ssh/authorized_keys
```

호스트 기반 인증 관련 설정입니다.

보안을 이유로 호스트 기반 인증은 사용하지 않는 편이 바람직합니다.

* IgnoreRhosts: 호스트 기반 인증에 사용하는 rhosts 파일들을무시할지 결정합니다.
* RhostsRSAAuthentication: rhosts에 지정한 호스트에 대한 인증을 허용합니다.
* HostbasedAuthentication: 호스트 기반 인증을 허용할지 여부를 결정합니다.

```s
IgnoreRhosts yes
RhostsRSAAuthentication no
HostbasedAuthentication no
```

* PermitEmptyPasswords: 패스워드 인증에서 빈 패스워드를 허용할지 결정합니다. 허용하지 않는 편이 바람직합니다.
* PasswordAuthentication: 패스워드 인증을 사용할지 결정합니다. 옵션이 활성화되지 않았을 때 기본값은 yes로 지금 상태는 패스워드 인증을 허용합니다.

```s
PermitEmptyPasswords no
#PasswordAuthentication yes
```

* X11 Forwarding: SSH를 이용한 X 윈도(X Window) 시스템(X11) 포워딩을 허용하는 옵션입니다. 서버의 X 윈도 시스템 환경을 SSH를 통해 클라이언트에서 실행하는 기능인데, 보안을 생각한다면 사용하지 않는 기능은 해제하는 편이 낫습니다. no로 설정합니다.

설정 파일을 저장하고 편집기를 종료합니다.

```s
X11Forwarding no
```

변경한 내용을 반영하기 위해 ssh 서비스를 재시작합니다.

```s
administrator@server01:~$ sudo service ssh restart
ssh stop/waiting
ssh start/running process 2216
```

보안을 유지해야 하는 만큼 SSH 서버를 운영하는 게스트의 방화벽 기능을 활성화합니다.

```s
administrator@server01:~$ sudo ufw enable
```

sshd에 대한 접속 요청은 포트 22번을 통해 전달됩니다.

22번 포트를 개방하고 방화벽 설정 상태를 확인합니다.

```s
administrator@server01:~$ sudo ufw allow 22
administrator@server01:~$ sudo ufw status
Status: active

To           Action       From
--           ------       ----
22           ALLOW        Anywhere
22           (v6)         ALLOW Anywhere (v6)
```

#### ssh 활용하기

호스트에서 SSH 서버로 접속해봅시다.

SSH 클라이언트 프로그램인 ssh는 우분투 리눅스에 기본적으로 설치되어 있습니다.

`ssh [사용자 계정]@[서버 주소]` 또는 `ssh -l [사용자 계정] [서버 주소]` 형식으로 사용합니다.

접속 대상이 처음 접속하는 서버인 경우 접속을 진행할지 묻습니다.

yes를 입력하고 접속하려는 사용자 계정의 패스워드 password를 입력합니다.

명령 프롬프트가 바뀐 것으로 SSH 서버인 server01에 접속한 사실을 알 수 있습니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
The authenticity of host '192.168.122.201 (192.168.122.201)' can\'t be
established.
ECDSA key fingerprint is
d9:ca:30:2b:6c:80:7a:41:ac:07:7e:ec:f2:ec:af:57.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.122.201' (ECDSA) to the list of
known hosts.
administrator@192.168.122.201\'s password: ********
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic i686)
...
Last login: Mon Oct 27 21:58:26 2014
administrator@server01:~$
```

- - -

**이렇게 하세요!**

SSH 서버는 접속을 시도하는 호스트의 키 지문(key fingerprint)을 저장합니다.

기본적으로 ECDSA 방식의 암호화 기술을 사용하기 때문에 호스트 공개키는 /etc/ssh/ssh_host_ecdsa_key.pub에 저장됩니다.

ssh-keygen 명령으로 호스트 키 지문을 확인할 수 있습니다.

administrator@server001:~$ ssh-keygen -lf /etc/ssh/ssh_host_ecdsa_key.pub
256 d9:ca:30:2b:6c:80:7a:41:ac:07:7e:ec:f2:ec:af:57 root@server01 (ECDSA)

- - -

접속이 이루어진 다음 SSH 서버에서 lsof 명령을 실행해서 네트워크 연결 여부를 살펴봅시다.

SSH 서버 192.168.122.201:22와 SSH 클라이언트 losttemple(192.168.122.1):41561(임의의 포트 번호) 사이에 연결(ESTABLISHED) 상태를 확인할 수 있습니다.

```s
administrator@server01:~$ sudo lsof -i
COMMAND  PID         USER      FD  TYPE  DEVICE  SIZE/OFF  NODE NAME
sshd   2134          root      3u  IPv4  13548   0t0 TCP   192.168.122.201:ssh->losttemple:41561 (ESTABLISHED)
sshd   2182 administrator      3u  IPv4  13548   0t0 TCP   192.168.122.201:ssh->losttemple:41561 (ESTABLISHED)
sshd   2655          root      3u  IPv4  14499   0t0 TCP   *:ssh (LISTEN)
sshd   2655          root      4u  IPv6  14501   0t0 TCP   *:ssh (LISTEN)
```

텔넷과 마찬가지로 SSH 세션을 중단하려면 exit 명령을 내립니다. 프롬프트의 호스트 이름도 원래대로 돌아옵니다.

```s
administrator@server01:~$ exit
logout
Connection to server01 closed.
shinjaehun@losttemple:~$
```

- - -

**이렇게 하세요!**

‘SSH 서버 설치하기’에서 살펴봤듯이 어떤 이유로 sshd가 기본 포트 번호인 22가 아닌 다른 포트에서 운영될 수 있습니다.

이럴 때는 접속하는 쪽에서 해당 포트로 접속 요청을 해야 하는데 -p 옵션을 사용합니다.

sshd가 1022 포트에서 접속 요청을 기다리고 있으면 다음과 같이 ssh로 접속합니다.

shinjaehun@losttemple:~$ ssh administrator@192.168.122.201 -p 1022

- - -

ssh로 원격에서 수행할 명령을 바로 입력할 수도 있습니다.

`ssh [사용자 계정]@[서버 주소] [서버에서 수행할 명령]` 형식으로 입력합니다.

다음 명령을 실행하면 server01에 접속하여 하드디스크 상태를 보여주는 df -h 명령을 실행하고 다시 원래 호스트로 돌아옵니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201 df -h
administrator@192.168.122.201\'s password: ********
Filesystem  Size   Used  Avail Use%   Mounted on
/dev/vda2   7.9G  1014M   6.5G   14%  /
none        4.0K      0   4.0K    0%  /sys/fs/cgroup
udev        492M          4.0K  492M  1%  /dev
tmpfs       101M          336K  100M  1%  /run
none        5.0M      0   5.0M    0%  /run/lock
none        501M      0   501M    0%  /run/shm
none        100M      0   100M    0%  /run/user
```

scp는 ssh를 통해 원격으로 파일을 복사하는 명령입니다.

`scp [원본 파일 경로] [복사할 파일 경로]` 형태로 입력합니다.

원본이나 복사할 파일의 원격 시스템 경로는 `[사용자 계정]@[서버 주소]:[파일 경로]`가 되어야 합니다.

다음 명령을 실행하면 현재 디렉터리에 있는 ‘test_ssh_client’ 파일을 server01으로 전송하고 /tmp 디렉터리로 복사할 것입니다.

```s
shinjaehun@losttemple:~$ touch test_ssh_client
shinjaehun@losttemple:~$ scp test_ssh_client administrator@192.168.122.201:/tmp/
administrator@server01\'s password: ********
test_ssh_client                            100%   17    0.0KB/s    00:00
```

파일이 제대로 복사되었는지 server01의 /tmp 디렉터리에서 확인합니다.

```s
administrator@server01:~$ ls /tmp
test_ssh_client
```

이번에는 SSH 서버에 존재하는 파일을 현재 디렉터리로 복사해봅시다.

테스트를 위해 SSH 서버에 ‘test_ssh_server’ 파일을 생성합니다.

```s
administrator@server01:~$ touch test_ssh_server
```

다음 명령은 server01의 홈 디렉터리에 있는 ‘test_ssh_server’ 파일을 현재 디렉터리(.)로 복사할 것입니다.

파일을 제대로 복사해왔는지 확인합니다.

```s
shinjaehun@losttemple:~$ scp administrator@192.168.122.201:test_ssh_server .
administrator@server01\'s password: ********
test_ssh_server                             100%   13    0.0KB/s    00:00
shinjaehun@losttemple:~$ ls
test_ssh_server
```

- - -

**Q** scp 명령에 대해 더 알려주세요.

**A** scp에서 자주 사용하는 옵션을 소개합니다.

-p 옵션은 원본과 사본의 타임스탬프(최종 수정 시각, 최종 접근 시각)와 허가권을 동일하게 유지합니다.

다음과 같이 파일을 복사하면 원본의 타임스탬프와 허가권이 복사할 원격 시스템에 동일하게 설정됩니다.

```s
shinjaehun@losttemple:~$ scp -p test_ssh administrator@192.168.122.201:/tmp/
```

-P 옵션으로 포트 번호를 지정합니다.

앞에서 살펴본 것처럼 sshd가 22번이 아닌 다른 포트번호로 운영된다면 -P 옵션으로 해당 포트 번호를 지정해야 합니다.

sshd가 1024 포트 번호로 운영된다면 다음과 같이 파일을 전송합니다.

```s
shinjaehun@losttemple:~$ scp -P 1024 test_ssh administrator@192.168.122.201:/tmp/
```

-r 옵션은 디렉터리를 복사할 때 유용한 옵션입니다. 하위 디렉터리에 포함되어 있는 파일을 모두 복사합니다. 다음과 같이 입력하면 .ssh 디렉터리를 통째로 복사할 원격 시스템의 /tmp 디렉터리로 전송할 것입니다.

shinjaehun@losttemple:~$ scp -r .ssh administrator@192.168.122.201:/tmp/

- - -

### 공개키 인증으로 시스템 보안 유지하기

네트워크로 전송하는 자료를 암호화하기 때문에 SSH는 완벽하게 안전하다고 장담할 수 있을까요?

보안을 위협하는 취약점은 어디든 존재하는 법입니다.

보안을 유지하기 위한 SSH의 공개키 사용자 인증 시스템을 소개합니다.

#### 공개키를 이용한 사용자 인증

SSH 패스워드 인증 과정에서 사용자 이름과 패스워드가 함께 전송되는 사실은 여전히 불안합니다.

앞서 SSH 통신 과정에서 악의적인 사용자가 자료를 가로채더라도 암호화되어 있기 때문에 쉽게 복원하기는 어렵다고 설명했습니다.

하지만, 악의적인 목적으로 수단과 방법을 가리지 않는다면 언젠가 자료를 복원해낼지도 모릅니다.

예를 들어 무작위로 생성한 패스워드를 대입해보는 무차별 공격은 어떨까요?

SSH 서버의 패스워드가 예측하기 쉬운 단순한 패스워드라면 이런 공격에 뚫릴 가능성이 높습니다.

이처럼 사용자 이름과 패스워드가 노출될 가능성이 있는 이상 안전을 장담하기는 어렵습니다.

SSH는 네트워크 전송 과정에 패스워드가 노출되는 위험을 막기 위하여

패스워드 대신 공개키(public key)와 개인키(private key)라는 한 쌍의 키 조합을 사용 하여

원격 접속 여부를 결정하는 사용자 인증 기능을 제공합니다.

공개키는 외부에 알려지는 키로 접속 대상 서버에 존재해야 합니다.

개인키는 접속하려는 클라이언트에 존재해야 하며 함부로 유출되어서는 안 됩니다.

개인키에 대한 보안 유지가 공개키 사용자 인증 시스템의 핵심입니다.

공개키와 개인키 조합은 유일하며 두 키가 결합했을 때 사용자 인증을 통과합니다.

만일 네트워크로 전송되는 자료를 가로챘다고 해도 자료를 복원하기 위한 공개키와 개인키가 모두 존재하지 않으면 무용지물입니다.

최악의 경우 개인키를 도난당하더라도 개인키를 활성화시키는 패스구문을 알지 못하면 사용자 인증을 통과할 수 없습니다.

- - -

Tip

패스구문(passphrase)은 로그인에 사용하는 패스워드(password)가 아니라

공개키, 개인키를 생성할 때 입력하는 또 다른 형태의 비밀번호입니다.

개인키를 활성화할 때 패스구문을 입력하도록 설정할 수 있습니다.

- - -

그림 6-6의 공개키와 개인키를 이용한 사용자 인증 과정을 한 단계씩 살펴봅시다.

▼ 그림 6-6 SSH 공개키 개인키 인증
![ ](/img/06/06.jpg)

1. 사용자가 ssh로 사용자 이름을 입력해서 sshd에 접속 요청합니다. 이 과정에서 ssh는 sshd에 공개키를 요구합니다.
2. sshd는 요구한 공개키를 찾고 검색 결과를 ssh에 알리며 개인키를 요구합니다.
3. 응답을 받은 ssh는 공개키에 해당하는 개인키를 찾습니다. 만일 개인키를 활성화하기 위해 패스구문(passphrase)이 필요하면 사용자에게 요구합니다.
4. 사용자가 패스구문을 입력하면 ssh는 sshd에 개인키를 찾았다고 응답합니다.
5. sshd가 ssh의 접속을 승인합니다.

인증 과정에서 패스워드나 개인키 자체를 전송하지는 않기 때문에 공개키 인증이 패스워드 인증보다 안전하다는 사실을 알 수 있습니다.

접속할 서버에 공개키를 전송해야 하고 설정 과정이 까다롭기는 하지만, 보안 유지가 필요한 시스템에서는 패스워드 인증 대신 공개키 인증을 사용하는 편이 바람직합니다.

접속 대상 시스템이 다수일 때도 공개키 인증이 유용합니다.

각 시스템마다 사용자 이름과 패스워드를 일일이 기억하는 대신 개인키 패스구문 하나만 기억해두면 안전하게 접속이 가능하기 때문입니다.

#### 공개키 인증 사용하기

먼저 접속하려는 클라이언트에서 ssh-keygen 명령으로 공개키 개인키 쌍을 생성합니다.

키를 저장할 경로를 결정하고 패스구문을 입력합니다.

Enter 누르면 기본 경로 /home/administrator/.ssh로 개인키 id_rsa와 공개키 id_rsa.pub가 생성됩니다.

패스구문을 입력하지 않으면 별도로 패스구문을 묻는 과정이 생략될 것입니다.

보안 유지가 필요한 시스템에서는 패스구문을 입력하기 바랍니다.

```s
hinjaehun@losttemple:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/shinjaehun/.ssh/id_rsa):
Enter passphrase (empty for no passphrase): ********
Enter same passphrase again: ********
Your identification has been saved in /home/shinjaehun/.ssh/id_rsa.
Your public key has been saved in /home/shinjaehun/.ssh/id_rsa.pub.
The key fingerprint is:
60:e4:28:e4:29:12:38:a7:0b:f8:5d:18:da:f8:d9:a3 shinjaehun@losttemple
The key\'s randomart image is:
+--[ RSA 2048]----+
|o .   .          |
|o+...+           |
|++++.o+          |
|=.o.o...         |
|.o o + S         |
|. . + o          |
| . .             |
| E               |
|                 |
+-----------------+
```

공개키, 개인키가 만들어졌습니다.

이제 접속 대상 시스템에 공개키를 전송해야 합니다.

여러 방법이 있습니다만 우분투에서는 ssh-copy-id 명령으로 이 과정을 쉽게 처리할 수 있습니다.

`ssh-copy-id [사용자 계정]@[접속 대상 서버]` 형식으로 공개키를 전송할 대상을 지정합니다.

아직 패스워드 인증으로 SSH 서버를 운영하고 있으므로 ssh-copy-id 명령을 실행할 때 접속 대상 서버의 사용자 이름과 패스워드 입력이 필요합니다.

공개키가 접속할 서버의 사용자 홈 디렉터리로 복사됩니다(/home/administrator/.ssh/authorized_keys).

```s
shinjaehun@losttemple:~$ ssh-copy-id administrator@192.168.122.201
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any
that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now  
it is to install the new keys
administrator@192.168.122.201\'s password: ********

Number of key(s) added: 1

Now try logging into the machine, with: "ssh 'administrator@192.168.122.201'"
and check to make sure that only the key(s) you wanted were added.
```

- - -

이렇게 하세요!
ssh-copy-id 명령이 처리하는 과정은 다음과 같습니다.

1. 접속 대상 서버의 사용자 홈 디렉터리(/home/administrator)에 .ssh 디렉터리를 만듭니다.
2. .ssh 디렉터리의 허가권을 0700으로 설정합니다.
3. scp 명령을 사용해서 공개키를 생성한 디렉터리에 authorized_keys라는 이름으로 복사합니다.

원리를 이해한다면 ssh-copy-id 대신 직접 다음과 같이 명령을 실행해서 공개키를 전송할 수 있습니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201 "mkdir .ssh"
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201 "chmod 0700 .ssh"
shinjaehun@losttemple:~$ scp .ssh/id_rsa.pub administrator@192.168.122.201:.ssh/authorize
```

- - -

이제 SSH 서버 설정 파일을 편집기로 열어서 패스워드 인증 기능을 해제하고 공개키 인증을 활성화합니다.

```s
administrator@server01:~$ sudo vi /etc/ssh/sshd_config
```

공개키 인증 기능을 사용하기 위해 PubkeyAuthentication의 값은 yes여야 합니다.

AuthorizedKeysFile 옵션은 활성화되지 않더라도 기본값으로 클라이언트의 공개키를 `[사용자 홈 디렉터리]/.ssh/authorized_keys`로 저장합니다.

```s
PubkeyAuthentication yes
#AuthorizedKeysFile      %h/.ssh/authorized_keys
```

패스워드 인증 기능을 해제합니다.

PasswordAuthentication 옵션을 주석 해제하고 값을 no로 변경합니다.

설정 파일을 저장하고 프롬프트로 나갑니다.

```s
PasswordAuthentication no
```

변경된 설정 파일을 적용하기 위해 ssh 서비스를 재시작합니다.

```s
administrator@server01:~$ sudo service ssh restart
```

ssh 명령으로 SSH 서버에 접속해보겠습니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
```

‘Unlock private key’ 창이 뜨면 여기에서 묻는 ‘암호’는 administrator 계정의 패스워드가 아니라 잠겨있는 개인키를 활성화하기 위한 패스구문(passphrase)입니다.

SSH 키를 생성할 때 설정했던 패스구문을 입력해야 합니다.

▼ 그림 6-7 암호에 패스구문을 입력
![ ](/img/06/07.jpg)

- - -

Tip

만약 ssh-keygen으로 키를 생성하는 과정에서 패스구문을 입력하지 않았다면 Unlock private key 창은 나타나지 않습니다.

패스구문에 대해서는 ‘공개키를 이용한 사용자 인증’에서 설명했습니다.

- - -

올바른 패스구문을 입력하면 SSH 서버 접속에 성공합니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic i686)
...
Last login: Mon Oct 27 22:48:24 2014 from losttemple
administrator@server01:~$
```

- - -

이렇게 하세요!

만일 문제가 발생한다면 공개키와 개인키가 저장된 ~/.ssh 디렉터리의 소유권과 허가권을 확인해볼 필요가 있습니다.

개인키인 id_rsa는 허가권이 0600, 다른 파일은 0655 이상이어야 합니다.

- - -

Q 원격 호스트의 인증서가 변경되었다는 오류 메시지, 해킹 당한 건가요?

A 게스트에 접속하는 과정에서 다음과 같은 오류 메시지가 나타났습니다. 경고 메시지가 무시무시하네요. 접속 대상 호스트의 ECDSA 호스트 키값이 변경되었기 때문에 발생하는 문제입니다. 접속 기록은 남아 있는데 서버를 재설치해서 접속 대상의 호스트 키가 변경되면 이런 오류 메시지가 나타납니다. 생각보다 심각한 오류는 아니랍니다.

```s
shinjaehun@losttemple:~$ ssh administrator@vm01.linuxmaster.com
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!              @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle
attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
bf:e3:d3:21:c4:3c:60:cd:d9:2b:bb:a4:d1:6e:1f:df.
Please contact your system administrator.
Add correct host key in /home/shinjaehun/.ssh/known_hosts to get rid of
this message.
Offending ECDSA key in /home/shinjaehun/.ssh/known_hosts:8
  remove with: ssh-keygen -f "/home/shinjaehun/.ssh/known_hosts" -R
vm01.linuxmaster.com
ECDSA host key for vm01.linuxmaster.com has changed and you have
requested strict checking.
Host key verification failed.
```

ssh-keygen 명령의 -R 옵션으로 시스템에 남아 있는 기존 호스트 키를 삭제해서 문제를 해결할 수 있습니다.

```s
shinjaehun@losttemple:~$ ssh-keygen -R administrator@vm01.linuxmaster.com
# Host vm01.linuxmaster.com found: line 8 type ECDSA
/home/shinjaehun/.ssh/known_hosts updated.
Original contents retained as /home/shinjaehun/.ssh/known_hosts.old
다시 접속을 시도하면 호스트 키가 새로 생성되어 접속할 수 있는 상태가 됩니다.

shinjaehun@losttemple:~$ ssh administrator@vm01.linuxmaster.com
The authenticity of host 'vm01.linuxmaster.com (192.168.122.11)' can\'t
be established.

ECDSA key fingerprint is
bf:e3:d3:21:c4:3c:60:cd:d9:2b:bb:a4:d1:6e:1f:df.

Are you sure you want to continue connecting (yes/no)? yes
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-39-generic i686)

 * Documentation: https://help.ubuntu.com/
```

이렇게 했는데도 계속 문제가 발생한다면 호스트 키를 저장해둔 파일, `[사용자 홈 디렉터리]/.ssh/known_hosts`를 삭제해서 다시 접속해보기 바랍니다.

- - -

### 에이전트로 개인키 관리를 편리하게

가상 시스템에서 ssh를 가지고 실습하다보면 여러 개의 ssh 서버에 접속하는 과정에서 문제가 발견될 수 있습니다.

예를 들어 호스트에서 server01과 server02로 동일한 개인키로 접속이 가능해도 server01에서 server02로 직접 ssh 연결은 불가능합니다.

server01에는 개인키가 존재하지 않기 때문입니다.

그렇다면 여러 시스템을 효과적으로 관리하기 위해 각 시스템마다 개인키를 저장해둬야 하는 것일까요?

개인키를 아무데나 배포해서는 “절대!” 안 됩니다.

#### ssh-agent를 이용한 공개키 인증 과정

개인키 관리를 ssh-agent에 맡기면 유용합니다.

에이전트에 개인키를 저장해두면 네트워크를 경유하는 시스템에 일일이 개인키를 복사하지 않고서 ssh 연결을 할 수 있습니다.

ssh-agent가 개인키를 처리한다는 차이가 있을 뿐 공개키 인증 과정 자체는 동일합니다(그림 6-8).

인증 과정에서 패스워드나 개인키를 전송하지도 않습니다.

▼ 그림 6-8 ssh-agent를 이용한 공개키 인증 과정
![ ](/img/06/08.jpg)

1. 사용자가 ssh로 사용자 이름을 입력하면 공개키를 요구하며 sshd에 접속 요청합니다.
2. sshd는 요구한 공개키를 찾고 검색 결과를 ssh에 알리며 개인키를 요구합니다.
3. ssh는 개인키 요청을 에이전트로 전달합니다. ssh 대신 에이전트가 개인키를 찾습니다. 개인키를 활성화하기 위해 패스구문(passphrase)이 필요하면 사용자에게 요구합니다.
4. 사용자가 패스구문을 입력하면 에이전트가 ssh에, ssh는 sshd에 개인키를 찾았다고 응답합니다.
5. sshd가 ssh의 접속을 승인합니다.

#### ssh-agent를 이용해서 여러 SSH 서버 접속하기

ssh-agent를 이용해서 여러 SSH 서버를 경유해서 접속해봅시다.

호스트에서 server01을 거쳐 server02에 접속해보겠습니다.

이를 위해 server02에도 SSH 서버를 설치해야 하며 개인키도 전송해둬야 합니다.

▼ 그림 6-9 여러 SSH 서버 접속
![ ](/img/06/09.jpg)

virt-clone을 이용해서 실습에 사용할 게스트 server02를 생성합니다.

생성이 끝나면 server02를 시작해서 로그인하고, 5장의 ‘실습에 사용할 게스트 준비하기’를 참고하여 네트워크 환경을 설정합니다.

```s
shinjaehun@losttemple:~$ sudo virt-clone --original guest \
> --name server02 \
> --file /home/shinjaehun/virtual_machines/server02.img
```

- - -

Tip

IP 주소는 192.168.122.202, 호스트 이름은 server02로 설정합니다.

- - -

server02에도 SSH 서버를 설치해둡니다.

```s
administrator@server02:~$ sudo apt-get update
administrator@server02:~$ sudo apt-get install openssh-server
```

호스트의 공개키를 SSH 서버인 server02(192.168.122.202)로 전송합니다.

```s
shinjaehun@losttemple:~/.ssh$ ssh-copy-id administrator@192.168.122.202
...
administrator@192.168.122.202's password: ********
```

패스워드 인증 대신 server02의 공개키 인증을 활성화시켜야 합니다.

server02에 로그인해서 SSH 서버 설정 파일 /etc/ssh/sshd_config를 수정하고 저장합니다.

```s
PubkeyAuthentication yes
#AuthorizedKeysFile      %h/.ssh/authorized_keys
PasswordAuthentication no
```

- - -

Tip
SSH 서버의 보안을 위해 ‘SSH 서버 설치하기’를 참고하여 필요한 옵션을 수정합니다.

- - -

SSH 서버를 다시 시작해서 변경한 설정 내용을 반영합니다.

```bsah
administrator@server02:~$ sudo service ssh restart
```

호스트에서 server02로 접속 가능 여부를 테스트해봅니다.

앞에서 패스구문을 한 번 입력했기 때문에 다시 입력하지 않아도 바로 접속될 수도 있습니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.202
```

하지만, 호스트에서 server01에 접속한 다음 바로 server02로 접속하려니 접속이 제한됩니다.

앞서 언급했듯이 server01에는 개인키가 존재하지 않기 때문입니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
administrator@server01:~$ ssh administrator@192.168.122.202
Permission denied (publickey).
```

ssh-agent를 사용할 차례입니다.

여기에서는 ssh-agent를 직접 제어하는 대신 로그인 세션 동안 ssh-agent가 유지되도록 관리하는 도구인 keychain을 이용해서 개인키를 ssh-agent에 등록해서 사용합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get install keychain
```

ssh-add로 개인키를 ssh-agent에 등록합니다.

개인키에 패스구문이 설정되어 있다면 이 과정에서 입력해야 합니다.

```s
shinjaehun@losttemple:~$ keychain ~/.ssh/id_rsa

* keychain 2.7.1 ~ http://www.funtoo.org
* Starting ssh-agent...
* Adding 1 ssh key(s): /home/shinjaehun/.ssh/id_rsa
Enter passphrase for /home/shinjaehun/.ssh/id_rsa: ********
* ssh-add: Identities added: /home/shinjaehun/.ssh/id_rsa
```

이제 에이전트에 등록되어 있는 개인키를 사용할 수 있는 상태입니다.

ssh로 server01에 연결된 상태에서 server02로 바로 접속이 될 것입니다.

ssh 연결 과정에서 -A 옵션을 추가했는데 이렇게 해야 ssh가 에이전트를 포워딩합니다.

호스트의 개인키를 server01과 server02에 전달해줄 것입니다.

```s
shinjaehun@losttemple:~$ ssh -A administrator@192.168.122.201
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic i686)
...
administrator@server01:~$ ssh -A administrator@192.168.122.202
Welcome to Ubuntu 14.04.1 LTS (GNU/Linux 3.13.0-32-generic i686)
...
administrator@server02:~$
```

- - -

Tip
만일 -A 옵션 없이 server01을 거쳐 server02로 연결을 시도하면 실패할 것입니다.

호스트의 개인키가 전달되지 않기 때문입니다.

- - -

에이전트를 포워딩해서 마치 로컬 시스템에서 파일을 옮기듯 다음과 같이 네트워크를 거쳐 파일을 전달할 수 있습니다.

다음 명령은 server01(192.168.122.201) 홈 디렉터리에 존재하는 ‘test_ssh_forward’ 파일을 server02(192.168.122.202)의 /tmp 디렉터리로 복사할 것입니다.

유감스럽게도 scp에는 -A 같은 옵션이 없기 때문에 포워딩 옵션을 -o ForwardAgent=yes로 입력해야 합니다.

```s
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201 "touch test_ssh_forward"
shinjaehun@losttemple:~$ scp -o ForwardAgent=yes administrator@192.168.122.201:test_ssh_forward administrator@192.168.122.202:/tmp/
```

- - -

**Q** keychain 없이 ssh-agent를 사용하려면 어떻게 해야 하나요?

**A** 시스템 관리를 자동화하는 과정에서 다음 몇 가지 원칙은 기억해둘 필요가 있습니다.

keychain은 매우 편리한 도구입니다.

만일 keychain이 없다면 ssh-agent를 백그라운드로 실행시키고 개인키를 등록해서 사용해야 합니다.

eval 명령으로 ssh-agent를 백그라운드로 실행시킵니다.

이렇게 해야 복잡하게 환경변수를 일일이 넘기는 수고를 덜 수 있습니다.

ssh-agent를 둘러싸는 기호는 키보드 자판 1 왼쪽에 위치한 역따옴표(Backquote)입니다.

```s
shinjaehun@losttemple:~$ eval `ssh-agent`
Agent pid 5028
```

ssh-add로 개인키를 ssh-agent에 등록합니다.

개인키에 패스구문이 설정되어 있다면 여기에서 입력해야 합니다.

```s
shinjaehun@losttemple:~$ ssh-add
Enter passphrase for /home/shinjaehun/.ssh/id_rsa: ********
Identity added: /home/shinjaehun/.ssh/id_rsa (/home/shinjaehun/.ssh/id_rsa)
```

- - -

### 초보 시스템 관리자의 일기 | 병렬 ssh를 이용해서 여러 시스템에 ssh 명령 전달하기

직접 콘솔 앞에서 작업하기보다 ssh 원격 접속이 편리하기는 하지만, 여러 시스템을 대상으로 하는 작업은 여전히 머리 아픈 일이다.

이러니 50대의 리눅스 시스템에 일일이 ssh로 접속해서 ls 명령을 내려야 한다면 얼마나 끔찍할까.

파일 하나를 50대의 시스템에 전송하기 위해 scp 명령을 50번 입력해야 한다니! 으악!

그래서 셸 스크립트를 만들어봤는데… 생각보다 선배의 반응이 신통치 않다.

```s
#!/bin/bash

ssh host1 'command1'
ssh host1 'command2'
ssh host2 'command3'
```

‘바퀴를 다시 발명할 필요는 없다’는 말처럼 오늘 선배가 소개해준 병렬 ssh는 시스템 관리를 쉽게 만들어주는 유용한 도구임에 틀림없다.

뭐 기본적인 아이디어는 간단하다.

병렬 ssh는 단 한 번의 입력만으로 여러 SSH 서버에 같은 명령을 실행하고 그 결과를 화면에 출력하거나 파일로 저장해준다.

특히 다음과 같은 상황에서 유용하게 사용할 수 있다.

• 여러 SSH 서버에 동일한 명령을 실행할 때

• 여러 SSH 서버에 같은 파일을 배포할 때

• 여러 SSH 서버에서 같은 파일을 받아올 때

여러 SSH 서버를 대상으로 한다는 점을 기억하자.

특히 모든 SSH 서버가 공개키 인증을 사용하고 있어야 매번 로그인 패스워드를 입력하는 수고를 덜 수 있다.

호스트에서 server01과 server02의 SSH 서버를 대상으로 병렬 ssh를 사용하여 동시에 명령을 실행한다.

각 게스트에는 SSH 서버가 설치되어 있어야 하며 호스트 losttemple의 개인키를 보관하고 있어야 한다.
(아직 준비가 되어 있지 않다면 ‘SSH 서버 설치하기’를 참고해서 SSH 서버를 준비하고 ‘공개키 인증 사용하기’를 참고해서 개인키를 전송하자).

▼ 그림 6-10 병렬 ssh를 사용해서 시스템 제어하기
![ ](img/06/10.jpg)

병렬 ssh인 pssh 패키지를 설치한다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
shinjaehun@losttemple:~$ sudo apt-get install pssh
```

여러 SSH 서버에 동일한 명령을 실행하는 도구는 parallel-ssh이다.

`parallel-ssh [옵션] [호스트] [수행할 명령]` 형식으로 명령을 실행한다.

다음 명령은 server01에 uptime 명령을 실행할 것이다.

-H로 대상 호스트를 지정하고 -l로 명령을 실행할 사용자를 지정한다.

-i는 결과를 화면에 출력하는 옵션이다.

참고로 uptime은 시스템을 시작한 이후 지금까지의 시간을 알려주는 명령이다.

명령을 실행하면 개인키의 패스구문을 요구할 것이다.

패스구문을 입력하고 나면 바로 아래 실행 결과가 나타날 것이다.

```s
shinjaehun@losttemple:~$ parallel-ssh -H 192.168.122.201 -l administrator -i uptime
[1] 15:51:44 [SUCCESS] 192.168.122.201
15:51:44 up 1 min, 0 users, load average: 0.08, 0.07, 0.03
```

-H와 -l로 호스트와 사용자를 분리하지 않고 `-H [사용자]@[호스트]` 형식으로 입력해도 결과는 같다.

```s
shinjaehun@losttemple:~$ parallel-ssh -H administrator@192.168.122.201 -i uptime
```

공백을 넣어서 여러 호스트를 대상으로 명령을 실행할 수 있다.

server01(192.168.122.201)과 server02(192.168.122.202)를 대상으로 uptime 결과가 화면에 표시된다.

```s
shinjaehun@losttemple:~$ parallel-ssh -H "192.168.122.201 192.168.122.202" -l administrator -i uptime
[1] 15:52:35 [SUCCESS] 192.168.122.201
15:52:35 up 2 min, 0 users, load average: 0.03, 0.06, 0.03
[2] 15:52:36 [SUCCESS] 192.168.122.202
15:52:36 up 2 min, 0 users, load average: 0.03, 0.05, 0.03
```

이렇게 일일이 호스트를 적어서 명령을 실행하는 게 여러모로 불편하다.

오타가 발생할 수도 있고 셸에서 한 번에 입력할 수 있는 텍스트 수도 제한되어 있기 때문이다.

병렬 ssh는 대상 호스트를 별도로 파일에 저장해서 명령을 실행하는 기능을 제공한다.

nodes라는 파일을 생성해보자.

```s
shinjaehun@losttemple:~$ vi nodes
```

IP 주소, 도메인 주소, 호스트 이름 모두 사용 가능하다. 여기에서는 IP 주소를 입력했다.

```s
192.168.122.201
192.168.122.202
```

-h 옵션으로 대상 호스트를 적어둔 파일 nodes를 지정해서 명령을 실행할 수 있다.

```s
shinjaehun@losttemple:~$ parallel-ssh -h nodes -l administrator -i uptime
```

출력량이 한 화면을 넘어서 보기 어려운 명령이라면 결과를 파일로 저장하자.

-o 옵션 뒤에 결과를 저장할 디렉터리를 입력한다.

```s
shinjaehun@losttemple:~$ parallel-ssh -h nodes -l administrator -o result 'tail /var/log/syslog'
```

하위 디렉터리 result에 각 호스트를 대상으로 한 명령 결과가 파일로 저장되어 있다.

```s
shinjaehun@losttemple:~$ cat result/192.168.122.201
Oct 28 15:49:53 server01 acpid: 1 rule loaded
Oct 28 15:49:53 server01 acpid: waiting for events: event logging is off
Oct 28 15:49:53 server01 cron[819]: (CRON) INFO (pidfile fd = 3)
Oct 28 15:49:53 server01 cron[882]: (CRON) STARTUP (fork ok)
Oct 28 15:49:53 server01 cron[882]: (CRON) INFO (Running @reboot jobs)
Oct 28 15:49:54 server01 /usr/sbin/irqbalance: Balancing is ineffective on systems with 
a single cache domain. Shutting down
Oct 28 15:50:01 server01 ntpdate[684]: step time server 91.189.94.4 offset 1.142743 sec
Oct 28 15:50:16 server01 ntpdate[1007]: adjust time server 91.189.94.4 offset -0.000136 
sec
Oct 28 15:51:26 server01 kernel: [ 100.800246] random: nonblocking pool is initialized
Oct 28 16:17:01 server01 CRON[1507]: (root) CMD ( cd / && run-parts --report /etc/
cron.hourly)
```

여러 SSH 서버를 대상으로 파일을 배포하는 도구는 parallel-scp이다.

`parallel-scp [옵션] -h [호스트] [전송할 파일] [저장할 위치]` 형식으로 입력한다.

다음 명령은 test_parallel 파일을 nodes에 정의된 대상 호스트의 /tmp 디렉터리에 전송할 것이다.

```s
shinjaehun@losttemple:~$ touch test_parallel
shinjaehun@losttemple:~$ parallel-scp -h nodes -l administrator test_parallel /tmp/
[1] 17:33:50 [SUCCESS] 192.168.122.202
[2] 17:33:50 [SUCCESS] 192.168.122.201
```

SSH 서버에 접속해서 /tmp 디렉터리를 확인해보자. 파일이 성공적으로 전송되었다.

```s
administrator@server01:~$ ls -l /tmp/test_parallel
-rw-rw-r-- 1 administrator administrator 0 Oct 28 17:33 /tmp/test_parallel
```

반대로 여러 SSH 서버에 존재하는 파일을 한 번에 받아오는 것도 가능하다.

parallel-slurp를 사용하는데 `parallel-slurp [옵션] -h [호스트] -L [받아올 파일] [저장할 위치]` 형식으로 입력한다.

다음 명령은 nodes에 정의된 대상 호스트의 hostname 파일들을 받아와서 local_dir이라는 디렉터리에 저장할 것이다.

```s
shinjaehun@losttemple:~$ parallel-slurp -h nodes -l administrator -L local_dir /etc/hostname .

```

local_dir에 각 호스트에 해당하는 하위 디렉터리가 자동으로 생성되고 hostname 파일이 저장되었다.

```s
shinjaehun@losttemple:~$ cat local_dir/192.168.122.201/hostname
server01
```

병렬 ssh가 여러모로 편리하지만, 한편으로 잘못 사용하면 전체 시스템을 망가뜨릴 수도 있으니 조심해야 한다.

아닌 게 아니라 선배도 루트 권한과 관련해서 조언을 해줬다.

병렬 ssh와 -A 옵션으로 루트 사용자의 패스워드를 입력하면 루트 권한을 사용할 수는 있다.

하지만, 보안을 위협하는 여러 문제가 존재하는데,

첫째 패스워드가 전송된다는 점,

둘째 SSH 서버에서 루트 로그인을 허용해야 한다는 점,

셋째 서버마다 루트 계정을 생성해서 로그인을 허용해야 한다는 점이 그러하다.

따라서 시스템의 상태를 확인하고 파일을 배포하는 용도로 병렬 ssh를 사용해야 하며, 시스템을 직접 제어하기에는 적합하지 않다.

병렬 ssh 대신 시스템 자동 설정 도구 퍼펫(puppet)을 사용해서 전체 시스템을 제어하는 편이 안전하고 효율적이다.

오늘은 여기까지!