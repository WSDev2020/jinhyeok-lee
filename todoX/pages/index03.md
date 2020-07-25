---
title: 우분투 시작하기
key: linux ubuntu
date: 2020-03-08
---

# 리눅스 다루기, 텍스트 환경에 익숙해지자

## 우분투 시작하기

- - -

열씨미&게을러

- - -

**열씨미** 이제 뭘 하죠?

**게을러** 뭘 하긴? 우분투를 어떻게 다루는지 익혀야지.

**열씨미** 데스크탑이야 윈도 사용하는 거랑 별반 다를 게 없어 보이는데… 뭐 더 익혀야 할 게 있나요?  
어디보자… 할 만한 게임이 여기 어디쯤 있을 것 같은데.

**게을러** 그래… 지금은 게임이든 멀티미디어 감상이든 이것저것 맘대로 해보라고.  
우분투는 익숙한 그래픽 환경을 제공하기 때문에 윈도나 맥 OS를 사용한 경험이 있다면 별 어려움 없이 사용할 수 있지… 근데 내 말 듣고는 있는 거야?

**열씨미** 뭐… 뭐라고 했어요?

**게을러** 아닐세. 자네의 게임에 대한 집중력에 높은 점수를 주도록 하지.

**열씨미** 스팀 플랫폼도 지원하고… 3D 게임도 할 수 있는 게 윈도 부럽지 않네요? 리눅스 하면 매트릭스에 나오는 시커먼 바탕에 영어로 가득 찬 화면을 기대했거든요.

**게을러** 뭐야, 화려한 그래픽 환경에 실망한거야?

**열씨미** 커피숍에서 여자 친구 기다리며 그런 화면을 띄워 놓고 있으면 다들 저를 해커쯤으로 생각하지 않을까요?

**게을러** 맙소사.

**열씨미** 무슨 문제 있어요?

**게을러** `된장녀`라는 아름다운 신조어가 후배님 같은 남성을 가리키는 말이 아니라서 매우 아쉬워하고 있는 중이야.

**열씨미** 선배님!

**게을러** 알았어. 자네가 좋아하는 `매트릭스에 나오는 시커먼 바탕에 영어로 가득 찬 화면`을 커맨드라인이라고 해. 그리고 자네가 좋아하는 해커들이 그런 환경을 선호하는 이유는 그래픽 환경으로 처리하기 어려운 복잡한 작업을 커맨드라인에서 다양한 방법으로 해결할 수 있기 때문이지.

**열씨미** 뭐 그렇다면 저도 배우지 않을 이유가 없죠. 뭐부터 시작할까요?

**게을러** `시작하고 종료하기`부터지. 연습에 연습! 마우스를 손대고 싶은 강렬한 유혹을 참으면서 커맨드라인에 익숙해지도록 노력하라고.

### 시작하기, 종료하기

어떤 시스템이든지 시스템을 어떻게 시작하고 종료하는지 가장 먼저 익혀야 합니다.

우분투를 다룰 때도 마찬가지입니다.

로그인과 로그아웃, 시스템 종료 방법을 소개합니다.

#### 로그인하기

시스템을 부팅해서 가장 먼저 하는 일은 로그인입니다.

사용자 계정과 패스워드를 입력해서 내가 누구인지 알리고 사용 허가를 받습니다.

로그인을 통해 사용자는 시스템에 접속하고 접속을 종료하기 전까지 허용된 권한으로 시스템을 사용할 수 있습니다.

우분투 데스크톱을 설치한 그래픽 환경 시스템의 로그인 화면은 다음과 같습니다.

로그인할 사용자 계정의 패스워드를 입력해서 로그인합니다.

▼ 그림 3-1 우분투 데스크탑 로그인 화면
![ ](/img/03/01.jpg)

로그인에 성공하면 데스크탑 화면이 나타날 것입니다.

우분투 그래픽 환경의 사용자 인터페이스, 유니티(Unity)입니다.

화면 왼쪽에는 프로그램의 빠른 실행을 위한 런처가 보입니다.

런처의 가장 위에는 프로그램이나 파일을 찾아 실행시킬 수 있는 대시 버튼이 있습니다.

화면 위에는 메뉴가 있으며 메뉴 오른쪽 위에는 프로그램 실행, 설정, 사용자 변경, 시스템 종료 및 재시작을 위한 시스템 메뉴 버튼이 있습니다.

윈도, 맥 OS 같은 일반적인 그래픽 환경 운영체제를 사용해봤다면 유니티에 금방 익숙해질 것입니다.

▼ 그림 3-2 유니티 기본 화면
![ ](/img/03/02.jpg)

- - -

Tip

유니티는 우분투의 그래픽 사용자 인터페이스입니다.

공교롭게도 게임 제작 도구인 3D 게임 엔진 유니티3D와 이름이 같아 혼동할 수 있는데 둘은 전혀 다른 대상입니다.

- - -

우분투 서버를 설치한 텍스트 환경에서는 콘솔에서 사용자 계정과 패스워드를 직접 입력합니다.

로그인에 성공하면 명령을 입력할 수 있는 커맨드라인 명령 프롬프트가 나타날 것입니다.

▼ 그림 3-3 우분투 서버 로그인하기
![ ](/img/03/03.jpg)

#### 로그아웃/시스템 종료하기

사용자 계정의 접속을 종료하는 과정을 로그아웃이라고 합니다.

로그아웃 후 시스템은 처음 로그인 화면으로 되돌아가 새로운 사용자의 로그인을 대기하는 상태가 됩니다.

그래픽 환경에서는 화면 오른쪽에 있는 시스템 메뉴 버튼을 클릭하고 `로그아웃`을 선택합니다.

▼ 그림 3-4 시스템 메뉴 → 로그아웃
![ ](/img/03/04.jpg)

오른쪽 `[로그아웃]`을 클릭합니다.

다시 로그인 화면으로 돌아갈 것입니다.
▼ 그림 3-5 로그아웃
![ ](/img/03/05.jpg)

텍스트 콘솔 환경에서는 logout 명령으로 로그아웃합니다.

첫 화면으로 돌아가 로그인을 기다리는 상태로 대기합니다.

```s
shinjaehun@losttemple:~$ logout
```

- - -

Tip

콘솔 환경에서는 exit 명령도 logout과 동일하게 사용됩니다.

- - -

시스템 사용이 끝나 전원을 차단하는 과정은 시스템 종료입니다.

화면 오른쪽에 있는 시스템 메뉴 버튼를 클릭하고 `컴퓨터 끄기`를 선택합니다.

▼ 그림 3-6 컴퓨터 끄기
![ ](/img/03/06.jpg)

왼쪽 버튼은 시스템을 재부팅하고 오른쪽 버튼은 시스템을 종료합니다.

▼ 그림 3-7 시스템 종료하기
![ ](/img/03/07.jpg)

#### 터미널 사용하기

우분투 데스크탑의 그래픽 환경, 유니티는 처음 우분투를 접하는 사용자도 쉽게 다룰 수 있도록 익숙하게 만들어져 있습니다.

하지만, 빠르고 효율적으로 시스템을 제어할 수 있는 텍스트 콘솔의 편리함에 비할 바가 못 됩니다.

그래픽 환경 시스템에서도 텍스트 콘솔처럼 명령어로 시스템을 제어할 수 있는 도구를 제공합니다.

이러한 프로그램을 터미널 에뮬레이터, 흔히 터미널이라고 합니다.

유니티 왼쪽에는 프로그램을 바로 실행할 수 있는 런처가 있습니다.

런처의 가장 위, 대시 홈 버튼 을 클릭하고 빈 칸에 `terminal` 또는 `터미널`이라고 입력하면 아래 프로그램 항목에 터미널이 표시 되며 이를 클릭합니다.

▼ 그림 3-8 터미널 실행하기
![ ](/img/03/08.jpg)

- - -

Tip

우분투 대시 홈은 실행할 프로그램 또는 파일을 검색해서 보여주는 도구입니다.

- - -

터미널이 실행되었습니다.

이제 커맨드라인 명령을 사용할 수 있습니다.

시스템은 사용자에게 프롬프트를 보여줘서 명령을 기다리는 상태임을 표시합니다.

실행한 터미널을 종료하려면 exit를 입력합니다.

▼ 그림 3-9 터미널 실행
![ ](/img/03/09.jpg)

한 가지 팁으로 터미널처럼 자주 사용하는 데스크탑 응용 프로그램은 런처에 등록해서 사용하면 편리합니다.

터미널 아이콘에서 마우스 오른쪽 버튼을 클릭하고 팝업 메뉴에서 `런처에 고정`을 선택합니다.

다시 터미널을 실행할 때 대시 홈에서 프로그램을 찾는 수고를 덜 수 있습니다.

▼ 그림 3-10 터미널을 런처에 고정하기
![ ](/img/03/10.jpg)

- - -

Q 명령 프롬프트에 대해 알려주세요.

A 명령 프롬프트는 커맨드라인을 통해 사용자의 입력을 받을 준비가 되었음을 알려주는 도구입니다.

프롬프트는 몇 가지 정보를 추가로 보여줍니다.

왼쪽부터 현재 로그인한 사용자 계정, 호스트 이름, 현재 작업 디렉터리, 사용자 권한을 의미합니다.

틸드(`~`)로 표시되는 현재 작업 디렉터리의 위치는 로그인한 계정의 홈 디렉터리를 나타냅니다.

사용자 계정 shinjaehun 사용자의 홈 디렉터리 /home/shinjaehun을 축약해서 나타낸 표현입니다.

사용자 권한을 의미하는 기호 `$`와 `#`는 각각 일반 사용자 권한과 루트 권한을 나타냅니다.

우분투는 기본적으로 루트 로그인을 권장하지 않기 때문에 `#` 기호는 거의 볼 일이 없을 것입니다.

▼ 그림 3-11 명령 프롬프트 구성
![ ](/img/03/11.jpg)

- - -

### 사용자 관리하기

다중 사용자 환경 운영체제인 리눅스에서 사용자는 각 계정마다 다른 권한에 따라 명령을 실행하거나 파일 또는 디렉터리에 접근할 수 있습니다.

여기에서는 시스템 관리 권한에 대해 살펴보고 다중 사용자 환경에서 각 사용자를 관리하기 위한 명령을 소개합니다.

#### 루트 권한 획득하기

시스템 관리를 위해서는 시스템을 직접 제어할 수 있도록 막강한 권한이 필요합니다.

일반 사용자 계정과 다르게 시스템 관리 권한을 가지고 있는 사용자를 수퍼유저 또는 루트 사용자라고 합니다.

일반적으로 우분투는 사용자 실수로 시스템에 돌이킬 수 없는 문제가 발생하는 사고를 방지하기 위해 루트 사용자의 로그인을 제한합니다.

대신 일반 사용자 계정에서 루트 사용자 권한이 필요한 명령을 처리할 때만 sudo(substitute user do)를 사용해서 권한을 획득합니다.

그만큼 sudo는 우분투에서 가장 많이 사용하는 명령 중 하나입니다.

apt-get update는 패키지 저장소에서 새로운 패키지 목록을 가져오는 명령으로 루트 권한을 필요로 합니다.

일반 사용자 권한으로 명령을 실행하면 다음과 같이 오류 메시지를 뿌릴 것입니다.

```s
shinjaehun@losttemple:~$ apt-get update
E: 잠금 파일 /var/lib/apt/lists/lock 파일을 열 수 없습니다 - open (13: 허가 거부)
E: /var/lib/apt/lists/ 디렉터리를 잠글 수 없습니다
E: 잠금 파일 /var/lib/dpkg/lock 파일을 열 수 없습니다 - open (13: 허가 거부)
E: 관리 디렉터리를 (/var/lib/dpkg/) 잠글 수 없습니다. 루트 사용자가 맞습니까?
```

sudo로 루트 권한을 획득해서 apt-get update 명령을 내리면 사용자 계정의 패스워드를 물어봅니다.

알맞은 패스워드를 입력하면 apt-get 명령을 정상적으로 실행하여 패키지 목록을 업데이트할 것입니다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
[sudo] password for shinjaehun: ******
```

루트 권한이 필요한 또 다른 중요한 명령은 시스템 종료입니다.

터미널에서 사용 가능한 시스템 종료 명령은 shutdown이며 shutdown `[옵션][시간]` 형식으로 입력합니다.

-h(halt, 중단) 명령을 실행한 이후 전원을 차단하는 옵션으로 now는 지금 즉시 명령을 실행합니다.

```s
shinjaehun@losttemple:~$ sudo shutdown -h now
```

shutdown 명령으로 시스템을 재부팅시킬 수도 있습니다. -r 옵션은 reboot를 의미합니다.

```s
shinjaehun@losttemple:~$ sudo shutdown -r now
```

- - -

Tip

시스템을 재부팅할 수 있는 또 다른 명령은 reboot입니다.

루트 권한으로 reboot라고 입력하면 시스템을 재부팅할 것입니다.

- - -

#### 사용자 계정 관리하기

시스템에 새로운 사용자 계정을 추가하는 명령은 useradd입니다.

역시 루트 권한을 필요로 하며 useradd `[옵션][사용자 계정]` 형식으로 입력합니다.

기본적으로 -m 옵션을 붙여 사용자 계정을 추가함과 동시에 홈 디렉터리를 함께 생성합니다.

명령을 실행한 다음 /home/gunsmoke 디렉터리를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ sudo useradd -m gunsmoke
shinjaehun@losttemple:~$ ls /home
gunsmoke lost+found root shinjaehun
```

passwd(password) 명령으로 새로운 사용자 계정의 패스워드를 설정합니다.

처음 나오는 `[sudo]` password 는 루트 권한을 얻기 위한 패스워드이며, 새로운 패스워드를 입력하고 나서 확인을 위해 다시 입력하면 됩니다.

```s
shinjaehun@losttemple:~$ sudo passwd gunsmoke
[sudo] password for shinjaehun: ******
새 UNIX 암호 입력: ********
새 UNIX 암호 재입력: ********
passwd: 암호를 성공적으로 업데이트했습니다
```

- - -

Tip

현재 로그인해 있는 계정의 비밀번호를 변경할 때는 뒤에 옵션 없이 passwd 명령만 입력합니다.

```s
shinjaehun@losttemple:~$ sudo passwd
```

- - -

reboot 명령으로 시스템을 재부팅하면 새로 추가한 사용자 계정을 선택하여 로그인할 수 있습니다.

▼ 그림 3-12 추가한 사용자 계정으로 로그인하기
![ ](/img/03/12.jpg)

사용자 계정을 삭제하는 명령은 userdel입니다.

```s
shinjaehun@losttemple:~$ sudo userdel gunsmoke
```

userdel 명령으로 계정을 삭제해도 홈 디렉터리는 남아 있습니다.

사용자 계정을 완전히 삭제하려면 홈 디렉터리까지 삭제해야 할 필요가 있습니다.

```s
shinjaehun@losttemple:~$ ls /home
gunsmoke lost+found root shinjaehun
shinjaehun@losttemple:~$ sudo rm -rf /home/gunsmoke
```

adduser를 사용하면 useradd와 passwd를 한 번에 사용하는 효과를 볼 수 있습니다.

사용자를 추가하고 홈 디렉터리를 생성하며 필요한 파일을 복사하고 패스워드를 설정한 다음 추가한 사용자의 기본적인 정보를 입력하는 과정을 거치게 됩니다.

```s
shinjaehun@losttemple:~$ sudo adduser gunsmoke

'gunsmoke' 사용자를 추가 중...
새 그룹 'gunsmoke' (1001) 추가 ...
새 사용자 'gunsmoke' (1001) 을(를) 그룹 'gunsmoke' (으)로 추가 ...
'/home/gunsmoke' 홈 디렉터리를 생성하는 중...
'/etc/skel'에서 파일들을 복사하는 중...
새 UNIX 암호 입력: ********
새 UNIX 암호 재입력: ********
passwd: 암호를 성공적으로 업데이트했습니다
gunsmoke의 사용자의 정보를 바꿉니다
새로운 값을 넣거나, 기본값을 원하시면 엔터를 치세요
   이름 []: Jaehun Shin
   방 번호 []:
   직장 전화번호 []:
   집 전화번호 []:
   기타 []: system administrator
정보가 올바릅니까? [Y/n] Y
shinjaehun@losttemple:~$
```

- - -

Tip

adduser가 useradd보다 편리하기는 하지만,

`3.3 리눅스 파일 관리하기`의 설명과 같이 사용자를 추가하는 과정에서 필요한 정보를 함께 입력하거나 기본 설정값을 변경할 때는 useradd를 사용해야 합니다.

- - -

#### sudo 권한 부여하기

sudo를 실행할 수 있는 권한은 sudo 설정 파일 /etc/sudoers에서 지정하거나 직접 부여할 수 있습니다.

/etc/sudoers 파일을 cat 명령으로 확인해봅시다.

```s
shinjaehun@losttemple:~$ sudo cat /etc/sudoers
```

설정 내용을 살펴보면 sudo를 실행할 수 있는 권한에 대한 정보를 얻을 수 있습니다.

사용자 계정 root와 그룹 admin, sudo에 속하는 사용자는 모든 명령어에 대해 sudo로 루트 권한을 얻을 수 있습니다.

```s
# User privilege specification
root    ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin  ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

su는 사용자 계정을 전환하는 명령입니다.

su `[옵션][사용자 계정]` 형식으로 입력하며 전환하려는 사용자 계정의 환경을 그대로 유지하려면 ` -`를 붙여 사용합니다.

명령을 실행하면 전환 대상 사용자의 패스워드를 입력합니다.

```s
shinjaehun@losttemple:~$ su - gunsmoke
암호: ********
```

사용자가 속해 있는 그룹을 확인하는 명령은 groups입니다.

모든 사용자는 기본적으로 사용자 계정과 같은 그룹에 속합니다.

계정을 생성할 때 자동으로 같은 이름의 그룹이 생성되기 때문입니다.

```s
gunsmoke@losttemple:~$ groups
gunsmoke
```

exit를 입력하면 세션을 종료하고 다시 원래 계정으로 돌아올 것입니다.

```s
gunsmoke@losttemple:~$ exit
로그아웃
```

새로 추가한 사용자 계정과 달리 우분투를 설치하면서 생성한 사용자는 다양한 시스템 그룹에 속해 있습니다.

실제로 sudo를 통해 시스템 관리자 역할을 맡고 있기 때문입니다.

/etc/sudoers에서 살펴봤듯이 sudo 그룹에 속한 사용자는 sudo 명령을 사용할 수 있습니다.

따라서 사용자 계정을 sudo 그룹에 추가하면 sudo 명령을 사용할 수 있습니다.

```s
shinjaehun@losttemple:~$ groups
shinjaehun adm cdrom sudo dip plugdev lpadmin sambashare libvirtd bumblebee
```

사용자 계정 정보를 변경하는 명령은 usermod입니다.

usermod `[옵션][사용자 계정]` 형식으로 입력합니다.

-a는 변경 대신 정보를 추가 append하는 옵션이고

-G `[그룹]` 은 사용자 계정의 그룹(Group)을 대상으로 합니다.

gunsmoke 사용자를 sudo 그룹에 포함시키는 명령입니다.

```s
shinjaehun@losttemple:~$ sudo usermod -a -G sudo gunsmoke
```

- - -

Tip

만일 -a 옵션이 없으면 사용자 계정의 그룹은 `추가`가 아니라 `변경`되어 버립니다.

즉, 기존의 정보가 모두 삭제되므로 주의하기 바랍니다.

- - -

사용자 계정이 sudo 그룹에 포함된 상태를 확인할 수 있습니다.

sudo를 사용해서 명령을 실행할 수 있습니다.

```s
shinjaehun@losttemple:~$ su - gunsmoke
암호: ********
gunsmoke@losttemple:~$ groups
gunsmoke sudo
gunsmoke@losttemple:~$ sudo apt-get update
[sudo] password for gunsmoke: ********
```

- - -

Tip

새로운 사용자 계정을 추가하는 과정에서 그룹을 지정하면 사용자 계정을 추가하고 다시 정보를 변경하는 번거로움을 피할 수 있습니다.

useradd 명령의 -G `[그룹]` 옵션을 사용해서 새로 추가하는 사용자를 sudo 그룹에 포함시킬 수 있습니다.

shinjaehun@losttemple:~$ sudo useradd -m -G sudo gunsmoke

- - -

### 리눅스 파일 관리하기

리눅스의 가장 기본적인 자원인 파일을 다루는 방법에 대해 소개합니다.

그래픽 환경의 파일 관리자를 이용하는 대신 파일 및 디렉터리 관리 명령을 익히면 좀 더 복잡한 작업도 손쉽게 처리할 수 있습니다.

#### 리눅스 파일

파일 관리 명령을 살펴보기 전에 리눅스 파일에 대한 몇 가지 중요한 사실을 소개하고자 합니다.

리눅스에서는 모든 것이 파일입니다.

텍스트, 이미지, 영상을 비롯한 자료뿐만 아니라 디렉터리 정보, 네트워크 소켓, 자료의 흐름 심지어 시스템 장치까지도 파일로 처리합니다.

굳이 그래픽 환경이 아니더라도 텍스트 환경에서 시스템을 제어할 수 있는 이유도 여기에 있습니다.

다중 사용자 운영체제인 리눅스에서는 모든 파일에 소유하는 사용자 계정을 의미하는 소유권과 해당 파일에 대한 접근 권한이 부여됩니다.

따라서 파일을 사용하거나 실행하기 전에 로그인한 사용자 계정이 그 파일을 제어할 수 있는 소유권과 접근 권한을 갖고 있는지 확인해야 합니다.

리눅스에서 파일의 대·소문자 구별은 엄격합니다.

윈도에서 `Text.txt`와 `text.txt`는 서로 같은 파일로 간주하지만,

리눅스에서는 서로 다른 파일로 여깁니다.

파일 이름은 최대 256자까지 가능하며, 공백을 포함한 특수문자를 사용할 수는 있으나 되도록이면 사용하지 않는 것이 좋습니다.

#### 파일 정보 확인하기

ls(list)는 파일 정보를 확인하는 명령입니다.

ls `[옵션][파일]` 형식으로 입력합니다.

아무 옵션 없이 명령을 실행하면 파일 이름 및 디렉터리 이름만 출력합니다.

```s
shinjaehun@losttemple:~$ ls
examples.desktop 공개 다운로드 문서 바탕화면 비디오 사진 음악 템플릿
```

ls 명령 다음에 디렉터리 이름을 명시해서 특정 디렉터리의 파일을 출력할 수도 있습니다.

```s
shinjaehun@losttemple:~$ ls /var
backups crash games local log opt spool www
...
```

-l 옵션은 좀 더 많은 정보를 알려 줍니다.

파일의 형태, 파일의 소유권과 허가권, 파일 크기, 파일을 최종적으로 변경한 날짜와 시간을 알려줍니다.

```s
shinjaehun@losttemple:~$ ls -l
합계 128
-rw-r--r-- 1 gunsmoke gunsmoke 8445 9월 19 23:23 examples.desktop
drwxr-xr-x 2 gunsmoke gunsmoke 4096 9월 20 00:29 공개
drwxr-xr-x 2 gunsmoke gunsmoke 4096 9월 20 00:29 다운로드
...
```

-a는 숨어 있던 파일들까지 보여 줍니다.

-a 옵션을 주어야 나타나는 파일에는 현재 디렉터리를 의미하는 `.`와 상위 디렉터리를 의미하는 `..`, 그리고 숨긴 파일임을 뜻하는 `.`으로 시작되는 파일이 있습니다.

```s
shinjaehun@losttemple:/home/gunsmoke$ ls -a
.              .cache   .gtk-bookmarks   .xsession-errors  사진
..             .compiz  .gvfs            examples.desktop  음악
.ICEauthority  .config  .local           공개              템플릿
...
```

-l 옵션과 -a 옵션을 섞어서 사용할 수도 있는데, 현재 디렉터리에 있는 모든 파일의 세세한 내용을 알고 싶을 때 사용합니다.

```s
shinjaehun@losttemple:~$ ls -al
합계 128
drwxr-xr-x 19 gunsmoke gunsmoke 4096 9월 20 00:30 .
drwxr-xr-x  6 root     root     4096 9월 19 23:23 ..
-rw-------  1 gunsmoke gunsmoke 334  9월 20 00:29 .ICEauthority
-rw-------  1 gunsmoke gunsmoke 55   9월 20 00:29 .Xauthority
...
```

#### 파일 정보의 이해

ls -l 명령에 의해 출력되는 파일 목록은 다음과 같이 표시됩니다.

특히 셋째, 넷째 필드의 정보는 파일을 소유하는 사용자 계정과 그룹을 나타냅니다.

파일의 소유자는 파일에 대한 모든 권한을 포함한 사용자 계정을, 소유 그룹은 소유자가 속한 그룹을 의미합니다.

![ ](/img/03/13.jpg)

첫 필드 10개의 문자는 파일의 접근 권한을 의미합니다.

첫 문자가 `d`라면 파일이 디렉터리이며, `-`라면 일반 파일임을 의미합니다.

다음 세 문자는 차례로 소유자 user, 소유자가 포함된 그룹 group, 다른 모든 사용자 others에 대한 읽기 read, 쓰기 write, 실행 excute 권한의 유무를 나타냅니다.

r, w, x 대신 `-`가 표시되어 있다면 읽기, 쓰기 실행의 각 권한이 없음을 의미합니다.

![ ](/img/03/14.jpg)

다음 sample이라는 파일의 소유권은 root 계정과 root가 속해 있는 그룹에 있습니다.

이 파일에 대한 접근은 소유자와 소유 그룹에 속한 다른 사용자, 혹은 그밖에 다른 사용자들도 읽을 수 있도록 설정되어 있습니다.

하지만, 쓰기 권한은 오직 소유자에게만 있습니다.

```s
shinjaehun@losttemple:~$ ls -l
-rw-r--r--   1 root     root        10 5월  19 13:34 sample
```

#### 소유권 변경하기

파일 소유권 변경을 실습해보기 위해 `cd` 명령으로 `/tmp` 디렉터리로 이동하고 `touch` 명령으로 임시 파일 `sample`을 생성합니다.

`sudo` 명령을 이용해서 시스템에 존재하는 다른 사용자 권한으로 파일을 생성하면 해당 사용자 계정이 파일 소유자가 됩니다.

```s
shinjaehun@losttemple:~$ cd /tmp
shinjaehun@losttemple:/tmp$ sudo -u gunsmoke touch sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:02 sample
```

- - -

Tip

touch는 빈 파일을 생성하는 명령입니다.

- - -

파일의 소유권을 변경하는 명령은 chown(change the owner of a file)입니다.

chown `[옵션][사용자 계정 및 그룹][파일]` 형식으로 입력합니다.

파일의 소유권을 변경할 때는 루트 계정으로 권한이 필요합니다. 명령을 실행한 결과 파일 소유자가 변경되었습니다.

```s
shinjaehun@losttemple:/tmp$ sudo chown shinjaehun sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rw-r--r-- 1 shinjaehun gunsmoke      0 9월 21 23:02 sample
```

사용자 계정과 그룹 사이에 `.` 또는 `:`를 넣어 소유자와 그룹을 동시에 바꿀 수 있습니다.

```s
shinjaehun@losttemple:/tmp$ sudo chown shinjaehun:shinjaehun sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rw-r--r-- 1 shinjaehun shinjaehun    0 9월 21 23:02 sample
```

디렉터리를 대상으로 소유권을 변경하는 경우를 실습해봅시다.

sudo -u 명령으로 gunsmoke 계정을 통해 images라는 디렉터리를 만들고 디렉터리에 `images01`과 `images02`라는 파일을 생성합니다.

```s
shinjaehun@losttemple:/tmp$ sudo -u gunsmoke mkdir images
shinjaehun@losttemple:/tmp$ sudo -u gunsmoke touch images/image01
shinjaehun@losttemple:/tmp$ sudo -u gunsmoke touch images/image02
```

images 디렉터리와 디렉터리 내 `image01`, `image02` 파일의 소유권과 그룹이 모두 gunsmoke로 설정되어 있습니다.

```s
shinjaehun@losttemple:/tmp$ ls -l
drwxr-xr-x 2 gunsmoke gunsmoke 4096 9월 21 23:10 images
...
shinjaehun@losttemple:/tmp$ ls -l images/
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:10 image01
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:10 image02
```

chown으로 디렉터리의 소유권을 변경하면 디렉터리는 소유권이 변경되지만 디렉터리 속에 들어 있는 파일은 그대로 유지됩니다.

```s
shinjaehun@losttemple:/tmp$ sudo chown shinjaehun:shinjaehun images
shinjaehun@losttemple:/tmp$ ls -l
drwxr-xr-x 2 shinjaehun shinjaehun 4096 9월 21 23:10 images
…
shinjaehun@losttemple:/tmp$ ls -l images/
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:10 image01
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:10 image02
```

재귀를 뜻하는 -R(recursive) 옵션을 사용하면 디렉터리와 디렉터리에 있는 파일들의 소유권을 함께 바꿉니다.

명령 하나로 디렉터리에 존재하는 모든 파일의 소유권을 변경할 수 있으므로 매우 유용합니다.

```s
shinjaehun@losttemple:/tmp$ sudo chown -R shinjaehun:shinjaehun images/
shinjaehun@losttemple:/tmp$ ls -l images/
-rw-r--r-- 1 shinjaehun shinjaehun 0 9월 21 23:10 image01
-rw-r--r-- 1 shinjaehun shinjaehun 0 9월 21 23:10 image02
```

#### 접근 권한 변경하기

파일의 접근 권한을 변경하는 명령은 chmod(change mod)입니다.

chmod `[레퍼런스][연산자][접근권한][파일]` 형식으로 입력합니다.

chown과 달리 파일의 소유자도 명령을 내릴 수 있습니다.

레퍼런스는 변경할 대상 소유자(user), 그룹(group), 다른 모든 사용자(others)를 뜻하며 차례로 u, g, o로 표시합니다.

a(all)는 소유자와 그룹, 다른 사용자 모두를 의미합니다. 권한을 부여하는 연산자는 `+`, 권한을 해제하는 연산자는 `-`입니다.

변경할 접근 권한은 읽기(read), 쓰기(write), 실행(excute)으로 각각 r, w, x로 표시합니다.

예를 들어 `ugo+rwx`는 소유자(user), 그룹(group), 다른 모든 사용자(others)에게 읽기(read), 쓰기(write), 실행(excute) 권한을 부여(+)합니다.

그 결과 시스템에 존재하는 모든 사용자가 이 파일을 읽고, 쓰고, 실행할 수 있습니다.

```s
shinjaehun@losttemple:/tmp$ chmod ugo+rwx sample
shinjaehun@losttemple:/tmp$ ls -l sample
rwxrwx 1 shinjaehun shinjaehun 0 9월 21 23:02 sample
```

다른 사용자들(others)에게는 보이고 싶지도 않고(read) 수정(write), 실행(excute)도 불가능하게 변경시켜 보겠습니다.

권한을 해제하려면 `-`를 씁니다.

```s
shinjaehun@losttemple:/tmp$ chmod o-rwx sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rwxrwx--- 1 shinjaehun shinjaehun 0 9월 21 23:02 sample
```

`[레퍼런스][연산자][변경할 접근권한]` 형식으로 입력하는 대신 8진수의 숫자 표현을 사용할 수 있습니다.

처음에는 어려울 수 있는데 익숙해지면 훨씬 편리합니다.

파일의 소유자, 그룹 사용자, 기타 사용자의 읽기, 쓰기, 실행 권한은 각각 다음과 같이 8진수 값이 부여되어 있습니다.

▼ 표 3-1접근 권한에 대한 8진수 값

|8진수|권한|
|:---|:---|
|400|파일 소유자의 읽기 권한|
|200|파일 소유자의 쓰기 권한|
|100|파일 소유자의 실행 권한|
|40|그룹 사용자의 읽기 권한|
|20|그룹 사용자의 쓰기 권한|
|10|그룹 사용자의 실행 권한|
|4|기타 사용자의 읽기 권한|
|2|기타 사용자의 쓰기 권한|
|1|기타 사용자의 실행 권한|

이제 접근 권한에 따라 각 값을 더합니다.

모든 사용자에게 읽기 권한만 부여하고 싶다면 접근 권한을 r–r–r–로 수정해야 합니다.

파일 소유자의 읽기 권한 400, 그룹 사용자의 읽기 권한 40, 기타 사용자의 읽기 권한 4를 더해 444로 표현할 수 있습니다.

이 값을 이용해서 다음과 같이 명령할 수 있습니다.

```s
shinjaehun@losttemple:/tmp$ chmod 444 sample
shinjaehun@losttemple:/tmp$ ls -l sample
-r--r--r-- 1 shinjaehun shinjaehun 0 9월 21 23:02 sample
```

- - -

Tip

파일에 대한 권한이 없는 사용자는 당연히 chmod 명령을 사용할 수 없습니다.

소유권이 gunsmoke에게 있는 파일은 shinjaehun이 접근권한을 변경하지 못합니다.

```s
shinjaehun@losttemple:/tmp$ sudo chown gunsmoke:gunsmoke sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rw-r--r-- 1 gunsmoke gunsmoke 0 9월 21 23:02 sample
shinjaehun@losttemple:/tmp$ chmod 444 sample
chmod: `sample'의 권한 설정 중: 명령을 허용하지 않음
```

예를 하나 더 들어볼까요?

모든 사용자에게 읽기, 쓰기, 실행 권한(rwxrwxrwx)을 부여하고 싶습니다.

파일 소유자에게 읽기(400), 쓰기(200), 실행(100) 권한을 부여하려면 700(400 + 200 + 100)을, 그룹 사용자에게 읽기(40), 쓰기(20), 실행(10) 권한을 부여하려면 70(40 + 20 + 10)을, 기타 사용자에게 읽기(4), 쓰기(2), 실행(1) 권한을 부여하려면 7(4 + 2 + 1)을 할당합니다.

따라서 모든 사용자에게 읽기, 쓰기, 실행 권한을 부여하기 위한 접근 권한은 777(700 + 70 + 7)이 됩니다.

이는 ugo+rwx와 같습니다.

```s
shinjaehun@losttemple:/tmp$ sudo chmod 777 sample
shinjaehun@losttemple:/tmp$ ls -l sample
-rwxrwxrwx 1 gunsmoke gunsmoke 0 9월 21 23:02 sample
```

sample을 원래 권한으로 되돌려 봅시다.

rw-r--r--는 파일 소유자의 읽기와 쓰기(rw-), 그룹 사용자의 읽기(r--), 기타 사용자의 읽기(r--)가 가능한 접근 권한입니다.

파일 소유자의 읽기와 쓰기 권한은 600(400 + 200), 그룹 사용자의 읽기는 40, 기타 사용자의 읽기는 4이며 값을 모두 더한 644가 원래 권한을 의미하게 됩니다.

![ ](/img/03/15.jpg)

```s
shinjaehun@losttemple:/tmp$ chmod 644 sample
shinjaehun@losttemple:/tmp$ ls -l sample
--r-- 1 shinjaehun shinjaehun 0 9월 21 23:02 sample
```

#### 리눅스 시스템 디렉터리

우분투를 설치하면 기본적으로 시스템 디렉터리가 생성됩니다.

이들은 모두 중요한 의미를 갖기 때문에 함부로 삭제하거나 변경해서는 안 됩니다.

```s
shinjaehun@losttemple:~$ ls /

bin   cdrom  etc   initrd.img  lost+found  mnt  proc  run   srv  tmp  var
boot  dev    home  lib         media       opt  root  sbin  sys  usr  vmlinuz
```

리눅스는 파일 시스템 계층 구조 표준(Filesystem Hierachy Standard, FHS)에 의해 디렉터리를 구성합니다.

각 디렉터리에 대한 설명은 다음과 같습니다.

▼ 표 3-2 리눅스 시스템 디렉터리

|디렉터리|설명|
|:---|:---|
|/|모든 디렉터리가 시작하는 뿌리인 최상위 디렉터리입니다. `루트`라고 읽습니다.|
|/dev|시스템에 설치된 주변 장치들(마우스, 모니터, 비디오카드, 하드디스크)이 파일로 등록되어 있는 디렉터리입니다.|
|/etc|시스템 설정 파일이 들어 있는 디렉터리입니다. 사용자, 그룹 정보, 파일 시스템 테이블과 같이 기본적으로 시스템의 환경을 결정하는 매우 중요한 파일들이 모여 있습니다.|
|/bin|사용자가 사용하는 가장 기본적인 명령들이 실행 파일 형태로 저장되어 있습니다.|
|/lib|공유 라이브러리 파일들이 저장되어 있는 디렉터리입니다. 시스템의 부팅과 응용 프로그램의 실행에 필요한 코드들이 들어 있습니다.|
|/home|사용자 계정을 만들면 사용자 계정의 이름과 동일한 홈 디렉터리가 /home 디렉터리 아래에 만들어집니다. 사용자는 각자의 파일을 사용자 홈 디렉터리에 저장합니다. 일반적으로 별도의 파티션으로 분리합니다.|
|/root|루트 계정을 위해 제공되는 홈 디렉터리입니다. 일반 사용자를 위한 /home 디렉터리와 달리 일반 사용자는 접근하지 못하도록 접근 권한이 설정되어 있습니다.|
|/proc|시스템 정보를 제공하는 가상 파일 시스템 디렉터리입니다. 이 디렉터리의 파일들을 확인하여 CPU 정보, 인터럽트 목록, 입출력 주소 목록과 같은 시스템 상태를 모니터링할 수 있습니다.|
|/sbin|시스템 관리 명령들이 들어 있는 디렉터리입니다. /bin과 달리 일반적으로 루트 권한이 필요한 명령들입니다.|
|/tmp|임시로 파일을 생성 또는 삭제하는 공간입니다. 주로 사용자들의 프로그램에서 임시로 읽어들여야 하는 입출력 파일들을 저장하는데 사용됩니다. 이 디렉터리에 저장한 파일은 언제 삭제될지 보장할 수 없습니다.|
|/var|시스템을 운영하면서 생기는 각종 임시 파일(시스템 로그, 스풀, 전자메일)을 저장하는 디렉터리입니다. 크기가 계속해서 변하는 임시 파일을 저장합니다.|
|/usr|시스템, 응용 프로그램에서 필요한 파일들이 저장되어 있는 디렉터리입니다. 일반적으로 /usr에는 선택적으로 설치되는 응용 프로그램들이 저장됩니다.|

#### 파일과 디렉터리 다루기

pwd(print name of working directory) 명령은 현재 작업하고 있는 디렉터리 위치를 알려줍니다.

```s
shinjaehun@losttemple:~$ pwd
/home/shinjaehun
```

디렉터리를 생성하는 명령은 mkdir(make directories)입니다.

mkdir을 입력한 뒤 한 칸 띄고 새로 만들 디렉터리의 이름을 입력합니다.

```s
shinjaehun@losttemple:~$ mkdir emptydir
```

디렉터리를 이동하는 명령은 cd(change directory)입니다.

pwd 명령으로 확인하면 작업 디렉터리가 변경된 것을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ cd emptydir
shinjaehun@losttemple:~/emptydir$ pwd
/home/shinjaehun/emptydir
```

- - -

Tip

디렉터리를 이동할 때 Tab을 사용하면 입력 시간을 줄일 수 있습니다.

emptydir 디렉터리로 이동할 때 cd emptydir을 모두 입력하지 말고 cd e까지만 입력해서 Tab을 누르면 나머지 글자가 자동 완성될 것입니다.

만일 같은 글자로 시작하는 하위 디렉터리가 여러 개 있다면 Tab을 한 번 더 눌러봅니다.

선택 가능한 하위 디렉터리를 보여줄 것입니다.

- - -

모든 폴더에 존재하는 숨김 파일 중 ` ..`는 현재 디렉터리의 상위 디렉터리를 의미합니다.

cd ..를 입력하면 상위 디렉터리로 이동합니다.

```s
shinjaehun@losttemple:~/emptydir$ cd ..
shinjaehun@losttemple:~$ pwd
/home/shinjaehun
```

디렉터리를 삭제하는 명령은 rmdir(remove empty directories)입니다.

rmdir은 비어 있는 디렉터리만 삭제할 수 있습니다.

파일이 존재하는 디렉터리는 파일 삭제 명령인 rm -r 명령으로 삭제해야 합니다.

```s
shinjaehun@losttemple:~$ rmdir emptydir/
```

mkdir의 -p(parents) 옵션은 상위 디렉터리를 포함하는 하위 디렉터리를 생성합니다.

현재 작업 디렉터리에 `baseballteam`이라는 디렉터리를 만들고 다시 그 아래 KBO라는 디렉터리를 생성하려면 mkdir을 두 번 실행해야 하지만, -p 옵션으로 한 번에 생성 가능합니다.

```s
shinjaehun@losttemple:~$ mkdir -p baseballteam/KBO
shinjaehun@losttemple:~$ cd baseballteam/KBO/
shinjaehun@losttemple:~/baseballteam/KBO$ pwd
/home/shinjaehun/baseballteam/KBO
```

`/home/shinjaehun/baseballteam/KBO` 에서 사용자 홈 디렉터리(/home/shinjaehun)로 돌아오려면 cd ..를 두 번 입력해야 합니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ cd ..
shinjaehun@losttemple:~/baseballteam$ pwd
/home/shinjaehun/baseballteam
shinjaehun@losttemple:~/baseballteam$ cd ..
shinjaehun@losttemple:~$ pwd
/home/shinjaehun
```

어디에서든지 cd만 입력하면 해당 사용자 계정의 홈 디렉터리로 바로 이동합니다.

```s
shinjaehun@losttemple:~$ cd baseballteam/KBO/
shinjaehun@losttemple:~/baseballteam/KBO$ cd
shinjaehun@losttemple:~$ pwd
/home/shinjaehun
```

- - -

Tip

홈 디렉터리를 의미하는 ~ 기호를 이용해서 cd ~라고 입력해도 같은 결과를 보여줍니다.

- - -

- - -

Q 디렉터리 경로를 지정하는 방법인 상대경로와 절대경로에 대해 알려주세요.

A 특정 디렉터리를 기준으로 디렉터리의 경로를 지정하는 방법을 상대경로라고 하고 최상위 디렉터리인 루트 디렉터리를 기준으로 디렉터리의 경로를 지정하는 방법을 절대경로라고 합니다.

사용자 홈 디렉터리 아래에 basketballteam/NBA 디렉터리를 생성해봅시다.

```s
shinjaehun@losttemple:~$ pwd
/home/shinjaehun
shinjaehun@losttemple:~$ mkdir -p basketballteam/NBA
```

상대경로로 하위 디렉터리로 이동하려면 간단히 하위 디렉터리 경로만 입력하면 됩니다.

```s
shinjaehun@losttemple:~$ cd basketballteam/NBA/
shinjaehun@losttemple:~/basketballteam/NBA$ pwd
/home/shinjaehun/basketballteam/NBA
```

다시 사용자 홈 디렉터리로 돌아와서 루트 디렉터리로부터 모든 경로를 표시하는 절대경로를 써서 디렉터리를 이동해봅시다.

pwd 명령은 항상 현재 디렉터리를 절대경로로 표시한다는 사실을 알 수 있습니다.

```s
shinjaehun@losttemple:~/basketballteam/NBA$ cd
shinjaehun@losttemple:~$ cd /home/shinjaehun/basketballteam/NBA/
shinjaehun@losttemple:~/basketballteam/NBA$ pwd
/home/shinjaehun/basketballteam/NBA
```

절대경로는 루트 디렉터리로부터의 경로를 모두 나타내어야 하는 무식한 방법이라고 생각할 수 있지만, 다음과 같은 상황에서는 상대경로보다 절대경로로 지정하는 것이 훨씬 편하다는 것을 알 수 있습니다.

`basketballteam/NBA`에서 `baseballteam/KBO`로 디렉터리를 이동하려는데 상대경로를 이용하면 반드시 상위 디렉터리인 사용자 홈 디렉터리를 거쳐야 합니다.

```s
shinjaehun@losttemple:~/basketballteam/NBA$ pwd
/home/shinjaehun/basketballteam/NBA
shinjaehun@losttemple:~/basketballteam/NBA$ cd
shinjaehun@losttemple:~$ cd baseballteam/KBO/
shinjaehun@losttemple:~/baseballteam/KBO$ pwd
/home/shinjaehun/baseballteam/KBO
```

하지만, 절대경로로 지정하면 단번에 원하는 디렉터리로 이동할 수 있습니다.

따라서 디렉터리 경로만 알고 있다면 절대경로를 이용해서 매우 빠른 이동이 가능해집니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ cd /home/shinjaehun/basketballteam/NBA/
shinjaehun@losttemple:~/basketballteam/NBA$ pwd
/home/shinjaehun/basketballteam/NBA
```

아무 내용 없는 빈 파일을 생성하려면 touch 명령을 이용합니다.

원래 touch는 파일의 날짜와 시간 정보를 변경하는 명령인데 아무 옵션 없이 새로운 파일 이름을 지정해서 비어 있는 파일을 생성할 수 있습니다.

touch `[파일명]` 형식으로 입력합니다.

실행 결과 크기가 0이고 접근 권한이 644인 빈 파일이 만들어집니다.

```s
shinjaehun@losttemple:~$ touch teamdata
-rw-rw-r-- 1 shinjaehun shinjaehun 0 9월 22 09:39 teamdata
```

파일을 복사하는 명령은 cp(copy)입니다.

cp `[옵션][원본파일][사본파일]` 형식으로 입력합니다.

현재 작업 디렉터리에 다른 이름의 파일을 복사해서 만듭니다.

```s
shinjaehun@losttemple:~$ cp teamdata giants
shinjaehun@losttemple:~$ ls -l giants
-rw-rw-r-- 1 shinjaehun shinjaehun 0 9월 22 09:44 giants
```

원본 또는 사본의 경로를 직접 지정할 수도 있습니다.

다음 명령은 하위 디렉터리에 twins라는 파일을 복사할 것입니다.

```s
shinjaehun@losttemple:~$ cp teamdata baseballteam/KBO/twins
shinjaehun@losttemple:~$ ls -l baseballteam/KBO/twins
-rw-rw-r-- 1 shinjaehun shinjaehun 0 9월 22 09:47 baseballteam/KBO/twins
```

- - -

Tip

baseballteam/KBO 디렉터리가 존재하지 않는다면 mkdir의 -p 옵션을 참고해서 생성합니다.

- - -

-R(recursive) 옵션을 붙이면 cp 명령은 디렉터리를 복사합니다.

```s
shinjaehun@losttemple:~$ cp -r baseballteam/KBO/ baseballteam/MLB/
shinjaehun@losttemple:~$ ls -l baseballteam/
drwxrwxr-x 2 shinjaehun shinjaehun 4096 9월 22 16:42 KBO
drwxrwxr-x 2 shinjaehun shinjaehun 4096 9월 22 17:13 MLB
...
```

mv(move) 파일을 이동하는 명령입니다.

mv `[옵션][원본파일][사본파일]` 형식으로 입력합니다.

cp와 달리 원본 파일이 삭제되므로 주의하기 바랍니다.

```s
shinjaehun@losttemple:~$ mv giants baseballteam/KBO
shinjaehun@losttemple:~$ ls giants
ls: giants에 접근할 수 없습니다: 그런 파일이나 디렉터리가 없습니다
shinjaehun@losttemple:~$ cd baseballteam/KBO
shinjaehun@losttemple:~/baseballteam/KBO$ ls
giants twins
```

- - -

Tip

사용자 홈 디렉터리에 giants 파일이 존재하지 않으면 touch 명령으로 생성합니다.

- - -

둘 이상 원본 파일을 동시에 옮기는 것도 가능합니다.

다음과 같이 `giants`와 `twins` 파일을 baseballteam/MLB 디렉터리로 이동했습니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ mv giants twins /home/shinjaehun/baseballteam/
MLB/
shinjaehun@losttemple:~/baseballteam/KBO$ ls
shinjaehun@losttemple:~/baseballteam/KBO$ cd /home/shinjaehun/baseballteam/MLB/
shinjaehun@losttemple:~/baseballteam/MLB$ ls
giants twins
```

- - -

Tip

/home/shinjaehun/baseballteam/MLB/ 디렉터리가 존재하지 않으면 mkdir 명령으로 디렉터리를 생성합니다.

- - -

mv 명령으로 디렉터리를 옮길 수 있습니다.

명령을 실행한 결과 파일 내용은 그대로 유지되고 디렉터리 경로만 변경된 것을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ mv baseballteam/MLB baseballteam/MajorLeagueBaseball
shinjaehun@losttemple:~$ ls baseballteam/MajorLeagueBaseball/
giants twins
```

파일을 삭제하는 명령 rm(remove)을 실습해봅시다.

실습에 앞서 생성한 baseballteam/KBO 디렉터리로 이동해서 touch 명령으로 파일을 만듭니다.

```s
shinjaehun@losttemple:~$ cd baseballteam/KBO/
shinjaehun@losttemple:~/baseballteam/KBO$ ls
shinjaehun@losttemple:~/baseballteam/KBO$ touch giants bears heroes eagles tigers dinos
twins wyverns lions
shinjaehun@losttemple:~/baseballteam/KBO$ ls
bears dinos eagles giants heroes lions tigers twins wyverns
```

rm 명령으로 파일을 삭제합니다.

rm `[옵션][파일명]` 형식으로 입력합니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ rm lions
shinjaehun@losttemple:~/baseballteam/KBO$ ls
bears dinos eagles giants heroes tigers twins wyverns
```

동시에 여러 파일을 삭제하는 것도 가능합니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ rm wyverns twins
shinjaehun@losttemple:~/baseballteam/KBO$ ls
bears dinos eagles giants heroes tigers
```

-rf 옵션을 붙이면 하위 디렉터리를 포함한 모든 파일을 삭제합니다.

접근 권한에 해당하는 파일만 삭제할 수 있지만 만일 루트 권한을 얻은 상태에서 rm -rf 명령을 실행하면 치명적입니다.

시스템 파일들이 순식간에 삭제되므로 rm -rf 명령을 실행할 때는 반드시 삭제 대상을 다시 확인해보기 바랍니다.

```s
shinjaehun@losttemple:~/baseballteam/KBO$ cd ..
shinjaehun@losttemple:~/baseballteam$ ls
KBO MajorLeagueBaseball ...
shinjaehun@losttemple:~/baseballteam$ rm -rf MajorLeagueBaseball/
shinjaehun@losttemple:~/baseballteam$ ls
KBO ...
```

#### 파일 내용 확인하기

파일 내용을 화면에 표시하는 명령은 cat입니다.

cat `[파일명]`으로 명령을 입력합니다.

`/var/log/syslog` 는 시스템이 남기는 로그 파일로 운영 과정에서 발생하는 이벤트 기록을 확인할 수 있는 파일입니다.

```s
shinjaehun@losttemple:~$ cat /var/log/syslog
```

cat는 원래 파일 내용을 확인하는 명령이지만 여기에 `>`를 이용해서 결과를 모니터 화면 대신 해당 파일로 내보내 새로운 파일을 생성할 수 있습니다.

cat > `[파일명]`을 실행하고 내용을 입력합니다.

입력이 끝나면 `Ctrl + d` 를 눌러 종료하고 다시 커맨드라인으로 나갑니다.

```s
shinjaehun@losttemple:~$ cat > teamdata
pitchers
catchers
infielders
outfielders
designated hitters
disabled list
```

- - -

Tip

리눅스의 표준 입력 장치는 키보드, 표준 출력 장치는 모니터 화면입니다.

`>` 또는 `<`로 표준 입력 및 출력을 다른 대상으로 바꿀 수 있습니다.

- - -

cat는 파일 내용을 끝까지 한 번에 다 보여 주기 때문에 보여줄 내용이 많다면 한 화면을 넘겨 버립니다.

보여줄 내용이 많을 때는 more나 less를 사용합니다.

`/var/log/syslog` 는 분량이 많기 때문에 more나 less로 한 화면씩 확인하는 편이 낫습니다.

명령을 실행한 다음 키를 사용해서 화면을 전환할 수 있는데 f를 누르면 다음의 화면을, b를 누르면 이전 화면을 보여줍니다.

Enter를 누르면 한 줄씩 보여 주며 q를 누르면 종료하고 커맨드라인으로 되돌아갑니다.

```s
shinjaehun@losttemple:~$ more /var/log/syslog
```

- - -

Tip

화면 아래에 --More--(0%)로 보고 있는 파일의 위치를 가늠할 수 있습니다.

- - -

결론적으로 얘기하면 more보다 less가 더 유용합니다.

less는 more에서 사용하는 키와 더불어 가장 첫 화면으로 이동하는 g와 가장 마지막 화면으로 이동하는 G(Shift+g)를 사용할 수 있습니다.

검색도 가능합니다. `/DHCP`라고 입력하면 `DHCP`라는 문자열이 하이라이트되며 이때 n과 N(Shift+n)을 눌러 검색된 문자열을 건너뛰어 이동할 수 있습니다.

```s
shinjaehun@losttemple:~$ less /var/log/syslog
```

head와 tail은 전체 파일의 일부만 보여주는 명령입니다.

head는 파일의 처음을 기준으로 파일 내용을 출력합니다.

특별히 옵션을 사용하지 않으면 파일의 첫 번째 줄부터 10번째 줄까지 출력합니다.

```s
shinjaehun@losttemple:~$ head /var/log/syslog
```

특정 줄까지 출력하고 싶다면 -n 옵션을 사용합니다.

예를 들어 처음부터 15번째 줄까지 보고 싶다면 다음과 같이 입력합니다.

```s
shinjaehun@losttemple:~$ head -n 15 /var/log/syslog
```

tail은 head와 반대로 파일의 마지막 부분을 기준으로 파일 내용을 출력합니다.

head와 마찬가지로 옵션을 지정하지 않으면 파일의 마지막 줄부터 10번째 줄까지 출력하며 tail 역시 -n 옵션을 추가하여 보고 싶은 줄의 범위를 지정할 수 있습니다.

일반적으로 로그 파일은 최신 기록이 파일 마지막에 덧붙여지는 형태로 저장되기 때문에 로그를 모니터링할 때는 head보다 tail을 더 자주 사용합니다.

```s
shinjaehun@losttemple:~$ tail /var/log/syslog
```

-f 옵션은 실시간으로 로그를 모니터링합니다.

명령을 실행하고 나서 명령 프롬프트를 보여주지 않고 지속적으로 시스템이 변하는 상황을 보여줄 것입니다.

`Ctrl + c` 를 누르면 tail을 종료하고 커맨드라인으로 되돌아옵니다.

시스템에 발생한 문제를 점검할 때 유용한 옵션입니다.

```s
shinjaehun@losttemple:~$ tail -f /var/log/syslog
```

#### 검색하기

그래픽 환경에서는 대시 홈이나 파일 매니저를 이용해서 필요한 파일을 찾을 수 있습니다.

커맨드라인에서 파일을 찾는 명령은 find입니다.

find `[탐색경로][옵션][표현식]` 형식으로 입력합니다.

탐색 경로를 생략하면 현재 작업 중인 디렉터리부터 검색을 시작합니다.

-name은 파일 이름으로 검색하는 옵션입니다.

읽기 권한이 없는 디렉터리는 건너뜁니다.

```s
shinjaehun@losttemple:~$ find -name giants

./baseballteam/KBO/giants

find: ./.dbus: 허가 거부
find: ./.cache/dconf: 허가 거부
```

sudo로 루트 권한을 얻으면 모든 디렉터리를 검색할 수 있습니다.

```s
shinjaehun@losttemple:~$ sudo find -name giants
./baseballteam/KBO/giants
```

루트 디렉터리부터 시작해서 모든 파일을 검색하려면 탐색 경로에 루트 디렉터리를 나타내는 `/`를 명시합니다.

파일 시스템 전체에 있는 파일들을 검색하기 때문에 오랜 시간이 소모될 것입니다.

```s
shinjaehun@losttemple:~$ sudo find / -name backups
/var/backups
```

-name 외에 사용 가능한 옵션들은 다음과 같습니다.

|옵션|검색 대상|
|:---|:---|
|-perm|파일 권한|
|-type|파일 종류|
|-size|파일 크기|
|-links|링크 수|
|-user|사용자 ID|
|-atime|특정 기간 동안 접근하지 않은 파일|
|-mtime|특정 기간 동안 수정되지 않은 파일|

#### 파일 이름에 정규 표현식 적용하기

이번에는 파일 내용(텍스트)을 검색하는 명령 grep입니다.

grep `[옵션][표현식][파일명]` 형식으로 입력합니다.

아무 옵션 없이 명령을 실행하면 문자열 `pit`를 포함하는 행을 보여줍니다.

터미널에서는 검색어가 붉게 표시되어 보일 것입니다.

```s
shinjaehun@losttemple:~$ grep pit teamdata
pitchers
```

-c 옵션은 해당 문자열이 포함된 행의 수를 출력합니다.

`pit` 문자열이 포함된 행은 하나라는 의미입니다.

```s
shinjaehun@losttemple:~$ grep -c pin teamdata
1
```

-n 옵션은 해당 문자열이 포함된 행과 해당 행의 번호를 함께 보여줍니다.

터미널에서는 검색어가 붉게 표시되어 보일 것입니다.

```s
shinjaehun@losttemple:~$ grep -n pit teamdata
1:pitchers
```

-i 옵션은 대소문자 구분 없이 문자를 검색합니다.

역시 터미널에서는 검색어 `pit`가 붉게 표시되어 보일 것입니다.

```s
shinjaehun@losttemple:~$ grep -i PIT teamdata
pitchers
```

일반적으로 grep는 혼자 쓰이기보다 파이프를 통해 다른 명령어와 조합해서 결과를 얻는 데 유용하게 사용됩니다.

예를 들어 파일 목록을 출력하는 명령 ls -l의 결과 중에서 `base`라는 문자열을 검색하라는 명령을 조합하면 `baseballteam`이라는 파일 정보만 추려내어 출력할 것입니다.

```s
shinjaehun@losttemple:~$ ls -l | grep base
drwxrwxr-x 3 shinjaehun shinjaehun 4096 9월 22 17:27 baseballteam
```

- - -

Q `|` 이게 무엇인가요?

A 파이프라고 합니다.

여러 명령을 동시에 사용하는 도구로 프로세스 사이에 정보를 전달하는 통로 역할을 수행합니다.

홈 디렉터리에서 ls -al 명령을 실행하면 숨김 파일까지 모두 표시하므로 출력 결과가 한 화면을 넘는 경우가 일반적입니다.

```s
shinjaehun@losttemple:~$ ls -al
```

파일 목록이 스크롤되는 내용을 화면 단위로 끊어 주면 훨씬 보기가 수월하겠죠?

이때 파이프(`|`)를 이용하면 ls -al 명령 결과를 more와 less와 조합해서 처리할 수 있습니다.

다음과 같이 more를 사용해 페이지를 넘길 수 있습니다.

```s
shinjaehun@losttemple:~$ ls -al | more
```

그런 다음 파일 목록을 조회(ls -al)해서 역순으로 정렬(sort -r)하고 화면 단위로 결과를 출력(more)할 것입니다.

shinjaehun@losttemple:~$ ls -al | sort -r | more

- - -

### 프로세스 관리하기

리눅스는 실행 중인 프로그램을 적절히 제어하여 다중 작업 (Multi tasking)을 지원합니다.

만약 여러분이 사용하는 시스템이 느려지거나 알 수 없는 이유로 프로그램이 종료된다면 해당 프로그램이 어떤 상태인지 꾸준히 지켜볼 필요가 있습니다.

이 절에서 배울 명령들이 도움이 될 것입니다.

#### 리눅스 프로세스

프로세스는 실행 중인 프로그램을 나타내는 개념입니다.

사용자가 하드디스크에 존재하는 프로그램을 실행하면 프로세스가 메모리에 적재(load)됩니다.

모든 프로세스는 프로그램을 실행한 사용자 및 각 프로세스를 구분하기 위한 PID, UID, GID 정보를 갖습니다.

▼ 표 3-4 프로세스를 구분하는 기본적인 정보

|명칭|역할|
|:---|:---|
|PID(Process ID)|프로세스 시작 시 할당되는 유일한 프로세스 식별 번호|
|UID(User ID)|프로세스를 소유하는 사용자 계정을 식별하는 번호. 프로세스에 대한 사용자 권한을 알 수 있음|
|GID(Group ID)|그룹 식별 변호. 프로세스가 속해 있는 그룹을 알려줌|
|파일 디스크립터(file descriptor)|프로세스 읽기/쓰기 위해서 어떤 파일을 열고 있는지, 파일의 어떤 위치에 있는지를 기록|

#### 프로세스 확인하기

현재 실행 중인 프로세스를 확인하는 명령은 ps입니다.

옵션을 사용하지 않고 ps 명령만 입력하면 현재 로그인한 사용자가 실행하는 프로세스만 보여줍니다.

```s
shinjaehun@losttemple:~$ ps
  PID TTY          TIME CMD
 4706 pts/0    00:00:00 bash
 5061 pts/0    00:00:00 ps
```

-a 옵션은 다른 사용자의 프로세스 상태도 표시합니다.

-x 옵션은 화면에 보이지 않는 프로세스까지 모두 표시합니다.

-ax로 두 옵션을 함께 사용하면 현재 실행 중인 모든 프로세스를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -ax
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:03 /sbin/init
    2 ?        S      0:00 [kthreadd]
    3 ?        S      0:00 [ksoftirqd/0]
    4 ?        S      0:00 [kworker/0:0]
    5 ?        S<     0:00 [kworker/0:0H]
...
```

-u 옵션은 프로세스를 사용한 사용자가 누구인지 그리고 프로세스의 실행 시간을 표시합니다.

따라서 -aux 옵션을 사용하면 프로세스의 시스템 자원 사용률을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -aux
USER       PID %CPU %MEM    VSZ   RSS TTY    STAT START  TIME COMMAND
root         1  0.0  0.2   4540  2268 ?      Ss   09:32  0:03 /sbin/init
root         2  0.0  0.0      0     0 ?      S    09:32  0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?      S    09:32  0:00 [ksoftirqd/0]
root         4  0.0  0.0      0     0 ?      S    09:32  0:00 [kworker/0:0]
root         5  0.0  0.0      0     0 ?      S<   09:32  0:00 [kworker/0:0H]
...
```

-aux 옵션으로 확인할 수 있는 프로세스 정보의 각 필드는 다음을 의미합니다.

![ ](/img/03/16.jpg)

프로세스의 상태를 나타내는 STAT 항목에는 5가지가 있습니다.

+ R(Runable): 실행 대기 상태
+ S(Sleeping): 수면 상태
+ D(inDiskwait): 입·출력을 기다리는 상태
+ T(sTopped): 멈춰 있거나 흔적이 남아 있는 상태
+ Z(Zombie): 완전히 죽은 상태

- - -

Tip

완전히 죽었지만 프로세스 목록에 나타나는 좀비 프로세스는 사용자가 사용할 수 없는 상태이지만 시스템 자원을 소비합니다.

좀비 프로세스를 발견하면 kill 명령으로 프로세스를 종료시켜야 합니다.

- - -

-ax나 -aux가 시스템의 자원 사용률을 확인하는 옵션인데 비해 -ef 옵션은 PID(Process ID)로 정렬되어 있는 프로세스 목록을 출력합니다.

```s
shinjaehun@losttemple:~$ ps -ef
UID        PID  PPID  C STIME TTY      TIME     CMD
root         1     0  0 09:32 ?        00:00:03 /sbin/init
root         2     0  0 09:32 ?        00:00:00 [kthreadd]
root         3     2  0 09:32 ?        00:00:00 [ksoftirqd/0]
root         4     2  0 09:32 ?        00:00:00 [kworker/0:0]
root         5     2  0 09:32 ?        00:00:00 [kworker/0:0H]
...
```

-ef 옵션으로 확인할 수 있는 프로세스 정보의 각 필드는 다음을 의미합니다.

아래에 설명이 없는 나머지 항목은 -aux 옵션의 내용과 동일합니다.

![ ](/img/03/17.jpg)

프로세스를 이야기할 때 빠져서는 안 되는 중요한 개념 중의 하나가 부모 프로세스와 자식 프로세스입니다.

리눅스 및 유닉스에서 프로세스들은 계층적으로 구성되며 각 프로세스들은 자기 자신을 만들어준 부모 프로세스를 갖습니다.

부모 프로세스에 의해 만들어진 프로세스는 자식 프로세스라고 합니다.

자식 프로세스는 부모 프로세스로부터 대부분의 속성을 상속받습니다.

따라서 리눅스의 프로세스는 자신의 프로세스 ID인 PID와 더불어 부모 프로세스의 ID인 PPID를 갖습니다.

-ef 옵션은 부모 프로세스와의 관계를 파악하는 데 사용됩니다.

예를 들어 grep 명령으로 프로세스 목록에서 `Network` 문자열을 검색했습니다.

PID 725인 NetworkManager, PID 1176인 dnsmasq, PID 4505인 dhclient 프로세스를 확인할 수 있습니다.

이때 dnsmasq와 dhclient의 PPID가 725라는 사실로 미루어 NetworkManager의 자식 프로세스라는 사실을 알 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -ef | grep 'Network'
root       725     1  0 09:33 ?        00:00:01 NetworkManager
nobody    1176   725  0 09:33 ?        00:00:01 /usr/sbin/dnsmasq .../dnsmasq.
root      4505   725  0 11:02 ?        00:00:01 /sbin/dhclient ... eth0
shinjae+  5180 4706  0 11:52 pts/0 00:00:00 grep --color=auto Network
```

- - -

Tip

마지막 PID 5180인 프로세스는 방금 실행한 grep 검색을 위한 프로세스로 의미 없는 정보입니다.

- - -

실시간으로 메모리 점유율, CPU 사용률을 확인할 때는 ps -aux보다 top 명령이 더 유용합니다.

ps가 개별 프로세스 상태를 보여주는 데 비해 top은 전체적인 프로세스 상태를 알아볼 때 사용합니다.

```s
shinjaehun@losttemple:~$ top
```

약 5초마다 내용이 업데이트되어 CPU를 가장 많이 점유하는 프로세스부터 순서대로 출력합니다.

필요하다면 프로세스 목록을 다양한 순서로 정렬할 수 있습니다.

N을 누르면 PID 순으로, M을 누르면 메모리 사용률 순서로, T를 누르면 사용 시간에 따라, P를 누르면 CPU 점유율순(기본값)으로 프로세스 목록을 정렬합니다.

q를 누르면 top을 종료합니다.

```s
op - 00:20:21 up 1:39, 3 users, load average: 0.14, 0.10, 0.07
Tasks: 247 total,  1 running, 245 sleeping,  0 stopped,  1 zombie
Cpu(s): 2.9%us, 0.6%sy, 0.0%ni, 96.5%id,  0.0%wa,  0.0%hi, 0.0%si,  0.0%st
Mem:   4078060k total, 2790544k used,  1287516k free, 260148k buffers
Swap: 29296636k total        0k used, 29296636k free, 825464k cached

 PID USER      PR  NI  VIRT  RES   SHR   S   %CPU  %MEM  TIME+    COMMAND
5547 shinjaeh  20  0   591m  168m  44m   S   4     4.2   0:36.05  chrome
4253 shinjaeh  20  0   387m  120m  37m   S   3     3.0   0:32.31  chrome
5440 shinjaeh  20  0   391m  130m  40m   S   2     3.3   0:47.63  chrome
4035 shinjaeh  20  0   624m  109m  58m   S   2     2.7   1:20.41  chrome
1732 root      20  0   369m  183m  138m  S   1     4.6   0:39.36  Xorg
3430 shinjaeh  20  0   321m  112m  52m   S   1     2.8   0:54.41  compiz
4073 shinjaeh  20  0   544m  173m  98m   S   1     4.3   0:30.29  chrome
2619 puppet    20  0  39060  25m   2024  S   0     0.6   0:22.70  puppet
3410 shinjaeh  20  0   147m  16m   12m   S   0     0.4   0:02.07  gnome-settings-
3467 shinjaeh  20  0   302m  77m   33m   S   0     2.0   0:11.20  cairo-dock
6150 shinjaeh  20  0   257m  39m   11m   S   0     1.0   0:01.65  chrome
   1 root      20  0   3796  2196  1296  S   0     0.1   0:00.80  init
   2 root      20  0      0     0     0  S   0     0.0   0:00.00  kthreadd
   3 root      20  0      0     0     0  S   0     0.0   0:00.61  ksoftirqd/0
   5 root       0  -20    0     0     0  S   0     0.0   0:00.00  kworker/0:0H
   7 root       0  -20    0     0     0  S   0     0.0   0:00.00  kworker/u:0H
   8 root      RT  0      0     0     0  S   0     0.0   0:00.04  migration/0
```

윗부분은 시스템 가동 시간, 평균 부하, 전체 프로세스 정보, 메모리 상태 등 시스템 상태를 요약해서 보여줍니다.

아래는 각 프로세스 정보가 출력됩니다.

앞서 살펴보았지만 한 번 더 정리하면 PID는 프로세스 ID, USER는 프로세스 소유자, PR은 프로세스의 우선 순위, NI는 우선 순위를 지정하는 nice 값, VIRT는 프로세스가 점유하는 가상 메모리 양(KB 단위), RES는 스왑되지 않은 물리 메모리 양(KB 단위), SHR은 공유 메모리 양(KB 단위), S는 프로세스 상태, %CPU는 CPU 점유율, %MEM은 메모리 점유율, TIME+는 프로세스가 CPU를 사용한 시간, COMMAND는 프로세스를 실행한 명령을 나타냅니다.

|단축명|설명|
|:---|:---|
|PID|프로세스|
|USER|프로세스 소유자|
|PR|프로세스의 우선 순위|
|NI|순위를 지정하는 nice 값|
|VIRT|프로세스가 점유하는 가상 메모리 양(KB 단위)|
|RES|스왑되지 않은 물리 메모리 양(KB 단위)|
|SHR|공유 메모리 양(KB 단위)|
|S|프로세스 상태|
|%CPU|CPU 점유율|
|%MEM|메모리 점유율|
|TIME+|프로세스가 CPU를 사용한 시간|
|COMMAND|프로세스를 실행한 명령|

#### 프로세스 종료하기

실행 중인 프로세스를 종료하는 명령은 kill입니다.

kill은 사용자가 프로세스에 일정한 신호를 보내서 프로세스를 종료합니다.

신호의 종류는 여러 가지가 있는데, kill -l 명령을 사용하면 신호의 종류를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ kill -l
1) SIGHUP        2) SIGINT        3) SIGQUIT       4) SIGILL        5) SIGTRAP
2) SIGABRT       7) SIGBUS        8) SIGFPE        9) SIGKILL       10) SIGUSR1
3)  SIGSEGV      12) SIGUSR2      13) SIGPIPE      14) SIGALRM      15) SIGTERM
4)  SIGSTKFLT    17) SIGCHLD      18) SIGCONT      19) SIGSTOP      20) SIGTSTP
5)  SIGTTIN      22) SIGTTOU      23) SIGURG       24) SIGXCPU      25) SIGXFSZ
6)  SIGVTALRM    27) SIGPROF      28) SIGWINCH     29) SIGIO        30) SIGPWR
7)  SIGSYS       34) SIGRTMIN     35) SIGRTMIN+1   36) SIGRTMIN+2   37) SIGRTMIN+3
8)  SIGRTMIN+4   39) SIGRTMIN+5   40) SIGRTMIN+6   41) SIGRTMIN+7   42) SIGRTMIN+8
9)  SIGRTMIN+9   44) SIGRTMIN+10  45) SIGRTMIN+11  46) SIGRTMIN+12  47) SIGRTMIN+13
10) SIGRTMIN+14  49) SIGRTMIN+15  50) SIGRTMAX-14  51) SIGRTMAX-13  52) SIGRTMAX-12
11) SIGRTMAX-11  54) SIGRTMAX-10  55) SIGRTMAX-9   56) SIGRTMAX-8   57) SIGRTMAX-7
12) SIGRTMAX-6   59) SIGRTMAX-5   60) SIGRTMAX-4   61) SIGRTMAX-3   62) SIGRTMAX-2
13) SIGRTMAX-1   64) SIGRTMAX
```

프로세스를 종료해봅시다.

웹 브라우저 파이어폭스를 실행시키고 top으로 확인해보니 firefox 프로세스의 CPU 점유율이 매우 높습니다.

가장 왼쪽 열에 해당 프로세스의 PID를 확인할 수 있습니다.

▼ 그림 3-13 top 명령어로 PID 확인하기
![ ](/img/03/18.jpg)

- - -

Tip

물론 ps 명령으로도 프로세스의 PID를 알아낼 수도 있습니다.

```s
shinjaehun@losttemple:~$ ps -ef | grep firefox
shinjae+  4789  2180  4 11:08 ?        00:02:03 /usr/lib/firefox/firefox
shinjae+  5243  4789 13 11:58 ?        00:00:16 /usr/lib/firefox/plugin-container 
/usr/lib/flashplugin-installer/libflashplayer.so -greomni /usr/lib/firefox/omni.ja 
-appomni /usr/lib/firefox/browser/omni.ja -appdir /usr/lib/firefox/browser 4789 true 
plugin
shinjae+  5283  4706  0 12:00 pts/0    00:00:00 grep --color=auto firefox
```

- - -

프로세스를 종료하기 위해 kill -`[신호][PID]` 번호 형식으로 입력합니다.

kill은 이름과 달리 프로세스를 죽이기 위해서만 사용되지 않습니다.

실행 중인 프로세스에 시스템 신호를 보내 프로세스 상태를 변경하는 것이 kill의 목적입니다.

기본값인 15번 신호는 프로세스를 종료하는 SIGTERM입니다.

아무 옵션 없이 kill을 실행하면 대부분의 정상적인 프로세스들은 신호를 받고 자동으로 종료합니다.

```s
shinjaehun@losttemple:~$ kill 4789
```

프로세스가 종료되었는지 다시 ps 명령으로 확인합니다.

```s
shinjaehun@losttemple:~$ ps -ef | grep firefox
shinjae+  5358  4706  0 12:01 pts/0    00:00:00 grep --color=auto firefox
```

대부분의 프로세스는 SIGTERM 신호로 종료되지만 종료되지 않는 경우도 있습니다.

이럴 때 9번 신호인 SIGKILL을 사용합니다.

SIGKILL을 사용하면 프로세스를 강제로 종료시킵니다.

```s
shinjaehun@losttemple:~$ kill -9 4789
```

1번 신호 SIGHUP은 리눅스 서버를 운영하는 데 유용한 신호입니다.

SIGHUP 신호는 프로세스를 멈추지 않고 다시 실행할 수 있습니다.

환경 설정을 변경하여 서비스를 다시 실행할 때 사용 가능합니다.

```s
shinjaehun@losttemple:~$ kill -1 4789
```

#### 프로세스를 어디에서 실행하는가?

프로세스는 포그라운드 또는 백그라운드에서 실행됩니다.

명령을 실행하여 프로세스가 종료될 때까지 기다리는 포그라운드, 기다리지 않는 백그라운드가 있습니다.

추가 입력 과정 없이 프로세스를 오랫동안 실행해야 한다면 프로세스가 종료될 때까지 다른 작업을 처리할 수 있도록 해당 프로세스를 백그라운드로 보낼 수 있습니다.

프로세스를 백그라운드로 보내 처리하려면 실행 명령 뒤에 `&` 기호를 붙입니다.

find 명령을 백그라운드로 실행시켜 봅니다.

명령을 실행하면 명령이 실행되자마자 프롬프트가 출력되면서 다른 명령을 수행할 수 있게 됩니다.

a*는 a로 시작하는 모든 파일을 의미합니다.

이때 나오는 번호는 해당 프로세스의 PID를 의미합니다.

```s
shinjaehun@losttemple:~$ sudo find -name a* &
[1] 6826
```

ps로 확인하면 find 명령이 아직 실행 중이라는 사실을 알 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -ef | grep find
root      6826  4347  1 16:10 pts/0    00:00:00 sudo find -name a*
shinjae+  6828  4347  0 16:10 pts/0    00:00:00 grep --color=auto find
```

kill로 백그라운드에서 실행 중인 프로세스를 종료합니다.

ps로 프로세스가 종료된 상태를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ sudo kill -9 6826
[1]+  죽었음             sudo find -name a*
shinjaehun@losttemple:~$ ps -ef | grep find
shinjae+  6848  4347 0  16:12 pts/0    00:00:00 grep --color=auto find
```

- - -

Q `*`가 무엇인가요?

A 임의의 문자를 대체하는 메타문자입니다.

파일들을 Weapon 디렉터리로 파일을 이동해야 하는 상황을 가정해봅시다.

```s
shinjaehun@losttemple:~$ ls
q3_Gauntle q3_Machine_Gun q3_Shotgun q3_Grenade_Launcher q3_Rocket_Launcher
q3_Rail_Gun q3_Plasma_Gun q3_Lighting_Gun q3_Flame_Thrower q3_BFG Weapon
```

파일을 하나씩 삭제하려면 10번의 노력이 필요합니다.

물론 시간과 노력을 들이면 되는 일이지만 더 편리한 방법을 알아두는 것이 좋겠죠?

위의 경우 모든 파일이 `q3_`로 시작하기 때문에 모든 문자를 대체하는 메타문자 `*`를 써서 다음과 같이 명령 한 번에 파일을 옮길 수 있습니다.

```s
shinjaehun@losttemple:~$ mv q3_* Weapon
```

`*`가 모든 문자를 대체하는 반면, 메타문자 `?`는 정확히 한 개의 문자만 대체합니다.

`a*b`는 a로 시작하여 b로 끝나는 모든 이름을 대체하지만, `a?b`는 a로 시작하고 중간에 임의의 문자 하나가 있으며 b로 끝나는 파일을 의미합니다.

다음 명령의 결과를 살펴봅시다.

a*b는 aandb와 anb 둘 다 검색해 내지만 a?b는 aandb는 검색하지 않고 anb만 검색할 것입니다.

```s
shinjaehun@losttemple:~$ find -name a*b
shinjaehun@losttemple:~$ find -name a?b
```

`[]`는 괄호 안에 있는 문자를 대체합니다.

`[A,B,C]_number`는 A나 B, 또는 C로 시작되고 `_number`로 끝나는 파일명 A_number와 B_number, C_number를 검색할 것입니다.

```s
shinjaehun@losttemple:~$ find -name [A,B,C]_number
```

`[]`는 -를 이용해서 대체할 영문자나 숫자의 범위를 지정할 수 있습니다.

이를테면 number[0-9]는 number로 시작해서 0부터 9까지의 숫자가 붙는 문자, number0, number1, ... number9까지를 검색할 수 있습니다.

같은 원리로 문자에 적용해 본다면 [A-C]number는 [A,B,C]_number 같이 사용할 수 있습니다.

```s
shinjaehun@losttemple:~$ find -name number[0-9]
shinjaehun@losttemple:~$ find -name [A-C]_number
```

이때 주의할 것은 `[]` 안에 범위를 지정할 때(모든 영문자라는 의미에서) a-Z까지 대소문자를 섞어 쓴다거나 숫자와 영문자를 섞어 범위를 지정할 수 없다는 점입니다. `[]` 안에는 동일한 성질의 문자 범위만 지정할 수 있습니다.

- - -

### 패키지 관리하기

리눅스 배포 업체는 자기만의 고유한 방식으로 소프트웨어를 관리할 수 있도록 패키지 형태로 묶어 제공합니다.

우분투는 기본적으로 확장자가 deb인 데비안 패키지를 사용합니다.

여기에서는 패키지를 설치하거나 업그레이드, 제거하는 방법을 살펴보겠습니다.

▼ 표 3-5 dpkg 명령

|옵션|설명|
|:---:|:---|
|-i|패키지를 설치하거나 최신 버전으로 업그레이드합니다.|
|-r|설정 파일은 그대로 두고 패키지를 삭제합니다.|
|-P|패키지와 함께 설정 파일까지 모두 삭제합니다.|
|-C|패키지가 제대로 설치되었는지 확인합니다.|
|-s|패키지 상태 정보를 출력합니다.|
|-L|패키지에 들어 있는 파일과 경로를 보여줍니다.|
|-l `[패턴]`|패턴과 일치하는 패키지를 보여줍니다.|

**1.** 웹 브라우저를 실행해서 우분투 패키지 웹 사이트([http://packages.ubuntu.com](http://packages.ubuntu.com))에 접속합니다. 우분투에서 사용 가능한 패키지를 공식적으로 제공하는 웹 사이트입니다. 우분투 버전별로 패키지를 선택하거나 키워드로 검색 가능합니다. 하단의 ‘Keyword’에 ‘w3m’이라고 입력한 후 `[Search]`를 클릭합니다.

▼ 그림 3-14 우분투 패키지 웹 사이트
![ ](/img/03/19.jpg)

**2.** 14.04LTS 버전에 해당하는 패키지를 검색했습니다. ‘trusty(14.04LTS)’ 링크를 클릭합니다.

▼ 그림 3-15 trusty (14.04LTS) 링크
![ ](/img/03/20.jpg)

**3.** 설치에 필요한 다른 패키지 목록과 버전 정보를 비롯하여 해당 패키지에 대한 정보를 확인할 수 있습니다.

페이지의 하단에 있는 `Download` 항목에서 패키지를 설치하려는 시스템의 아키텍처(‘i386’ 선택)를 선택해서 클릭합니다.

▼ 그림 3-16 i386 선택
![ ](/img/03/21.jpg)

- - -

Tip

i386과 amd64는 x86 아키텍처로 각각 32비트 운영체제와 64비트 운영체제를 의미합니다.

- - -

**4.** 패키지를 다운로드할 미러 사이트를 선택합니다.

[http://kr.archive.ubuntu.com/ubuntu](http://kr.archive.ubuntu.com/ubuntu)를 클릭하고 패키지 파일 전송을 시작합니다.

다른 적당한 주소를 선택해도 됩니다.

![ ](/img/03/22.jpg)

**5.** ‘파일 저장’을 선택하고 `[확인]`을 클릭합니다.

파일 용량이 많지 않아서 빨리 받을 수 있을 것입니다.

▼ 그림 3-18 파일 저장
![ ](/img/03/23.jpg)

**6.** 받은 파일은 사용자 홈 디렉터리의 ‘다운로드’ 디렉터리에 저장됩니다.

cd와 ls 명령으로 확인해봅니다.

```s
shinjaehun@losttemple:~$ cd 다운로드
shinjaehun@losttemple:~/다운로드$ ls
w3m_0.5.3-15_i386.deb
...
```

- - -

Tip

데스크탑 환경에서는 터미널에서 `[사용자 홈 디렉터리]/다운로드`로 이동해야 하므로 한글/영문 전환이 필요합니다.

- - -

**7.** dpkg -i 명령으로 패키지를 설치합니다.

패키지 설치는 시스템을 변경하는 작업으로 루트 권한을 필요로 합니다.

```s
shinjaehun@losttemple:~/다운로드$ sudo dpkg -i w3m_0.5.3-15_i386.deb
```

**8.** w3m은 텍스트 웹 브라우저입니다.

많은 사람들이 사용하는 웹 브라우저인 인터넷 익스플로러, 파이어폭스, 구글 크롬처럼 화려한 그래픽을 보여주지는 못하지만, 나름 텍스트 환경에서 인터넷 브라우저 구실을 합니다.

w3m으로 구글 검색 페이지에 접속합니다.

```s
shinjaehun@losttemple:~/다운로드$ w3m www.google.com
```

**9.** w3m으로 접속한 구글 검색 페이지입니다.

w3m을 종료하려면 q를 누릅니다. ‘Do you want to exit w3m? (y/n)’이라는 질문이 나오면 `[y]`를 누르면 됩니다.

▼ 그림 3-19 w3m으로 접속한 구글 검색 페이지
![ ](/img/03/24.jpg)

**10.** dpkg가 만능은 아닙니다.

이번에는 openttd라는 패키지를 검색해서 다운로드해봅시다.

```s
shinjaehun@losttemple:~/다운로드$ ls
openttd_1.3.3-1build1_i386.deb
```

- - -

Tip

패키지를 검색해서 다운로드하는 과정은 w3m 패키지를 받는 과정과 동일합니다.

- - -

**11.** dpkg -i 명령으로 패키지 설치를 시도하면 패키지 의존 문제로 실패합니다.

오류 메시지를 확인하면 openttd 패키지를 설치하려고 하는데 libsdl1.2debian와 openttd-data 패키지가 없어서 설치에 실패했음을 알 수 있습니다.

그럼 이제 libsdl1.2debian와 openttd-data 패키지를 같은 방법으로 내려받아야 합니다.

만일 해당 패키지에 의존 문제가 발생하면 또 다른 패키지를 검색해서 설치하는 악순환이 반복될 수밖에 없습니다.

```s
shinjaehun@losttemple:~/다운로드$ sudo dpkg -i openttd_1.3.3-1build1_i386.deb
Selecting previously unselected package openttd.
(데이터베이스 읽는 중 ...현재 166540개의 파일과 디렉터리가 설치되어 있습니다.)
Preparing to unpack openttd_1.3.3-1build1_i386.deb ...
Unpacking openttd (1.3.3-1build1) ...
dpkg: dependency problems prevent configuration of openttd:
 openttd 패키지는 다음 패키지에 의존: libsdl1.2debian (>= 1.2.11): 하지만:
  libsdl1.2debian 패키지는 설치하지 않았습니다.
 openttd 패키지는 다음 패키지에 의존: openttd-data (= 1.3.3-1build1): 하지만:
  openttd-data 패키지는 설치하지 않았습니다.

dpkg: error processing package openttd (--install):
 의존성 문제 - 설정하지 않고 남겨둠
Processing triggers for gnome-menus (3.10.1-0ubuntu2) ...
Processing triggers for desktop-file-utils (0.22-1ubuntu1) ...
Processing triggers for bamfdaemon (0.5.1+14.04.20140409-0ubuntu1) ...
Rebuilding /usr/share/applications/bamf-2.index...
Processing triggers for mime-support (3.54ubuntu1) ...
처리하는데 오류가 발생했습니다:
openttd
```

**12.** 일단 dpkg -r 명령으로 앞서 불안전하게 설치된 openttd 패키지를 삭제합니다.

```s
shinjaehun@losttemple:~/다운로드$ sudo dpkg -r openttd
```

#### apt로 패키지 관리하기

해당 패키지와 의존 관계에 있는 패키지가 필요할 때마다 사용자가 일일이 찾아서 패키지를 설치하는 일은 매우 번거롭습니다.

이러한 불편함을 해결하기 위해 도입된 것이 패키지 저장소(package repository)입니다.

개발자가 새로 만든 패키지를 패키지 저장소에 올리면 누구나 패키지 저장소에 접근해서 이를 내려받아 설치할 수 있고, 필요한 패키지를 자동으로 검색해서 함께 설치해준다면 패키지 관리가 훨씬 쉬워질 것입니다.

패키지 저장소에서 필요한 패키지를 검색, 다운로드, 설치, 업그레이드하는 가장 기본적인 도구는 apt(advance package tool)입니다.

일반적으로 apt로 패키지를 설치하는 과정은 다음과 같습니다.

➊ 설치하려는 패키지가 저장되어 있는 패키지 저장소의 주소를 소스 리스트인 /etc/apt/sources.list에 저장합니다.

➋ ‘apt-get update’로 패키지 저장소에서 패키지 목록을 받아옵니다.

➌ ‘apt-cache search `[패턴]`’으로 설치하려는 패키지를 찾습니다.

➍ ‘atp-get install `[패키지]`’로 패키지를 설치합니다.

apt-get은 패키지를 내려받고 설치하는 명령입니다. apt-get `[명령][옵션][패키지]` 형식으로 입력합니다.

사용 가능한 apt-get 명령과 옵션은 다음과 같습니다.

▼ 표 3-6-1 apt-get 하위 명령
|명령|설명|
|:---:|:---|
|update|sources.list에서 패키지 목록을 얻어옵니다. 패키지를 설치하기 전에는 ‘apt-get update’로 패키지 저장소의 패키지 목록을 갱신해야 합니다.|
|upgrade|모든 패키지의 최신 업데이트를 검색하여 설치합니다.|
|install|패키지를 설치합니다. 다른 패키지가 추가로 필요하다면 이를 함께 설치할 것인지 물어볼 것입니다. 설치되어 있는 패키지 버전이 낮을 경우 이를 업그레이드합니다.|
|remove|패키지를 삭제합니다.|
|autoclean|불안전하게 다운로드된 패키지나 오류가 발생한 패키지를 삭제하고자 할 때 실행합니다.|

▼ 표 3-6-2 apt-get 옵션

|옵션|설명|
|:---:|:---|
|-d|패키지를 설치하지는 않고 패키지 저장소에서 내려받기만 합니다.|
|-f|의존성 문제가 생겼을 때 시스템을 정상적으로 만듭니다.|
|-u|업그레이드된 패키지를 보여줍니다.|
|--purge|설정 파일까지 모두 삭제합니다.|
|--reinstall|이미 설치된 패키지 혹은 새 버전의 패키지를 다시 설치합니다.|

apt-cache는 패키지를 찾고 그에 대한 정보를 알고 싶을 때 사용하는 명령입니다.

apt-cache `[명령][옵션][패키지]` 형식으로 입력합니다.

apt-cache에서 자주 사용하는 명령은 다음과 같습니다.

▼ 표 3-7 apt-cache 하위 명령

|명령|설명|
|:---:|:---|
|search`[패턴]`|‘apt-get update’로 가져온 패키지 목록에서 `[패턴]`에 해당하는 패키지를 검색합니다.|
|showpkg|패키지 의존 관계를 보여줍니다.|
|stats|시스템에 설치되어 있는 전체 패키지 정보를 요약해서 보여줍니다.|
|show|해당 패키지에 대한 구체적인 정보를 보여줍니다.|

apt-get update 명령으로 소스 리스트를 갱신합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
```

apt-cache search 명령으로 패키지 이름을 검색합니다.

‘ttd’라는 이름으로 검색하니 필요한 패키지 이름 openttd가 검색되었습니다.

```s
shinjaehun@losttemple:~$ apt-cache search ttd
openttd - reimplementation of Transport Tycoon Deluxe with enhancements
...
```

apt-get install 명령으로 openttd 패키지를 설치합니다.

패키지 설치는 루트 권한을 요구하므로 sudo가 필요합니다.

중간에 apt-get은 필요한 패키지를 검색하고 해당 패키지와 함께 의존 관계에 있는 패키지를 설치할지 여부를 묻습니다.

Y를 누르면 패키지 설치가 진행됩니다.

```s
shinjaehun@losttemple:~$ sudo apt-get install openttd
```

- - -

Tip

설치 메시지를 확인해보면 openttd 패키지를 설치하는 과정에서 추가로 esound-common, libaudiofile1, libesd0, openttd-data, openttd-opengfx, openttd-openmsx, ruby-rgen, timidity, timidity-daemon을 설치하고 있습니다.

- - -

소스 리스트에 등록된 패키지 저장소에서 패키지를 다운로드한 뒤 압축을 해제하여 패키지를 설치합니다.

설치가 끝나고 openttd를 실행하면 OpenTTD 프로그램이 실행됩니다.

```s
shinjaehun@losttemple:~$ openttd
```

- - -

Tip

OpenTTD(Open Transport Tycoon)는 운송 시설을 기반으로 한 경영 시뮬레이션 게임입니다.

![ ](/img/03/25.jpg)

- - -

이번에는 apt-get remove 명령으로 패키지를 삭제해봅시다.

일단 apt-get remove는 지정한 패키지만 삭제합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get remove openttd
```

앞서 제거한 패키지와 의존 관계에 있어 더 이상 필요 없게 된 패키지들은 apt-get autoremove 명령으로 삭제할 수 있습니다.

```s
shinjaehun@losttemple:~$ sudo apt-get autoremove
...
계속하시겠습니까? [Y/n] Y
...
```

- - -

Tip

메시지를 확인해보면 openttd 패키지를 설치하는 과정에서 추가로 설치한 9개의 패키지를 삭제하고 있습니다.

- - -

### 네트워크 관리하기

리눅스 시스템은 네트워크 서버로 널리 사용됩니다.

그만큼 사용 가능한 네트워크 관리 명령도 매우 다양합니다.

리눅스가 제공하는 네트워크 서비스에 대한 설명은 둘째마당에서 본격적으로 다루기로 하고 여기에서는 주로 시스템의 네트워크 설정을 변경하거나 네트워크 상태를 진단 및 점검하는 도구들을 살펴봅니다.

#### 네트워크 인터페이스 다루기

트워크 인터페이스를 관리하는 ifconfig에 대해 살펴봅시다.

ifconfig는 시스템에 설치된 네트워크 인터페이스 정보를 확인하거나 수정하는 명령입니다.

ifconfig `[인터페이스][옵션]` 형식으로 입력하며 아무 옵션 없이 ifconfig를 입력하면 현재 설정된 네트워크 인터페이스 상태를 보여줍니다.

lo는 루프백 인터페이스로 자기 자신과 통신하는 데 사용하는 가상 장치이며, 흔히 랜카드라고 불리는 유선 네트워크 인터페이스는 eth0, 무선 네트워크 인터페이스는 wlan0이라고 이름이 붙습니다.

IP 주소는 호스트에 하나씩 부여되는 것이 아니라 네트워크 인터페이스에 할당되기 때문에 각 네트워크 인터페이스마다 다른 IP 주소를 할당할 수 있습니다.

```s
shinjaehun@losttemple:~$ ifconfig

eth0      Link encap:Ethernet HWaddr 08:9e:01:d3:f9:dc
          inet addr:192.168.0.2 Bcast:192.168.0.255 Mask:255.255.255.0
          inet6 addr: fe80::a9e:1ff:fed3:f9dc/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:32902 errors:0 dropped:0 overruns:0 frame:0
          TX packets:27546 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:31336462 (31.3 MB) TX bytes:9546945 (9.5 MB)
          Interrupt:17

lo        Link encap:Local Loopback
          inet addr:127.0.0.1 Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING MTU:65536 Metric:1
          RX packets:153586 errors:0 dropped:0 overruns:0 frame:0
          TX packets:153586 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:17198171 (17.1 MB) TX bytes:17198171 (17.1 MB)
```

각 네트워크 인터페이스의 필드는 다음을 의미합니다.

• HWaddr: 네트워크 인터페이스의 하드웨어 주소(MAC Address)

• inetaddr: 네트워크 인터페이스에 할당된 IP 주소

• Bcast: 브로드캐스트 주소

• Mask: 넷마스크

• MTU: 네트워크 최대 전송 단위(Maxium Transfer Unit)

• RXpackets: 받은 패킷 정보

• TXpackets: 보낸 패킷 정보

• collisions: 충돌된 패킷 수

• Interrupt: 네트워크 인터페이스가 사용하는 인터럽트 번호

필요하다면 ifconfig 명령으로 네트워크 인터페이스를 작동시키거나 중지시킬 수 있습니다.

하위 명령 up, down을 추가하여 네트워크 인터페이스를 작동/중지합니다.

네트워크 인터페이스를 작동시키는데 루트 권한이 필요하므로 sudo를 함께 써야 합니다.

예를 들어 eth0을 중지하려면 다음과 같이 입력합니다.

```s
shinjaehun@losttemple:~$ sudo ifconfig eth0 down
```

명령을 실행하면 그래픽 환경에서 ‘연결 끊김 ? 이제 오프라인 상태임’이라는 경고 메시지가 나타날 것입니다.

ifconfig로 확인해보면 eth0이 사라진 것을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ifconfig

lo        Link encap:Local Loopback
          inet addr:127.0.0.1 Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING MTU:65536 Metric:1
          RX packets:2409 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2409 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:370307 (370.3 KB) TX bytes:370307 (370.3 KB)
```

ifconfig를 이용하면 일시적으로 네트워크 인터페이스의 설정을 변경할 수 있습니다.

다시 네트워크 인터페이스 eth0을 작동시키려면 하위 명령 up을 사용하는데, 옵션으로 IP 주소를 직접 입력해서 IP 주소를 변경할 수 있습니다.

```s
shinjaehun@losttemple:~$ sudo ifconfig eth0 192.168.0.254 up
```

ifconfig로 확인하면 IP 주소가 변경된 것을 확인할 수 있습니다.

이렇게 변경된 내용은 다시 ifconfig로 네트워크 인터페이스 설정을 수정하거나 시스템이 다시 부팅될 때까지 임시로 유지됩니다.

```s
shinjaehun@losttemple:~$ ifconfig

eth0      Link encap:Ethernet HWaddr 08:9e:01:d3:f9:dc
          inet addr:192.168.0.254 Bcast:192.168.0.255 Mask:255.255.255.0
          inet6 addr: fe80::a9e:1ff:fed3:f9dc/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
          RX packets:32902 errors:0 dropped:0 overruns:0 frame:0
          TX packets:27546 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:31336462 (31.3 MB) TX bytes:9546945 (9.5 MB)
          Interrupt:17
...
```

- - -

Tip

ifconfig나 route를 이용해서 네트워크 정보를 수정해도 시스템을 재부팅하면 모든 정보가 원래대로 돌아갑니다.

네트워크 설정 파일에 정의된 내용이 반영되기 때문입니다.

따라서 ifconfig나 route는 관리 목적으로 잠시 네트워크 주소 정보를 변경할 때 사용합니다.

네트워크 설정을 변경하려면 2장의 ‘네트워크 설정하기’에 설명한대로 네트워크 인터페이스 설정 파일을 수정해야 합니다.

- - -

#### 라우팅 테이블 다루기

네트워크를 통해 목적지로 패킷이 전송될 경로를 지정해주는 것을 라우팅이라고 합니다.

리눅스 시스템은 미리 설정되어 있는 라우팅 테이블이라는 지도를 보고 패킷을 어떤 네트워크 인터페이스를 거쳐 목적지로 보낼지 결정합니다.

라우팅 테이블을 확인하거나 설정하는 명령은 route입니다.

옵션 없이 route 명령을 입력하면 현재 설정되어 있는 라우팅 테이블을 확인합니다.

일반적으로 네트워크 설정을 끝난 리눅스 시스템은 라우팅 테이블을 자동으로 생성합니다.

```s
shinjaehun@losttemple:~$ route
Kernel IP routing table
Destination     Gateway        Genmask        Flags Metric Ref   Use Iface
192.168.0.0     *              255.255.255.0  U     0      0       0 eth
```

라우팅 테이블의 각 필드는 다음을 의미합니다.

• Destination: 목적지

• Gateway: 외부 네트워크와 연결하기 위한 게이트웨이 주소

• Genmask: 목적지 네트워크의 넷마스크 주소. 255.255.255.255로 지정되어 있으면 목적지

호스트의 주소, 0.0.0.0으로 지정되어 있으면 기본 게이트웨이 주소를 의미합니다.

• Flags: 해당 경로에 대한 정보를 알려주는 기호. U(up)는 이 경로가 살아있는 상태임을, H(host)는 목적지가 호스트 주소라는 사실을, G(gateway)는 게이트웨이를 향하는 경로를 의미합니다.

• Metric: 목적지 네트워크까지의 거리

• Ref: 경로를 참조한 횟수

• Use: 경로를 탐색한 횟수

• Iface: 패킷이 오가는 데 사용할 네트워크 인터페이스

다시 라우팅 테이블을 살펴보면 이 시스템에서는 192.168.0.1부터 192.168.0.254까지 향하는 패킷은 eth0으로 보낼 수 있지만 그 외에 다른 곳으로는 패킷을 전달할 수 없습니다.

따라서 현재 시스템인 인터넷이 끊긴 상태입니다.

```s
shinjaehun@losttemple:~$ route
Kernel IP routing table
Destination     Gateway       Genmask        Flags Metric Ref    Use Iface
192.168.0.0     *             255.255.255.0  U     0      0        0 eth0
```

- - -

Tip

네트워크 연결 상태 진단 도구인 ping을 사용하면 인터넷 접속이 불가능하다는 사실을 알 수 있습니다.

- - -

따라서 라우팅 테이블에 패킷을 인터넷으로 보낼 수 있는 장치의 위치, 게이트웨이(gateway)를 알려줘야 합니다.

라우팅 테이블에 기본 게이트웨이를 추가하는 방법은 다음과 같습니다.

```s
shinjaehun@losttemple:~$ sudo route add default gw 192.168.0.1
```

바뀐 라우팅 테이블을 살펴보면 192.168.0.0 네트워크가 아닌 다른 네트워크로 나가는 패킷은 모두 default로 지정되어 있는 192.168.0.1로 eth0을 통해 보내게 됩니다.

```s
shinjaehun@losttemple:~$ route
Kernel IP routing table
Destination     Gateway       Genmask        Flags Metric Ref   Use Iface
default         192.168.0.1   0.0.0.0        UG    0      0       0 eth0
192.168.0.0     *             255.255.255.0  U     0      0       0 eth0
```

ping으로 인터넷 연결 상태를 확인해볼 수 있습니다.

시스템을 다시 부팅하면 네트워크 인터페이스 설정 파일의 주소 정보가 반영되므로 네트워크 설정은 모두 원래대로 돌아올 것입니다

```s
shinjaehun@losttemple:~$ ping kldp.org
PING kldp.org (211.237.1.231) 56(84) bytes of data.
64 bytes from ipc.kldp.org (211.237.1.231): icmp_req=1 ttl=54 time=20.9 ms
64 bytes from ipc.kldp.org (211.237.1.231): icmp_req=2 ttl=54 time=16.7 ms
64 bytes from ipc.kldp.org (211.237.1.231): icmp_req=3 ttl=54 time=17.0 ms

--- kldp.org ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 16.713/18.248/20.938/1.914 ms
```

- - -

Q 라우팅 테이블을 통해 패킷을 전달하는 원리를 알려주세요.

A 패킷이 라우팅 테이블을 통해서 어떻게 전달되는지 살펴봅시다.

두 조건이 모두 참일 때는 결과도 참이지만 조건 중에서 하나라도 거짓이 있다면 결과도 거짓이 된다는 논리 연산을 논리 곱, AND 연산이라고 합니다.

참을 1, 거짓을 0으로 표현하면 AND 연산의 결과는 1과 1일 때 1, 1과 0일 때 0, 0과 1일 때 0, 0과 0일 때 0, 4가지 경우가 있을 수 있습니다.

이제 본론으로 돌아가서 라우팅 테이블을 분석해보겠습니다.

리눅스 서버의 IP 주소는 192.168.0.195이며 같은 네트워크 안에 있는 호스트 192.168.0.196에 패킷을 전달한다고 가정해봅시다.

패킷에는 목적지 IP 주소 정보가 있습니다.

리눅스 서버는 라우팅 테이블을 통해 패킷을 어디로 보낼지 결정합니다.

라우팅 테이블의 맨 처음 행, Genmask 값인 255.255.255.0을 읽어 패킷의 목적지의 IP 주소 192.168.0.196과 AND 연산합니다.

Genmask 값을 컴퓨터는 이진수로 환산하면 11111111.11111111.11111111.00000000이 되는데, 이 값과 192.168.0.196을 AND 연산하게 되면 192.168.0.0이 됩니다.

Destination   Gateway   Genmask        Flags Metric Ref   Use Iface
192.168.0.0   *         255.255.255.0  U     0      0       0 eth0

AND 연산 결과 값이 그 행에 있는 Destination 값과 비교하여 같은 값이면 그 행의 Iface가 가리키는 네트워크 인터페이스로 보냅니다.

값이 일치하기 때문에 패킷은 네트워크 인터페이스로 지정되어 있는 eth0을 통해 보내집니다.

일치하지 않으면 다음 행의 Genmask 값을 읽어서 같은 작업을 되풀이하고 어느 행과도 일치하지 않는다면 패킷을 보내지 않습니다.

- - -

#### 연결 상태 진단 도구 ping

ping은 네트워크 연결 상태를 점검하는 명령입니다.

목적지에 ICMP(Internet Control Message Protocol) 패킷을 보내고 되돌아오는지 확인하여 연결 상태를 진단합니다.

ping `[옵션]` 목적지 주소 형식으로 입력하며 목적지 주소에는 연결 상태를 확인하려는 대상의 주소를 입력합니다.

IP 주소와 사람이 이해하기 쉬운 도메인 주소 모두 사용할 수 있습니다.

IP 주소가 192.168.0.1 인 호스트가 네트워크에 연결되어 있는 상태라면 일정한 시간 간격으로 응답을 받고 있다는 메시지가 화면에 출력될 것입니다.

메시지를 보면 알 수 있듯이, 목적지로부터 받는 응답 패킷의 크기는 64바이트이며 TTL 값은 64, 걸린 시간(time)이 밀리초(1/1000초) 단위로 표시됩니다.

이때 `Ctrl + c` 를 누르면 요청 패킷 전송이 중단됩니다.

그리고 지금까지 결과를 보고합니다.

— 192.168.0.1 ping statistics —

아래 정보를 보니, 요청 패킷을 다섯 개 보내 응답 패킷을 다섯 개 받았으며 손실이 없었고, 총 3997밀리초(ms)가 걸렸음을 알 수 있습니다.

```s
shinjaehun@losttemple:~$ ping 192.168.0.1
PING 192.168.0.1 (192.168.0.1) 56(84) bytes of data.
64 bytes from 192.168.0.1: icmp_req=1 ttl=64 time=0.680 ms
64 bytes from 192.168.0.1: icmp_req=2 ttl=64 time=0.598 ms
64 bytes from 192.168.0.1: icmp_req=3 ttl=64 time=0.579 ms
64 bytes from 192.168.0.1: icmp_req=4 ttl=64 time=0.503 ms
64 bytes from 192.168.0.1: icmp_req=5 ttl=64 time=0.593 ms
^C
--- 192.168.0.1 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 3997ms
rtt min/avg/max/mdev = 0.503/0.590/0.680/0.062 ms
```

- - -

Tip

ICMP 패킷을 그대로 놔두면 인터넷은 네트워크 연결 상태를 확인하기 위해 여기저기서 보내는 ICMP 패킷으로 가득 차버리고 말 것입니다.

이를 막기 위해 ping은 ICMP 패킷이 네트워크에서 자동적으로 소멸하는 장치를 마련했습니다.

ICMP 패킷에는 TTL(Time To Live)이라는 항목이 있습니다.

TTL 값은 네트워크를 지날 때마다 1씩 줄어듭니다 (구체적으로 얘기하자면 네트워크 게이트웨이 역할을 수행하는 라우터를 거칠 때마다).

TTL 항목이 0이 되면 ICMP 패킷은 자동으로 소멸합니다.

- - -

도메인 주소로 ping 명령을 실행하면 DNS 서버에 질의해 대상 컴퓨터의 IP 주소를 알아내고 ping을 실시합니다.

해당 호스트가 ping에 대한 응답을 막아놓을 수도 있으니 주의해야 합니다 

- - -

Tip

네이버의 경우, ping naver.com을 입력하면 응답이 돌아오지 않습니다.

naver.com에서 ping에 응답하지 않도록 설정했기 때문입니다.

- - -

kldp.org로 테스트해볼까요?

```s
shinjaehun@losttemple:~$ ping kldp.org
```

-i 옵션은 요청 패킷을 전송하는 대기 시간을 설정합니다.

다음 명령은 5초 간격으로 패킷을 전송할 것입니다.

```s
shinjaehun@losttemple:~$ ping -i 5 www.kldp.org
```

-t로 TTL 값을 0에서 255까지 변경할 수 있습니다.

다음과 같이 ICMP 패킷의 TTL 값을 너무 작게 설정할 경우 패킷이 목적지에 닿기 전에 자동으로 소멸해버린다는 사실을 알 수 있습니다.

```s
shinjaehun@losttemple:~$ ping -t 10 www.kldp.org
PING kldp.org (211.237.1.231) 56(84) bytes of data.
From 211.233.43.118 icmp_seq=1 Time to live exceeded
...
```

-R 옵션은 요청 패킷이 목적지까지 도달하는 데 거치는 호스트의 IP 주소를 차례로 보여줍니다.

목적지까지 경로에 문제가 있는지 확인할 때 유용한 옵션입니다.

```s
shinjaehun@losttemple:~$ sudo ping -R www.kldp.org
PING kldp.org (211.237.1.231) 56(124) bytes of data.
64 bytes from ipc.kldp.org (211.237.1.231): icmp_req=1 ttl=54 time=53.1 ms
RR:     losttemple.linuxmaster.com (192.168.0.254)
        122.202.142.43
        122.202.128.30
        211.180.25.106
        1.213.86.2
        172.30.62.109
        172.30.62.102
        172.30.11.6
        172.30.11.42
```

- - -

Q ping으로 연결 상태를 진단하는 절차를 알려주세요.

A ifconfig 결과 네트워크 인터페이스도 정상적으로 올라와 있고 route 결과 기본 게이트웨이로 가기 위한 라우팅 테이블도 설정되어 있다면 ping으로 연결 상태를 진단해야 합니다.

ping을 전략적으로 사용하면 문제의 원인을 알아낼 수 있습니다.

테스트하는 시스템의 IP 주소는 192.168.0.7이며 게이트웨이 주소는 192.168.0.1, DNS 주소는 8.8.8.8이라고 가정합니다.

먼저 기본 게이트웨이에 ping을 합니다.

기본 게이트웨이와 연결이 끊어지면 IP 주소 정보를 받아올 수도 없고 외부로 패킷을 보내거나 받을 수도 없습니다.

```s
shinjaehun@losttemple:~$ ping 192.168.0.1
```

내부에 다른 호스트가 존재한다면 해당 호스트를 대상으로 ping합니다.

내부 네트워크 연결 상태를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ping 192.168.0.5
```

DNS 서버의 IP 주소로 ping을 합니다.

외부와 연결 상태를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ping 8.8.8.8
```

외부에 존재하는 호스트에 도메인 주소로 ping합니다.

```s
shinjaehun@losttemple:~$ ping kldp.org
```

- - -

#### netstat로 네트워크 정보 확인하기

netstat는 리눅스 네트워크 상태를 종합적으로 보여주는 명령입니다.

아무 옵션 없이 netstat 명령을 내리면 현재 리눅스 서버의 열려 있는 모든 소켓에 대한 정보를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ netstat
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address          Foreign Address      State
Active UNIX domain sockets (w/o servers)
Proto RefCnt Flags       Type       State       I-Node   Path
unix  22     [ ]         DGRAM                  8276     /dev/log
unix  3      [ ]         STREAM     CONNECTED   19569
...
```

-i 옵션을 사용하면 네트워크 인터페이스를 통해 주고 받은 패킷에 대한 정보를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ netstat -i

Kernel Interface table
Iface   MTU Met   RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0       9001 0    119115      0      0 0         49080      0      0      0 BMRU
lo        65536 0      3401      0      0 0          3401      0      0      0 LRU
```

-nr 옵션을 사용하면 라우팅 테이블 정보를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ netstat -nr

Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         172.31.16.1     0.0.0.0         UG        0 0          0 eth0
172.31.16.0     0.0.0.0         255.255.240.0   U         0 0          0 eth0
```

프로토콜에 따른 패킷 통계를 확인하기 위해서는 -s 옵션을 사용합니다.

어떤 네트워크 프로토콜이 제대로 동작하지 않는지, 쓸모없는 프로토콜이 동작되고 있는 상태는 아닌지 점검할 수 있습니다.

```s
shinjaehun@losttemple:~$ netstat -s

Ip:
    102499 total packets received
    2 with invalid addresses
    0 forwarded
    0 incoming packets discarded
    102371 incoming packets delivered
    50774 requests sent out
    48 outgoing packets dropped
    129 dropped because of missing route
Icmp:
    165 ICMP messages received
    ...
```

netstat에서 가장 유용한 옵션은 -atp입니다.

특히 네트워크 서비스를 제공할 때 유용한데, 열려 있는 포트 번호와 데몬, 그리고 그 포트를 사용하는 프로그램에 대한 정보를 상세히 점검할 수 있습니다.

이 옵션을 통해서 불필요하게 열려 있는 포트나 알려지지 않은 포트가 있다면 이를 확인하여 포트를 닫고 프로그램을 중지시켜야 합니다.

```s
shinjaehun@losttemple:~$ sudo netstat -atp

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address          Foreign Address     State     PID/Program name
tcp        0      0 losttemple:domain      *:*                 LISTEN    1067/dnsmasq
tcp        0      0 localhost:ipp          *:*                 LISTEN    6319/cupsd
tcp        0      0 *:telnet               *:*                 LISTEN    8739/inetd
tcp6       0      0 ip6-localhost:ipp      [::]:*              LISTEN    6319/cupsd
```

- - -

Tip

포트는 네트워크 서비스의 논리적인 출입구를 의미합니다.

서버는 네트워크 서비스의 포트(목적지 포트)를 열어 놓고 클라이언트의 요청을 대기합니다.

클라이언트 역시 마찬가지로 포트(출발지 포트)를 통해 서버에 네트워크 서비스를 요청합니다.

네트워크 서비스가 끝나 사용할 필요가 없게 되면 서버와 클라이언트 양쪽 모두 포트를 닫습니다.

모든 컴퓨터에는 65,356개의 포트를 사용할 수 있으며 중요한 몇몇의 포트는 예약되어 있습니다.

이러한 포트를 ‘잘 알려진(well-known)’ 포트 번호라고 하며 1번부터 1,023번까지 지정되어 있습니다.

TCP/IP 네트워크에서 http 프로토콜은 80, telnet은 23, ftp는 21을 표준 포트로 사용합니다.

- - -

### 서비스 제어하기

이번에는 서비스를 제어하는 방법을 살펴봅니다.

서비스를 제어하려면 리눅스 부팅 과정과 런레벨에 대한 이해가 필요합니다.

네트워크 서비스를 시작하기 위한 방법, 런레벨 제어하는 방법도 함께 살펴봅니다.

#### 리눅스 부팅 과정과 런레벨

먼저 리눅스가 부팅하는 과정부터 살펴보겠습니다.

컴퓨터에 전원을 올리면 컴퓨터의 제어를 맡는 기본 입출력 시스템 (Basic Input Output System, BIOS), 바이오스가 하드디스크 같은 부팅 가능한 장치의 처음 영역을 읽습니다.

이 부분은 마스터 부트 레코더 (Master Boot Record 즉, MBR)이라고 불리는 512바이트의 작은 영역으로 우분투 설치 과정에서 깔아둔 부트 로더가 MBR에 들어 있습니다.

부트 로더는 부팅할 운영체제의 커널이 디스크의 어디에 있는지 알고 있기 때문에 커널을 메모리로 불러옵니다.

- - -

Tip

커널은 운영체제의 핵심으로 운영체제 가장 밑바닥에서 시스템의 가장 기본적인 작업을 처리하는 부분입니다.

- - -

메모리에 적재된 커널은 하드디스크의 루트 파티션을 찾아서 마운트하고 하드웨어를 감지하여 사용할 수 있게 만듭니다.

이 과정이 끝난 다음 리눅스 커널은 모든 프로세스의 부모 역할을 하는 PID 1번, init를 실행시킵니다.

init는 사용자가 시스템을 사용할 수 있는 환경을 만들어 주는데, 이 과정을 시스템 초기화라고 하며 init를 시스템 초기화 프로세스라고 합니다.

ps 명령으로 init를 확인해볼 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -ef
UID        PID  PPID  C STIME TTY   TIME      CMD
root         1     0  0 09:32 ?     00:00:03  /sbin/init
```

init는 런레벨에 따라 예약된 프로세스를 실행시킵니다.

시스템을 사용하다보면 시스템 점검을 위해서 네트워크 기능을 해제하거나 그래픽 환경 대신 텍스트 환경으로 부팅할 수 있는데,

런레벨(Run Level)은 이러한 필요에 따라 시스템을 다른 환경으로 부팅할 수 있도록 구분해둔 설정을 의미합니다.

우분투에는 런레벨이 0부터 6까지 있습니다.

`0`은 시스템 종료, `1`은 단일 사용자 모드, `2`는 그래픽 다중 사용자 모드, `6`은 시스템 재부팅 환경을 의미합니다.

기본값은 2이며 3, 4, 5는 2와 동일한 환경입니다.

runlevel 명령으로 여러분이 사용하고 있는 시스템의 런레벨을 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ runlevel
N 2
```

#### 네트워크 서비스 시작하기

다른 프로그램에게 서비스를 요청하는 프로그램을 클라이언트, 요청에 응답하는 프로그램을 서버라고 합니다.

서버는 사용자가 직접 제어하지 않고 백그라운드에서 실행되면서 여러 작업을 하는 처리해야 합니다.

이러한 시스템 프로세스를 데몬(daemon)이라고 하며 일반적으로 서버는 데몬으로 동작합니다.

네트워크 시간 프로토콜(Network Time Protocol, NTP)을 대상으로 리눅스에서 네트워크 서비스를 제공하는 실습을 해보겠습니다.

NTP는 인터넷을 통해 시스템 시간을 동기화하기 위한 서비스로 시간 서버로부터 시간 정보를 받아와서 시스템 시간을 조정합니다.

apt-get update 명령으로 패키지 정보를 갱신하고 apt-get install 명령으로 NTP 서버인 ntpd (NTP 데몬)를 설치합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
shinjaehun@losttemple:~$ sudo apt-get install ntp
```

일반적으로 루트 권한으로 서비스를 시작합니다.

sudo service `[서비스 이름][옵션]` 형식으로 입력하며 NTP 서비스를 시작하려면 다음과 같이 start 옵션을 붙여야 합니다.

```s
shinjaehun@losttemple:~$ sudo service ntp start
```

서버의 환경 설정을 변경하려면 vi를 비롯한 텍스트 편집기로 설정 파일을 수정해야 합니다.

NTP 서버의 환경 설정 파일은 /etc/ntp.conf입니다.

```s
shinjaehun@losttemple:~$ sudo vi /etc/ntp.conf
```

- - -

Tip

vi 사용법은 ‘3.8 텍스트 에디터 vi 다루기’에서 설명하고 있습니다.

- - -

기본적으로 시간 정보를 받아오는 서버의 주소는 [ubuntu.pool.ntp.org](ubuntu.pool.ntp.org)로 정해져 있는데 다음과 같이 행 처음에 ‘#’ 표시를 달아서 주석 처리, 즉 설정 내용을 반영하지 않도록 고쳤습니다.

우리나라 NTP 서버인 [time.bora.net](time.bora.net)의 주소를 입력했고 [ntp.ubuntu.com(ntp.ubuntu.com)도 주석 처리했습니다.

설정 파일 수정이 끝나면 :wq를 입력해서 파일 내용을 저장하고 커맨드라인으로 돌아옵니다.

```s
# Use servers from the NTP Pool Project. Approved by Ubuntu Technical Board
# on 2011-02-08 (LP: #104525). See http://www.pool.ntp.org/join.html for
# more information.

#server 0.ubuntu.pool.ntp.org
#server 1.ubuntu.pool.ntp.org
#server 2.ubuntu.pool.ntp.org
#server 3.ubuntu.pool.ntp.org

server time.bora.net

# Use Ubuntu's ntp server as a fallback.
#server ntp.ubuntu.com
```

ntp 데몬을 재시작해서 수정한 설정 내용을 반영합니다.

restart 옵션을 넣어서 ntp 서비스를 재시작합니다.

```s
shinjaehun@losttemple:~$ sudo service ntp restart
 * Stopping NTP server ntpd                                    [ OK ]
 * Starting NTP server ntpd                                    [ OK ]
```

시스템 프로세스는 백그라운드에서 실행합니다.

ps 명령으로 ntp 데몬이 동작하는 상태를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ps -ef | grep ntp

ntp       8202  3538  0 16:50 ?        00:00:00 /usr/sbin/ntpd -p /var/run/ntpd.pid -g -u 116:125
```

서비스가 제대로 실행되고 있는지 확인해봅시다.

ntpq는 시간 서버의 상태를 조회하는 명령으로 ntp 패키지를 설치하는 과정에서 함께 설치되는 도구입니다.

-p 옵션으로 설정 파일에 등록한 시간 서버 time.bora.net과의 동기화 상태를 확인할 수 있습니다.

```s
shinjaehun@losttemple:~$ ntpq -p

     remote           refid       st t when poll reach delay   offset   jitter
==============================================================================
 time.bora.net    90.1.14.51        2 u    1   64    1  15.527  -35.130  0.000
```

시간이 지나면(약 5분에서 10분쯤 뒤에) 시간 서버 주소 앞에 *가 표시되는데 이는 원격 서버로부터 시간 정보를 동기화하기 시작했음을 알려줍니다.

```s
shinjaehun@losttemple:~$ ntpq -p
     remote           refid     st t when poll reach  delay   offset   jitter
==============================================================================
*time.bora.net    90.1.14.51      2 u   37   64   37   15.050  -48.823   8.679
```

#### 런레벨 제어하기

시스템이 시작하면서 네트워크 서비스가 자동으로 시작되지 않는다면 런레벨 편집기를 이용해서 해당 서비스를 시작하도록 설정할 수 있습니다.

런레벨 편집기로 우분투에서는 sysv-rc-conf라는 도구를 이용합니다.

일단 sysv-rc-conf 패키지를 설치합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get install sysv-rc-conf
```

런레벨 제어는 루트 권한이 필요하므로 sudo 명령으로 sysv-rc-conf를 실행해야 합니다.

```s
shinjaehun@losttemple:~$ sudo sysv-rc-conf
```

뭔가 복잡해 보이긴 하는데 사실은 그렇지도 않습니다.

왼쪽에 있는 ‘service’ 항목의 서비스를 어떤 런레벨에서 실행시킬지 [X], 또는 실행시키지 말지 [ ] 결정하는 게 전부입니다.

방향키로 커서를 움직여 스페이스 바를 눌러 활성 해제 여부를 선택할 수 있습니다.

Ctrl + n을 누르면 다음 페이지로, Ctrl + p를 누르면 이전 페이지로 넘어갑니다.

앞서 살펴보았듯이 우분투의 런레벨 0은 시스템 종료, 1은 단일 사용자 모드, 2는 그래픽 다중 사용자 모드, 6은 시스템 재부팅 환경입니다. 따라서 런레벨 1부터 5까지 서비스 제공 여부를 결정하면 됩니다.

▼ 그림 3-21 런레벨 편집기 sysv-rc-conf
![ ](/img/03/26.jpg)

ntp 서비스를 찾았습니다.

기본적으로 런레벨 2부터 5까지 활성화되어 있기 때문에 그래픽 환경에서 시스템이 부팅하는 과정에서 자동으로 ntp 데몬이 실행될 것입니다.

런레벨 편집을 마치면 q를 눌러 종료합니다.

▼ 그림 3-22 ntp 서비스 실행을 위한 런레벨 편집
![ ](/img/03/27.jpg)

지금까지 비교적 단순한 서비스인 ntp 서버를 어떻게 제어하는지 살펴보았습니다. 원격 접속 서버나 파일 서버, 웹 서버 같은 서비스를 관리하는 절차도 결국 이와 동일합니다.

정리해볼까요?

1. 서비스를 설치합니다.
2. 필요에 따라 환경 설정 파일을 편집합니다.
3. 서비스를 재시작합니다.
4. ps 등으로 서비스가 정상적으로 동작 중인지 확인합니다.
5. 런레벨 편집기로 시스템 시작과 동시에 서비스를 시작하도록 설정합니다.

### 텍스트 에디터 vi 다루기

리눅스의 대표적인 텍스트 에디터인 vi(visual display editor)를 살펴보겠습니다.

vi는 유닉스/리눅스 환경이라면 언제 어디에서나 사용 가능하고, 가볍고 빠르기 때문에 기본적으로 갖춰져 있는 도구 중 하나입니다.

따라서 시스템 관리자 입장에서 반드시 익혀둘 필요가 있습니다.

#### vi 5분 체험하기

우분투의 기본 vi는 에디터의 가장 기본적인 기능만 있어서 사용하기에 불편한 점이 많습니다.

여러 기능이 추가된 향상된 vi(VI iMproved)인 vim을 사용하는 편이 낫습니다.

apt-get 명령으로 패키지 정보를 갱신하고 vim 패키지를 설치합니다.

```s
shinjaehun@losttemple:~$ sudo apt-get update
shinjaehun@losttemple:~$ sudo apt-get install vim
```

설치가 끝나면 vi를 입력합니다.

shinjaehun@losttemple:~$ vi

버전 정보가 한글로 출력됩니다.

텍스트 콘솔 환경에서 실행하면 영문으로 출력될 것입니다.

```s
~
~                            빔 - 향상된 Vi
~
~                               판 7.4.52
~                        by Bram Moolenaar et al.
~       Modified by pkg-vim-maintainers@lists.alioth.debian.org
~                 빔은 소스가 열려 있고 공짜로 배포됩니다
~
~                            빔 사용자로 등록하세요!
~       이에 대한 정보를 보려면     :help register<엔터>   입력
~
~       끝내려면                    :q<엔터>               입력
~       온라인 도움말을 보려면      :help<엔터> 또는       입력
~       판 정보를 보려면            :help version7<엔터>   입력
~
```

vi를 종료하기 위해 설명대로 :q를 입력합니다.

화면 아래에 입력하고 있는 키를 확인할 수 있을 것입니다.

Enter 를 누르면 vi를 종료하고 다시 프롬프트 상태로 돌아옵니다.

```s
~        끝내려면                   :q<엔터>               입력
~        온라인 도움말을 보려면     :help<엔터> 또는       입력
~        판 정보를 보려면           :help version7<엔터>   입력
~
~
:q
```

처음 vi를 접할 때 가장 이해하기 어려운 부분이 vi의 ‘모드’라는 개념입니다.

키보드와 마우스를 활용할 수 있는 그래픽 방식의 텍스트 에디터와 달리 vi에는 명령, 입력, ex 모드가 있어 텍스트를 편집할 수 있습니다.

이 세 가지 모드는 vi를 다른 에디터와 구별해주는 특성이기도 합니다.

• 명령 모드(Command): 텍스트 에디터에서 사용할 수 있는 일반적인 기능을 활용할 수 있는 모드로 커서 이동, 삭제, 수정, 복사와 붙여넣기와 같은 작업을 할 수 있습니다.

• 입력 모드(Insert): 명령 모드에서 a, i, o와 같은 키를 누르면 입력 모드로 전환합니다. 실제 텍스트를 입력할 수 있습니다. 다시 명령 모드로 돌아오려면 ESC를 누릅니다.

• ex 모드: ‘:’ 키를 누르면 ex 모드로 전환합니다. ex 프롬프트를 통해 좀 더 확장된 기능을 활용할 수 있습니다. 파일 저장, 종료, 특정 행으로 이동하기, 행 번호 붙이기와 같은 작업을 할 수 있습니다. 역시 ESC를 누르면 명령 모드로 돌아옵니다.

모드 사이의 전환은 :과 ESC, 입력키(a, i, o)를 이용합니다.

그림 3-21을 보면 모드를 전환하는 방식을 좀 더 명확히 알 수 있을 것입니다.

▼ 그림 3-23 vi의 세 가지 모드 사이에서 전환하기
![ ](../img/03/28.jpg)

- - -

Q vi 외에 다른 텍스트 에디터가 있으면 알려주세요.

A 우분투에서 사용할 수 있는 텍스트 에디터로는 vi 외에도 텍스트 환경에서 사용 가능한 emacs, nano, 데스크탑 환경에서 사용 가능한 gedit이 있습니다.

• emacs: 자유 소프트웨어의 선구자인 리차드 스톨만(Richard Stallman)은 유닉스에서 사용할 수 있는 많은 소프트웨어를 제작한 바 있습니다. emacs는 스톨만이 만든 텍스트 에디터로서 강력한 기능을 가지고 있습니다.

• nano: vim이나 emacs보다 사용하기 쉬운 텍스트 에디터로 우분투에도 기본적으로 설치되어 있습니다. 방향키를 이용해서 커서를 이동하고, Ctrl 또는 Alt와 특정 키를 함께 입력해서 텍스트 편집을 합니다.

• gedit: gedit은 데스크탑 환경에서 사용할 수 있는 X 윈도(X Window)용 텍스트 에디터입니다. 그래픽 방식인 만큼 초보자도 쉽게 다룰 수 있습니다. 터미널에서 ‘gedit `[파일명]`’ 형식으로 입력해서 gedit로 텍스트 파일을 편집할 수 있습니다.

- - -

일반적으로 `vi [파일명]` 형식으로 새로 생성하거나 추가할 파일 이름과 함께 vi를 실행합니다.

```s
shinjaehun@losttemple:~$ vi BallGame
```

화면 아래 파일에 대한 정보 외 빈 화면만 보입니다.

왼쪽에 ‘~’ 표시는 해당 행이 비어 있다는 의미입니다.

현재 상태는 명령 모드로 커서 이동키를 이용해서 커서를 움직여볼 수 있습니다.

```s
~
~
"BallGame" [새 파일]
```

i를 누르면 화면 아래에 ‘끼워넣기’라는 메시지가 나타날 것입니다.

이 상태가 입력 모드입니다.

첫 행에 텍스트를 삽입해보겠습니다.

```s
~
~
-- 끼워넣기 --
```

- - -

Tip

i 외에 텍스트를 입력할 수 있는 텍스트 입력키는 ‘명령 모드에서 사용할 수 있는 기능키’에 설명하고 있습니다.

- - -

실제로 텍스트를 입력해보겠습니다.

예제는 영문으로 입력했지만 그래픽 환경의 터미널에서 vi를 실행했다면 한글 입력도 가능합니다

(입력 모드로 전환하기 위한 i는 반드시 영문 상태에서 입력해야 합니다).

텍스트 콘솔 환경에서는 한글을 입력할 수 없기 때문에 그래픽 환경을 제공하지 않는 우분투 서버에서는 한글 입력이 불가능합니다.

```s
Take me out to the ball game
Take me out to the ball game
Take me out with the crowd
Buy me some peanuts and crackerjacks
I don\'t care if I never get back
Let me root, root, root for the home team
If they don\'t win it\'s a shame
For it\'s one, two, three strikes
you\'re out at the old ball game
~
-- 끼워넣기 --
```

파일을 저장하기 위해 저장 명령을 내릴 수 있는 ex 모드로 변경해야 합니다.

입력 모드에서 ex 모드로 바로 전환할 수 없으므로 일단 입력 모드에서 ESC를 눌러 명령 모드로 전환합니다.

화면 아래 – 끼워넣기 –가 사라질 것입니다.

그 다음에 ‘ :’를 눌러 ex 모드로 전환합니다.

화면 아래 ex 프롬프트인 ‘ :’이 표시되고 여기에 명령을 입력할 수 있습니다.

:wq는 파일을 저장하고 vi를 종료하여 커맨드라인으로 되돌아가는 ex 명령입니다

(w는 파일을 저장하고 q는 편집기를 종료합니다).

Enter를 눌러 명령을 실행합니다.

```s
:wq
```

- - -

Tip

입력 도중에 파일을 저장하지 않고 그대로 vi를 종료하려면 :q!를 입력합니다. ! 명령으로 강제로 종료할 것입니다.

- - -

커맨드라인의 명령 프롬프트가 나타나면 ls 명령으로 파일이 제대로 생성되었는지 확인해봅니다.

cat로 파일 내용을 확인해볼 수도 있습니다.

파일을 수정하려면 파일을 처음 만들 때처럼 vi BallGame이라고 입력합니다.

파일이 존재하면 새로운 파일을 생성하는 대신 해당 파일을 편집할 수 있습니다.

```s
shinjaehun@losttemple:~$ ls -l BallGame
-rw-rw-r-- 1 shinjaehun shinjaehun 295 9월 24 20:37 BallGame
```

#### 명령 모드에서 사용할 수 있는 기능키

명령 모드에서 가장 많이 사용되는 키는 무엇보다 커서 이동키일 것입니다.

원래 vi는 h, l, j, k로 커서를 이동합니다.

vim은 일반적인 텍스트 에디터의 커서 이동키인 방향키와 Home, End, Page Up, Page Down를 모두 지원합니다.

불편해 보이지만 사실 vi에서 커서 이동에 h, l, j, k를 사용하는 데는 이유가 있습니다.

방향키 대신 h, l, j, k를 이용해서 오른손의 움직임을 최소화시키기 위한 것입니다.

커서를 이동하기 위해 방향키를 누르려면 오른손이 오른쪽으로 더 움직여야 하며 그만큼 텍스트를 입력하는데 시간이 걸립니다.

따라서 vi에 익숙해진다면 훨씬 더 빠른 키 입력이 가능합니다.

vi에서 사용할 수 있는 커서 이동키는 크게 글자 단위, 단어 단위, 줄 단위로 나누어집니다.

▼ 표 3-8-1 커서 이동키(글자 단위)
|단축키|설명|
|:---:|:---|
|h|한 칸 왼쪽으로 이동하기|
|l|한 칸 오른쪽으로 이동하기|
|j|한 줄 아래로 이동하기|
|k|한 줄 위로 이동하기|

▼ 표 3-8-2 커서 이동키(단어 단위)
|단축키|설명|
|:---:|:---|
|w|다음 단어의 첫 글자로 이동하기|
|W|다음 단어의 첫 글자로 이동하기|
|b|이전 단어의 첫 글자로 이동하기|
|B|이전 단어의 첫 글자로 이동하기|
|e|단어의 마지막 글자로 이동하기|
|E|단어의 마지막 글자로 이동하기|

▼ 표 3-8-2 커서 이동키(줄 단위)
|단축키|설명|
|:---:|:---|
|^|그 줄의 첫 글자로 이동, Shift와 함께 사용하기|
|$|그 줄의 마지막 글자로 이동하기, Shift와 함께 사용하기|
|0|(숫자) 그 줄의 처음으로 이동하기|
|↲|다음 줄의 첫 글자로 이동하기|
|+|다음 줄의 첫 글자로 이동하기|
|-|윗줄의 첫 글자로 이동하기|

명령 모드에서 입력 모드로 전환할 때 텍스트 입력키를 누릅니다.

대문자와 소문자 키의 기능이 다르므로 주의합니다.

▼ 표 3-9 텍스트 입력키
|단축키|설명|
|:---:|:---|
|a|커서 위치의 다음 칸부터 입력하기(append)|
|A|커서가 있는 줄의 끝부터 입력하기|
|i|커서 위치부터 입력하기(키보드의 Insert도 같은 기능을 합니다)|
|I|커서가 있는 줄의 맨 앞에서부터 입력하기|
|o|커서 바로 아래에 줄을 만들고 입력하기(open line)|
|O|커서 바로 위에 줄을 만들고 입력하기|
|s|커서가 있는 단어를 지우고 입력하기|
|S|커서가 있는 행을 지우고 입력하기|

기본적인 삭제키로는 윈도에서와 마찬가지로 Del 커서 기준으로 다음 한 글자 삭제)와 백스페이스(커서 기준으로 이전 한 글자 삭제)를 사용합니다.

이 외에 명령 모드에서 사용할 수 있는 삭제키는 다음과 같습니다.

▼ 표 3-10 텍스트 삭제키
|단축키|설명|
|:---:|:---|
|x|dl 커서 위치의 글자 삭제|
|X|dh 커서 바로 앞의 글자 삭제|
|dw|한 단어를 삭제|
|d0|커서 위치부터 줄의 처음까지 삭제|
|D|d$ 커서 위치부터 줄의 끝까지 삭제|
|dd|커서가 있는 줄을 삭제|
|dj|커서가 있는 줄과 그 다음 줄을 삭제|
|dk|커서가 있는 줄과 그 앞줄을 삭제|

명령 모드에서 사용할 수 있는 텍스트 수정키는 다음과 같습니다.

▼ 표 3-11 텍스트 수정키
|단축키|설명|
|:---:|:---|
|>r|커서 위치의 한 글자 수정하기|
|R|커서 위치부터 ESC를 누를 때까지 다른 글자로 수정하기, 단 같은 줄에만 해당|
|s|커서 위치의 한 글자를 여러 글자로 수정하기|
|ch|커서 바로 앞의 한 글자를 여러 글자로 수정하기|
|cw|커서 위치의 한 단어를 수정하기|
|c0|커서 위치부터 줄의 처음까지 수정하기|
|C|커서 위치부터 줄의 끝까지 수정하기|
|cc|커서가 있는 줄을 수정하기|
|cj|커서가 있는 줄과 그 다음 줄을 수정하기|
|ck|커서가 있는 줄과 그 앞줄을 수정하기|

텍스트 복사는 임시 기억장소에 텍스트를 저장해 두는 의미이고 텍스트 붙여넣기는 임시 기억장소에 저장된 텍스트를 특정 위치에 써 넣는다는 의미입니다.

▼ 표 3- 12 텍스트 복사키
|단축키|설명|
|:---:|:---|
|yw|커서 위치부터 단어의 끝까지 복사하기|
|y0|커서 위치부터 줄의 처음까지 복사하기|
|y$|커서 위치부터 줄의 끝까지 복사하기|
|yy|커서가 있는 줄을 복사하기|
|yj|커서가 있는 줄과 그 다음 줄을 복사하기|
|yk|커서가 있는 줄과 그 앞줄을 복사하기|
|p|커서의 다음 위치에 붙여넣기|
|P|커서가 있는 위치에 붙여넣기|

undo 기능인 작업 취소는 u 또는 U를 사용합니다.

▼ 표 3- 13 작업 취소, 반복 키
|단축키|설명|
|:---:|:---|
|u|작업 취소하기|
|U|그 줄에 행해진 작업 모두 취소하기|
|.|조금 전에 했던 명령을 반복하기|

명령 모드에서 텍스트를 검색할 수 있는 키는 `/`와 `?`입니다.

화면 하단에 `/` 또는 `?`가 표시되고 여기에 검색할 텍스트를 입력합니다.

Enter를 누르면 파일 내에 있는 검색어가 하이라이트될 것입니다.

파일 내에 동일한 텍스트가 더 있는지 전진 또는 후진하면서 찾으려면 n 또는 N을 사용합니다.

▼ 표 3- 14 텍스트 검색 키
|단축키|설명|
|:---:|:---|
|/|현재 커서를 기준으로 앞에 있는 텍스트를 검색합니다.|
|?|현재 커서를 기준으로 뒤에 있는 텍스트를 검색합니다.|
|n|같은 방향으로 검색할 텍스트를 계속 검색해 나갑니다.|
|N|반대 방향으로 검색할 텍스트를 계속 검색해 나갑니다.|
|/엔터키|앞쪽으로 계속 검색합니다.|
|?엔터키|뒤쪽으로 계속 검색합니다.|

#### ex 모드에서 사용할 수 있는 ex 명령

ex 모드에서 가장 많이 사용되는 기능키는 무엇보다 파일의 저장과 종료일 것입니다.

‘!’ 기호는 강제로 명령을 수행한다는 의미입니다.

▼ 표 3- 15 파일 저장, 편집기 종료 키
|단축키|설명|
|:---:|:---|
|:q|아무런 변경을 하지 않았을 때 종료하기|
|:q!|변경된 내용을 저장하지 않고 강제 종료하기|
|:wq|저장하고 종료하기(write and quit)|
|:x|wq와 같은 기능|
|:w 파일명|새 이름으로 파일을 저장합니다.|

자주 사용하는 ex 명령은 다음과 같습니다.

set 명령을 사용하면 vi 환경 설정 내용을 변경할 수 있습니다.

▼ 표 3- 16 유용한 ex 명령
|단축키|설명|
|:---:|:---|
|:set number|각 행의 행번호를 보이도록 설정합니다(단축 명령은 ‘se nu’, 해제하려면 ‘se nonu’).|
|:syntax on|구문강조 기능을 사용합니다.|
|:set autoindent|자동 들여쓰기 기능을 사용합니다.|
|:set smartindent|똑똑한 들여쓰기 기능을 사용합니다.|
|:set cindent|C 프로그램 들여쓰기 기능을 사용합니다.|
|:set shiftwidth=4|들여쓰기를 4칸으로 설정합니다.|
|:set expandtab|탭 키를 누르면 공백을 삽입합니다.|
|:set tabstop=4|기본적으로 탭 간격은 8칸인데 4칸으로 변경합니다.|
|:set paste|터미널에서 붙여 넣을 때 자동 들여쓰기를 활성화합니다.|
|:set hlsearch|/나 ?로 검색한 텍스트를 강조합니다(해제하려면 ‘nohl’).|
|:set showmatch|서로 일치하는 괄호를 강조합니다.|
|:set ruler|현재 커서 위치를 표시합니다.|

set 명령을 별도의 설정 파일 ‘.vimrc’로 저장해서 반영하면 나만의 vim 환경을 만들 수 있습니다.

‘.vimrc’ 파일은 사용자 홈 디렉터리에 생성해야 합니다.

```s
shinjaehun@losttemple:~$ vi .vimrc
```

- - -

Tip
vim 환경 설정 파일 vimrc는 ‘.’으로 시작되는 숨김 파일입니다.

‘ls -al’로 확인해야 볼 수 있습니다.

- - -

설정 내용을 다음과 같이 입력합니다.

입력이 끝나면 :wq를 눌러 파일을 저장하고 vi를 종료해서 명령 프롬프트로 돌아갑니다.

```s
set number
syntax on
set autoindent
set smartindent
set cindent
set shiftwidth=4
set expandtab
set tabstop=4
set paste
set hlsearch
set showmatch
set ruler
```

확인을 위해 다시 vi를 실행해봅시다.

```s
shinjaehun@losttemple:~$ vi .vimrc
```

외형적인 변화가 눈에 띕니다. ➊ 행 번호가 삽입되고 ➋ 문법에 따라 다른 색깔로 구문 강조 기능이 활성화되었습니다.

➌ 화면 아래에는 커서의 위치를 표시하고 있습니다.

이 외에 자동 들여쓰기, 탭 간격 조정, 검색어 강조 등 set 명령이 적용된 vim 환경의 변화를 확인할 수 있을 것입니다.

▼ 그림 3-24 달라진 vi 모습
![ ](../img/03/29.jpg)

- - -

Q vi를 익히는 데 도움이 될 만한 자료 없을까요?

A 재미있는 게임을 하나 소개합니다.

Vim adventures( [http://vim-adventures.com](http://vim-adventures.com))는 vi 사용법을 익히는 데 도움이 될 만한 웹 브라우저 기반 게임입니다.

주어진 과제를 해결해나가는 간단한 게임으로 vi의 기능을 활용하기 때문에 게임을 하면서 vi 사용법을 익히게 됩니다.

마지막 레벨까지 플레이해볼 것을 추천합니다.

▼ 그림 3-25 Vim adventures로 vi 사용법 익히기
![ ](../img/03/30.jpg)

### 초보 시스템 관리자의 일기 | 시스템 관리자의 단짝 친구 셸 스크립트

명색이 시스템 관리자라면 리눅스 명령어를 자유자재로 구사할 줄 알아야 한다.

아직 경지에 이르지는 못했지만 한편으로는 영어 단어 암기하는 거랑 비슷하다고 본다.

단순히 책만 보면서 머리로 이해하기보다 실제 명령어를 활용해봄으로서 사용 방법을 체득하는 노력이 필요할 것이다.

(아직 제대로 익히지도 못했으면서)

이 장에서 배운 몇몇 명령어를 가지고 쉴 새 없이 맞닥뜨리는 문제를 해결하기란 한계가 있기 마련이다.

그때그때 필요한 명령을 하나씩 입력하는 대신 여러 명령을 조합해서 정해진 순서대로 자동 실행할 수 있다면 내가 없어도 시스템이 스스로 복잡한 작업을 처리할 수 있겠지.

단순하고 반복적인, 지긋지긋한(!) 시스템 관리자의 업무를 자동화시킬 수 있다는 말이다.

선배에게 피 같은 게임 아이템을 갖다 바치고 알게 된 이 환상적인 프로그램을 셸 스크립트라고 한다.

쉽게 말해 실행할 명령어들을 나열해 놓은 파일이라고 생각하면 되는데, 셸 스크립트를 어떻게 활용하느냐에 따라 얻을 수 있는 효과는 무궁무진하다.

셸은 사용자가 커맨드라인에서 입력한 명령을 해석해서 운영체제의 핵심인 커널에 전달하는 도구다.

커맨드라인에서 ls -al이라는 명령을 내리면 셸이 ls와 -al로 나누고 ls는 명령어, -al은 옵션으로 분석한 다음 리눅스 커널에 전달하며 처리 결과를 화면에 보여준다.
이런 이유로 셸을 명령어 해석기라고도 한다.

우분투를 비롯한 대부분의 리눅스가 배시 셸(Bourne Again SHell, BASH)을 사용한다.

명령 프롬프트에서 bash라고 입력하면 배시의 버전 정보를 확인할 수 있다.

내가 셸 스크립트를 작성하면 바로 이 배시 셸이 셸 스크립트에 입력된 명령을 자동으로 실행할 것이다

(근본적으로 ‘스크립트’라는 용어가 한 줄씩 읽어 와서 실행하도록 작성된 프로그램을 의미한다).

```s
shinjaehun@losttemple:~$ bash --version
bash --version
GNU bash, version 4.3.11(1)-release (i686-pc-linux-gnu)
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>

This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

먼저 vi로 첫 번째 셸 스크립트를 작성해보자.

```s
shinjaehun@losttemple:~$ vi helloworld
```

모든 배시 셸 스크립트는 다음과 같이 #!/bin/bash로 시작해야 한다.

echo 문자열을 출력하는 명령으로 “Hello! Shell Script!”를 커맨드라인에 보여줄 것이다.

파일을 저장하고 편집기를 빠져나온다.

```s
#!/bin/bash
echo “Hello! Shell Script!”
```

다음으로 스크립트 파일에 실행 권한을 부여한다.

실행 권한(+x)을 부여했다.

```s
shinjaehun@losttemple:~$ ls -l helloworld
-rw-rw-r-- 1 shinjaehun shinjaehun 44 10월 20 09:10 helloworld
shinjaehun@losttemple:~$ sudo chmod +x helloworld
shinjaehun@losttemple:~$ ls -l helloworld
-rwxr-xr-x 1 shinjaehun shinjaehun 44 10월 20 09:10 helloworld
```

helloworld 스크립트를 실행시키려면 디렉터리 경로를 명시해야 한다.

현재 작업 디렉터리를 의미하는 ‘./’를 붙여서 스크립트를 실행하면 결과가 정상적으로 출력된다.

```s
shinjaehun@losttemple:~$ ./helloworld
Hello! Shell Script!
```

어디에서든지 셸 스크립트를 실행하려면 적절한 디렉터리로 스크립트를 옮겨야 한다.

셸은 환경 변수 PATH로 지정된 경로를 차례로 탐색해서 명령을 실행하며, echo 명령으로 현재 시스템에 설정된 환경 변수 PATH의 값을 확인할 수 있다.

```s
shinjaehun@losttemple:~$ echo $PATH
bash: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/
local/games
```

사용자가 작성한 스크립트는 일반적으로 /usr/local/bin에 저장한다.

/usr/local/bin은 소유권이 루트에게 있으므로 helloworld를 옮길 때 sudo가 필요하다.

```s
shinjaehun@losttemple:~$ sudo cp helloworld /usr/local/bin/
```

이제 해당 셸 스크립트를 어느 디렉터리에서든지 실행할 수 있다.

```s
shinjaehun@losttemple:~$ helloworld
Hello! Shell Script!
```

앞서 만들어본 셸 스크립트는 문자열 출력이 목적으로 그다지 유용한 예제는 아니었다.

이번에는 시스템 로그(syslog)를 모니터링하는 sysloger라는 셸 스크립트를 만들어보자.

```s
shinjaehun@losttemple:~$ vi sysloger
```

/var/log/syslog를 tail로 확인한 결과를 ‘syslogresult’라는 파일에 저장하는 것 역시 단순한 스크립트이다.

‘>’는 표준 출력을 재지정한다.

명령 프롬프트에서 tail /var/log/syslog를 실행하면 표준 출력인 모니터로 결과가 출력된다.

‘>’를 이용해서 출력 방향을 다시 지정하여 명령 결과를 표준 출력이 아닌 ‘syslogresult’ 파일로 보낼 것이다.

```s
#!/bin/bash
tail /var/log/syslog > syslogresult
```

적절한 실행 권한을 부여하고 스크립트를 실행시킨다.

명령 결과 syslogresult가 생성된 사실을 확인할 수 있을 것이다.

```s
shinjaehun@losttemple:~$ sudo chmod +x sysloger
shinjaehun@losttemple:~$ ./sysloger
shinjaehun@losttemple:~$ cat syslogresult
```

셸 스크립트는 다른 프로그래밍 언어 못지않게 유연함과 강력함을 자랑한다.

자료를 저장하는 그릇, 변수를 사용해보자.

sysloger 스크립트를 vi로 열어서 다음과 같이 작성한다.

변수에 값을 입력할 때는 대입 연산자인 ‘=’를 사용한다( result=syslogresult).

이때 연산자 다음에 공백이 있으면 안 되므로 주의해야 한다.

변수를 사용할 때는 변수 이름 앞에 `$`를 붙인다(`$result`).

```s
#!/bin/bash
result=syslogresult

tail /var/log/syslog > $result
```

사실 변수만 사용했을 뿐 tail 결과를 syslogresult에 저장한다는 사실은 변함없다.

```s
shinjaehun@losttemple:~$ ./sysloger
```

좀 더 유용한 예제가 되도록 해보자.

옵션 없이 tail을 실행하면 10줄을 출력한다.

원하는 수만큼 출력하려면 -n 옵션을 사용해야 한다.

새로운 변수 $1은 커맨드라인에서 입력하는 스크립트의 인자를 저장하는 위치 매개변수이다.

명령 프롬프트에서 ./sysloger 5라고 입력한다면 $1에는 5가 저장되고 tail 명령은 tail /var/log/syslog -n 5로 확장될 것이다.

```s
#!/bin/bash
result=syslogresult

tail /var/log/syslog -n$1 > $result
```

결과를 확인해보자.

syslogresult 에는 5줄의 결과만 저장되긴 하는데 문제가 생겼다.

인자를 넣지 않고 sysloger를 실행하면 tail 명령의 옵션 -n 다음 값이 존재하지 않기 때문에 오류가 발생한다.

```s
shinjaehun@losttemple:~$ ./sysloger 5
```

문제를 해결하기 위해 변수를 하나 추가(line)하자.

여기서 문자열 대체 연산자가 등장했다.

${변수:-기본값}은 해당 변수가 존재하지 않으면 변수에 기본값을 저장한다.

인자를 넣지 않고 sysloger를 실행하면 $1이 존재하지 않기 때문에 line에 기본값 10이 저장된다.

./sysloger 2라고 입력한다면 $1에는 2가 저장되고 line에는 2가 저장된다.

```s
#!/bin/bash
result=syslogresult
line=${1:-10}

tail /var/log/syslog -n$1ine > $result
```

각각 테스트하고 테스트마다 syslogresult의 결과도 확인해보았다.

```s
shinjaehun@losttemple:~$ ./sysloger
shinjaehun@losttemple:~$ ./sysloger 2
```

좀 더 세련되게 날짜에 따라 sysloger 스크립트 결과를 다르게 저장해볼까?

‘`’(키보드 배열에서 왼쪽 위 ‘~’와 함께 있는 문자)는 명령을 실행하고 결과를 반환한다.

date +%y%m%d는 날짜를 ‘연월일’ 형식으로 출력하는 명령으로 오늘 날짜를 반환할 것이다.

따라서 result에는 ‘syslogresult년월일’ 파일 이름이 저장될 것이다.

```s
#!/bin/bash
result=syslogresult`date +%y%m%d`
line=${1:-10}

tail /var/log/syslog -n$1ine > $result
```

sysloger 스크립트를 실행한 결과는 다음과 같다.

```s
shinjaehun@losttemple:~$ ./sysloger
shinjaehun@losttemple:~$ ls
syslogresult141020
```

변수뿐만 아니라 흐름 제어도 사용 가능하다.

다른 프로그래밍 언어들처럼 if 조건문을 사용할 수 있다.

다소 멍청한 의도지만 tail 결과를 30줄 이상 출력하지 못하도록 제한해 보았다.

인자 없이 명령을 실행하면 출력할 행은 10줄로 지정되어 변수 line에 저장된다.

[] 안에 조건을 입력하는 데 양쪽에 공백이 있어야 하므로 주의해야 한다.

[ $1 -gt 30 ]은 line에 저장된 값을 산술비교하여 30보다 크면(greater than, gt) ‘참’이므로 then 이하를 실행한다.

echo 명령으로 “too big”이라는 문자열을 화면에 출력하고 exit 명령으로 스크립트를 중단한다.

30보다 크지 않으면 else 이하를 실행하여 정상적으로 tail 명령을 처리한다.

```s
#!/bin/bash
result=syslogresult`result +%y%m%d`

line=${1:-10}

if [ $line -gt 30 ]
then
  echo "too big"
  exit 1
else
  tail /var/log/syslog -n$1ine > $result
fi
```

40줄을 입력하면 “too big”이라는 매정한 메시지를 출력하고 스크립트는 종료된다.

```s
shinjaehun@losttemple:~$ ./sysloger 40
too big
```

마지막으로 sysloger를 아무 곳에서나 실행할 수 있도록 /usr/local/bin으로 옮겼다. 끝!

```s
shinjaehun@losttemple:~$ sudo cp sysloger /usr/local/bin/
```