---
title: 웹 서비스
key: linux ubuntu web service
date: 2020-03-08
---

# 리눅스 네트워크 서버 활용하기

## 웹 서버 운영하기

- - -

열씨미&게을러

**열씨미** 이런 웹 사이트는 어떻게 만드는 거예요?

**게을러** 뭐야? 블로그라도 운영하게? 인터넷 서비스 업체에서 운영하는 네버 블로그나 담 블로그, 타이스토리 블로그 쓰면 되잖아?

**열씨미** 블로그 서비스 다 고만고만하잖아요. 개성이 없어요, 개성이. 무슨 약관은 그렇게 복잡하고 많아서 자유롭게 글쓰기도 어렵단 말예요. 블로거의 창작 욕구를 방해하는 블로그 서비스를 벗어나 제 맘대로 블로그를 디자인하고 다양한 글도 올리고 싶단 말예요…

**게을러** 이거 또 예술가님 나셨구만. 이봐, 블로그라는 게 일단 겉모습보다는 내용이…

**열씨미** 또 잔소리!

**게을러** 알았어, 알았다고. 이건 설치형 블로그인 워드프레스를 이용해서 만든 웹 사이트인데. 이렇게 운영하려면 일단 항상 운영되는 인터넷 서버가 필요해. 이런 서버를 웹 서버(Web Server)라고 하지.

**열씨미** 그러네요. 인터넷을 통해서 누구나 접속할 수 있으려면 멈춤 없이 운영되어야 할 테니… 잠깐 그렇다면 서버 설치비, 서비스 관리비, 전기세, 이런 게 필요하지 않을까요? 왠지 돈 냄새가 나는데요?

**게을러** 귀신 같네… 웹 서버를 사용하려면 웹 호스팅 업체에 월 사용료를 지불해야 돼.

열씨미 공짜 점심은 없는 셈이군요…

**게을러** 리눅스를 통해 그 많은 서비스를 공짜로 누리면서 그런 말이 나와? 지독한 짠돌이 같으니라고… 어쨌든 웹 호스팅 업체가 제공하는 웹 서버도 어느 정도 제약은 있어.

**열씨미** 인터넷에 존재하는 언제든 사용할 수 있는 리눅스 서버, 이런 거 아니었어요?

**게을러** 틀린 말은 아닌데. 일반적으로 저렴한 서비스를 사용하려면 미리 준비된 형태의 서비스를 사용해야 하니 제약이 많아. 웹 사이트에서 다양한 기능을 제공하려면 웹 서버 뿐만 아니라 웹 프로그래밍 언어와 데이터베이스 관리 시스템도 필요한데 이게 또 저마다 천차만별이거든.

**열씨미** 원하는 서비스를 제공하려면 요금도 추가로 들겠고… 이게 또 불편하겠네요.

**게을러** 돈 걱정 뿐이니? 그런 기술들 배우려면 하루 아침에 다 되는 게 아니라고.

**열씨미** 뭐가 걱정이에요. 천리 길도 한 걸음부터, 아닙니까? 뭐부터 시작해야죠?

**게을러** 어휴… 진짜 답 없는 후배구만. 일단 리눅스에서 가장 많이 사용하는 아파치 웹 서버(Apache Web Server)부터 설치해보자고…

- - -

### 인터넷 웹 서비스에 대해 알려주세요

인터넷은 네트워크와 네트워크를 이어 놓은 거대한 네트워크입니다.

여기에서는 인터넷 서비스 중 하나인 웹 서비스에 대해 알아보고 웹 서비스를 제공하는 웹 서버의 원리를 소개합니다.

#### 웹 서버란 무엇인가요

웹 사이트를 보여주는 웹 서비스, 파일을 주고받는 파일 서비스, 메시지를 주고받기 위한 전자 메일 서비스 등 인터넷에서 사용할 수 있는 서비스는 다양합니다.

누구나, 언제, 어디에서든지 인터넷을 검색하고 웹 사이트가 제공하는 정보를 사용하는 만큼 인터넷 서비스 중에 가장 중요한 서비스는 웹 서비스라고 할 수 있습니다.

웹 서비스를 제공하려면 웹 서버(WebServer)가 필요합니다.

인터넷이라는 드넓은 바다를 항해하는 배의 역할을 클라이언트인 웹 브라우저가 담당한다면 항해의 목적지에 해당하는 곳이 웹 서버라고 할 수 있습니다.

웹 서버와 클라이언트인 웹 브라우저는 자료를 요청하고 요청에 대한 응답을 처리하기 위해 HTTP(HyperTextTransferProtocol)로 통신합니다.

웹에서 텍스트, 이미지, 음성, 영상과 같은 다양한 형식의 자료를 주고받을 수 있는 이유도 웹 서비스의 기본 프로토콜인 HTTP 때문입니다.

그림 8-1을 볼까요?

▼ 그림 8-1 웹 서비스의 원리
![ ](/img/08/01.jpg)

1. 웹 브라우저는 주소에 해당하는 웹 서버에게 HTTP 프로토콜로 웹 서비스를 요청(HTTP/GET)합니다. 예를 들어 웹 사이트의 HTML 문서를 보여 달라는 요청일 수 있습니다.

2. 80번 포트에 대한 접속 요청을 받으면 웹 서버는 클라이언트에 응답(HTTP/OK)합니다. HTML 문서를 보여 달라는 요청에 대해 웹 서버는 해당 문서를 클라이언트로 전송합니다.

이렇게 전송받은 문서인 홈페이지를 웹 브라우저에서 볼 수 있습니다.

단순한 원리지만 다양한 형식의 자료를 요청하고 이를 처리하여 결과를 보여줄 때까지 웹 브라우저와 웹 서버는 이면에 매우 복잡한 통신 과정을 숨기고 있습니다.

웹 브라우저를 띄워놓고 웹 사이트 주소만 입력하면 웹 페이지를 볼 수 있듯이 웹 서비스를 운영하려면 웹 서버 쪽에서도 어떤 자료를 어떻게 제공할지만 고민하면 됩니다.

- - -

Tip

웹 서버를 설치하고 웹 서비스를 운영하는 방법에 대해서는 `웹 서버 설치하고 웹 서비스 시작하기`에서 설명합니다.

- - -

#### 동적인 웹 서비스 환경을 제공하는 웹 서버

웹 서비스가 처음 시작되었을 때 웹 서버가 하는 일이라곤 미리 만들어 놓은 HTML 문서를 그대로 전송하는 게 전부였습니다.

사람들이 일방적인 정보 습득에서 벗어나 정보를 서로 주고받는 상호작용을 필요로 하게 된 것은 자연스러운 결과입니다.

과거의 웹 서버가 서버에서 클라이언트로 향하는 일방적인 정보의 흐름, 정적인 웹 서비스만을 제공했다면

현대의 웹 서버는 다른 응용 프로그램들과 함께 동작하여 사용자의 요구에 응답합니다.

서버에서 클라이언트가 필요로 하는 정보를 처리하고 다시 그 결과를 클라이언트로 되돌려주는 자동화된 시스템을 동적인 웹 서비스(DynamicWebService)라고 합니다.

- - -

Tip

지금은 거의 모든 웹 서비스가 동적인 형태로 운영됩니다.

- - -

웹 서버는 웹 응용 프로그램(WebApplication)을 호출하여 사용자가 입력한 정보를 바탕으로 데이터베이스를 제어하거나 자료를 업데이트해서 결과물을 만들어냅니다.

웹 응용 프로그램은 웹을 통해 동작하는 응용 프로그램입니다.

별도의 클라이언트 프로그램 없이 웹 브라우저만 있으면 어디에서든 실행 가능하며 C, 자바, 펄, 루비, 파이썬, PHP와 같은 다양한 프로그래밍 언어로 작성됩니다.

여기에 방대한 자료를 효율적으로 다루기 위해 관계형 데이터베이스 관리 시스템 (Relational DataBases Management System, RDBMS, 또는 DBMS)이 등장합니다.

사용자 계정에 대한 정보, 사용자가 입력한 글, 수많은 형식의 멀티미디어 자료들을 빠른 시간에 저장하거나 조회하고 되돌려주기 위해서는 전문적으로 자료를 관리하는 도구가 필요하기 때문입니다.

리눅스에서 사용 가능한 데이터베이스 관리 시스템으로는 MySQL, PostgreSQL, SQLite, Oracle이 있습니다.

그림 8-2는 웹 서버와 웹 응용 프로그램, 데이터베이스가 맞물려 동적인 웹 서비스를 제공하는 환경을 보여줍니다.

▼ 그림 8-2 동적인 웹 서비스 환경
![ ](/img/08/01.jpg)

➊ 사용자가 웹 브라우저를 통해 정보를 요청하면 인터넷을 거쳐 웹 서버에 전달됩니다.

➋ 웹 서버는 웹 응용 프로그램을 통해 데이터베이스에 자료를 저장하거나 조회합니다.

➌ 데이터베이스 관리 시스템이 사용자 요청에 해당하는 정보를 저장하거나 되돌려주면 웹 응용 프로그램은 처리 결과를 사용자가 보기 쉬운 형태로 가공합니다.

➍ 웹 서버가 가공된 처리 결과를 웹 브라우저로 전송합니다. 사용자는 웹 브라우저에서 처리결과를 확인합니다.

- - -

Tip

`8.4 | 데이터베이스와 프로그래밍 언어로 웹 서비스를 다이나믹하게!`에서 실제로 동적인 웹 서비스 환경을 구현합니다.

- - -

### 웹 서버 준비하기

가장 많은 인터넷 웹 사이트가 사용하는 웹 서버, 아파치를 소개합니다.

아파치 웹 서버를 설치하고 어떻게 운영하는지 직접 따라해보겠습니다.

#### 아파치 웹 서버를 소개합니다

아파치 웹 서버(ApacheWebServer)는 인터넷 세상에서 가장 많은 사랑을 받는 웹 서버입니다.

1995년, 인기를 누리던 웹 서버 NCSA HTTPD에 패치 파일을 제공하던 사람들이 모여서 직접 개발한 새로운 웹 서버가 아파치 웹 서버입니다.

아파치(Apache)라는 이름도 (A PAtCH server)에서 유래했습니다.

- - -

Tip

발표된 응용 프로그램의 개선, 버그나 오류 수정을 위해 개발자가 공개한 업데이트 프로그램을 패치라고 합니다.

- - -

아파치 웹 서버는 기존의 NCSA 웹 서버에 더욱 향상된 기능들을 탑재하여 발전해나갔습니다.

현재 인터넷에 존재하는 웹 사이트 중 절반 정도가 아파치 웹 서버를 통해 서비스될 정도로 아파치 웹 서버는 최고의 인기를 구가하고 있는 스타가 되어 버렸습니다.

아파치 웹 서버가 이렇게 인기를 누리는 이유는 무엇일까요?

무엇보다 공짜라는 점도 있겠지만 다른 상용 웹 서버에 못지않은 성능과 안정성을 보여준다는 점이 더 중요합니다.

중단 없이 클라이언트의 접속 요청을 처리해야 하는 특성 때문에 웹 서버는 무엇보다 안정적으로 웹 서비스를 제공할 수 있어야 합니다.

아파치 웹 서버는 다양한 환경의 다양한 플랫폼에서 동작할 수 있도록 강력하고 유연하게 설계되었으며 오픈 소스로 개발된 만큼 전 세계 수많은 개발자가 지속적으로 성능 개선에 참여하고 있어 신뢰할 만합니다.

#### 웹 서버 설치하고 웹 서비스 시작하기

가상 게스트 server01에 아파치 웹 서버를 설치하고 호스트에서 웹 브라우저를 이용해서 접속해보겠습니다.

▼ 그림 8-3 가상 게스트에 웹 서버 설치하고 호스트에 접속하기
![ ](/img/08/03.jpg)

웹 서버를 운영할 게스트 server01을 시작하고 ssh로 로그인합니다.

```s
shinjaehun@losttemple:~$ virsh start server01
shinjaehun@losttemple:~$ ssh administrator@192.168.122.201
```

apt-get 명령으로 apache2 패키지를 설치합니다.

설치 과정을 유심히 살펴보면 ServerName과 관련된 항목에서 오류 메시지를 확인할 수 있습니다.

ServerName이 설정되지 않아 로컬 호스트를 의미하는 IP 주소 127.0.0.1을 대신 사용하겠다는 메시지입니다.

```t
administrator@server01:~$ sudo apt-get update
administrator@server01:~$ sudo apt-get install apache2
...
 * Starting web server apache2                                               AH00558:
apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the `ServerName` directive globally to suppress this message
                                                                          [ OK ]
```

- - -

Tip

웹 서버를 시작, 재시작, 정지하는 apache2 스크립트를 사용할 때마다 같은 오류 메시지가 출력됩니다.

나중에 ServerName 항목을 설정하면 오류 메시지가 사라질 것입니다.

- - -

웹 서버는 정상적으로 실행되고 있습니다.

netstat 명령을 실행하면 http 포트(80번)로 외부 접근을 기다리는 상태를 확인할 수 있습니다.

웹 서비스에 대한 요청, 결과 처리가 모두 http 포트를 통해 이루어집니다.

```t
administrator@server01:~$ netstat -a | grep http
tcp        0       0 *:http                 *:*                 LISTEN
```

런레벨 편집기를 시작합니다.

```t
administrator@server01:~$ sudo sysv-rc-conf
```

런레벨 2부터 5까지 웹 서버가 실행되도록 apache2 서비스를 체크합니다.

q를 눌러 런레벨 편집기를 종료합니다.

▼ 그림 8-4 apache2 서비스 실행을 위한 런레벨 편집
![ ](/img/08/04.jpg)

다른 리눅스 서버 응용 프로그램과 비교해서 아파치 웹 서버의 설정 파일은 구조가 복잡한 편입니다.

아피치 웹 서버도 예전에는 다른 서버 응용 프로그램들처럼 설정 파일 하나에 모든 설정 내용을 집어넣었지만 웹 서버에 다양한 기능을 추가하다보니 설정 파일도 복잡해졌습니다.

하지만, 전체적인 구조를 이해하면 새로운 방식이 웹 서버를 관리하는 데 훨씬 더 유용하다는 사실을 알 수 있습니다.

아파치 웹 서버 설정 파일들은 /etc/apache2 디렉터리에 들어 있습니다.

중요한 파일과 디렉터리만 살펴봅시다.

• 아파치 웹 서버의 기본적인 설정 내용은 `apache2.conf`에 정의되어 있습니다.

• `ports.conf`는 웹 서버의 연결과 관련된 설정 파일입니다.

• conf-available 디렉터리에 문자셋, 오류 메시지 페이지, 보안 설정과 같은 아파치 웹 서버 고급 기능을 별도의 설정 파일로 관리합니다.

• 이 중에서 사용자가 사용하고 싶은 모듈은 conf-enabled 디렉터리에 링크를 걸어 동작시킬 수 있습니다.

• 아파치 웹 서버의 추가 기능은 모듈 형태로 mods-available 디렉터리에 존재합니다.

• 이 중에서 사용자가 사용하고 싶은 모듈은 mods-enabled 디렉터리에 링크를 걸어 동작시킵니다.

• sites-available은 가상 호스팅을 제공할 때 여러 웹 사이트에 대한 설정을 따로 보관하기 위한 디렉터리입니다.

• 이 중에서 사용자가 제공할 웹 사이트는 sites-enabled 디렉터리에 링크를 걸어 설정합니다.

```t
administrator@server01:~$ ls /etc/apache2/
apache2.conf conf-enabled magic           mods-enabled  sites-available
conf-available envvars    mods-available  ports.conf    sites-enabled
```

아파치 웹 서버의 기본적인 설정 파일 `apache2.conf`를 살펴봅시다.

`apache2.conf`는 아파치 웹 서버 운영에 영향을 미치는 전반적인 설정을 제어합니다.

```t
administrator@server01:~$ sudo vi /etc/apache2/apache2.conf
```

Timeout은 클라이언트가 요청한 정보를 받을 때까지 소요되는 대기 시간을 설정합니다.  
초 단위 값으로 시간을 초과하면 클라이언트와의 접속이 끊어집니다.

KeepAlive는 클라이언트의 지속적인 접속 허용 여부를 결정합니다.  
클라이언트의 요청을 처리한 아파치 프로세스가 해당 클라이언트의 다른 요청에 대해서도 계속 처리하도록 설정합니다.

MaxKeepAliveRequests는 KeepAlive가 On일 때, 아파치 프로세스가 처리하는 클라이언트의 요청 횟수를 제한합니다. 값을 넘어서면 다른 아파치 프로세스가 클라이언트의 요청을 처리합니다.

KeepAliveTimeout은 역시 KeepAlive가 On일 때, 클라이언트의 접속 상태에서 다음 요청에 대한 대기시간을 설정합니다. 초 단위 값으로 시간을 초과하면 클라이언트와의 접속이 끊어집니다.

```conf
Timeout 300
KeepAlive On
MaxKeepAliveRequests 100
KeepAliveTimeout 5
```

다음은 아파치 웹 서버의 상태 정보를 저장하는 로그 관련 옵션입니다.

ErrorLog는 오류 로그 파일의 경로, LogLevel은 로그 파일에 저장할 정보의 내용, LogFormat은 로그 형식을 지정합니다.

```conf
ErrorLog ${APACHE_LOG_DIR}/error.log
LogLevel warn
LogFormat "%h %l %u %t \"%r\" %>s %O" common
```

IncludeOptional과 Include는 추가로 포함할 설정 파일과 디렉터리의 경로를 지정합니다.

앞에서 살펴본 모듈 설정을 위한 mods-enabled와 고급 기능을 위한 conf-enabled, 가상 호스트를 위한 sites-enabled 디렉터리가 설정되어 있습니다.

웹 서버 연결 설정을 위한 설정 파일 `ports.conf`도 확인할 수 있습니다.

```conf
IncludeOptional mods-enabled/*.load
IncludeOptional mods-enabled/*.conf
Include ports.conf
IncludeOptional conf-enabled/*.conf
IncludeOptional sites-enabled/*.conf
```

`<Directory>`는 웹 서버를 통해 접근 가능한 디렉터리를 설정하는 항목입니다.

웹 서버 루트 디렉터리인 /var/www에 대한 접근만 허용하고 루트 디렉터리에 대한 접근을 금지합니다.

```xml
<Directory />
       Options FollowSymLinks
       AllowOverride None
       Require all denied
</Directory>
<Directory /var/www/>
       Options Indexes FollowSymLinks
       AllowOverride None
       Require all granted
</Directory>
```

AccessFileName은 각 디렉터리에 접근 제어 정보를 저장할 파일을 지정합니다.

`<FilesMatch>`는 .htaccess처럼 .ht로 시작되는 파일에 대해 접근을 제한합니다.

보안과 밀접한 파일을 보호하기 위해 웹 브라우저를 통해 접근하지 못하도록 설정되어 있습니다.

```xml
AccessFileName .htaccess
<FilesMatch ~ "^\.ht">
    Require all denied
</FilesMatch>
```

웹 서비스에 대한 접근을 허용하기 위해 방화벽에서 80번 포트를 개방(ufw allow 80)합니다.

방화벽 규칙을 확인하면(ufw status) 80번 포트에 대한 접근을 허용해야 합니다.

```t
administrator@server01:~$ sudo ufw allow 80
administrator@server01:~$ sudo ufw status
Status: active

To                          Action     From
--                          ------     ----
...
80                          ALLOW      Anywhere
80                          ALLOW      Anywhere (v6)
```

호스트에서 웹 브라우저를 실행시키고 웹 서버의 IP 주소를 입력하면 웹 서버가 보내온 웹 페이지가 나타납니다.

아파치 웹 서버가 정상적으로 운영되고 있습니다.

▼ 그림 8-5 아파치 웹 서버 테스트 페이지
![ ](/img/08/05.jpg)

### 웹 서비스 운영하기

여러 가지 방법으로 웹 서비스를 운영해봅시다.

각 서비스마다 웹 서버 설정 파일을 수정해야 하는데, 이 과정에서 아파치 웹 서버를 어떻게 다루는지 어느 정도 이해할 수 있으리라 생각합니다.

#### 도메인 주소로 웹 서버 접속하기

네트워크에 연결하는 모든 장치는 IP 주소(IP Address)로 식별합니다.

사람은 숫자보다 문자로 이루어진 의미 체계를 선호합니다.

기계에 적합한 IP 주소 대신 사용하는 사람이 기억하기 쉬운 문자 형태의 주소를 도메인 주소(Domain Address)이라고 합니다.

`192.168.122.201` 같은 IP 주소 대신 일반적인 인터넷 웹 사이트 URL처럼 `www.werbserver.com`이라는 도메인 주소를 사용해서 접속하려면 웹 서버의 ServerName을 변경해야 합니다.

웹 서버 환경 설정을 변경해봅시다.

ServerName을 추가하기 위해 /etc/apache2/conf-available에 `servername.conf`라는 설정 파일을 생성합니다.

```t
administrator@server01:~$ sudo vi /etc/apache2/conf-available/servername.conf
```

단순히 ServerName만 추가합니다.

`www.werbserver.com`이라는 도메인 주소는 인터넷에서 공인받지 않았기 때문에 실제 인터넷에서는 사용할 수 없으며 내부 가상 네트워크에서만 사용 가능합니다.

```t
ServerName www.werbserver.com
```

- - -

Tip
인터넷에 공개하는 웹 서버는 인증기관으로부터 공인 받은 도메인 주소를 사용해야 합니다.

방금 지어낸 도메인 주소 `www.werbserver.com`이 웹 서버가 동작하는 가상 게스트를 가리킨다는 사실은 오직 우리만 알고 있습니다.

따라서 이 주소로는 인터넷을 통해 웹 서버에 접속할 수 없습니다.

- - -

추가 설정을 활성화하는 명령인 a2enconf를 이용해서 `servername.conf`의 내용을 반영합니다.

a2enconf은 사용 가능한 설정 파일이 들어 있는 /etc/apache2/conf-available 디렉터리에서 특정 파일을 /etc/apache2/conf-enabled 디렉터리에 링크시킵니다.

```t
administrator@server01:~$ sudo a2enconf servername
Enabling conf servername.
To activate the new configuration, you need to run:
  service apache2 reload
```

a2enconf를 실행한 결과 conf-enabled 디렉터리에 `servername.conf`에 대한 링크 파일이 생성되었습니다.

```t
administrator@server01:~$ ls -l /etc/apache2/conf-enabled/
...
lrwxrwxrwx 1 root root 33 Nov 1 15:25 servername.conf -> ../conf-available/servername.conf
```

- - -

**이렇게 하세요!**

a2enconf 명령은 conf-available 디렉터리의 파일 중에서 활성화하려는 설정 파일의 링크를 conf-enabled 디렉터리에 생성합니다.

다음과 같이 ln 명령으로 링크를 생성하는 결과와 동일합니다.

```t
administrator@server01:~$ sudo ln -s /etc/apache2/conf-available/servername.conf /etc/apache2/conf-enabled
```

a2enconf 명령과 반대로 설정을 해제하는 명령은 a2disconf입니다.

다음 명령은 servername.conf의 링크를 삭제하여 설정 내용을 반영하지 않을 것입니다.

```t
administrator@server01:~$ sudo a2disconf servername
```

- - -

설정 내용을 반영하기 위해 아파치 웹 서버 데몬을 재시작합니다.

ServerName과 관련한 오류 메시지가 사라졌습니다.

```t
administrator@server01:~$ sudo service apache2 restart
* Restarting web server apache2                                                   ... waiting
                                                                           [ OK ]
```

다시 호스트로 돌아옵니다.

클라이언트에서 공인받지 않은 웹 서버의 도메인 주소로 접속하려면 /etc/hosts 파일을 이용해야 합니다.

호스트의 /etc/hosts 파일을 vi로 엽니다.

```t
shinjaehun@losttemple:~$ sudo vi /etc/hosts
```

사용하려는 웹 서버의 도메인 주소(www.werbserver.com)를 웹 서버 IP 주소(192.168.122.201)에 대응시켜 등록합니다.

```s
127.0.0.1 localhost
127.0.1.1 losttemple
192.168.122.100 guest
192.168.122.201 www.webserver.com
```

- - -

Tip

여기에서는 웹 서버의 도메인 주소를 IP 주소로 변환하는 일을 호스트의 /etc/hosts 파일에서 처리하고 있습니다.

실제 인터넷에 공개된 웹 서버의 도메인 주소를 IP 주소로 변환하는 일은 DNS 서버(Domain Name System Server)가 처리합니다.

DNS는 도메인 이름과 IP 주소를 연결하는 일종의 전화번호 시스템이라고 생각하면 됩니다.

클라이언트가 도메인 이름을 조회하면 DNS 서버(흔히 네임 서버라고 합니다)가 해당 주소를 알려주는 방식으로 동작합니다.

- - -

웹 브라우저를 실행해서 www.werbserver.com 으로 접속해봅시다.

호스트는 /etc/hosts에서 도메인 주소 www.werbserver.com을 웹 서버가 실행되는 가상 게스트의 IP 주소 192.168.122.201로 변환해서 접속합니다.

#### 웹 문서에 한글 사용하기

웹 페이지를 고쳐봅시다.

아파치 웹 서버는 기본적으로 웹 서버 루트 디렉터리인 `/var/www/html`의 파일들을 클라이언트에 제공합니다.

웹브라우저에서 웹 사이트 주소를 입력했을 때 가장 먼저 보이는 웹 페이지는 웹 서버 루트 디렉터리의 `index.html` 파일입니다.

기존 `index.html` 파일을 `index.html.org`로 바꾸고 새로운 `index.html` 파일을 웹 서버 루트 디렉터리 /var/www/html에 생성합니다.

```t
administrator@server01:~$ cd /var/www/html/
administrator@server01:/var/www/html$ sudo mv index.html index.html.old
administrator@server01:/var/www/html$ sudo vi index.html
```

`index.html` 파일을 다음과 같이 작성해봅시다.

이번에는 웹 문서를 한글로 작성해서 정상적으로 출력하는지 확인해보겠습니다.

```html
<html>
  <body>
    <h1>웹 서버 테스트입니다.</h1>
    <p>웹 브라우저의 HTTP 요청을 받아서</p>
    <p>웹 서버에 저장되어 있는 index.html 파일을</p>
    <p>웹 브라우저에 보여줍니다.</p>
  </body>
</html>
```

호스트 웹 브라우저로 웹 서버에 접속하면 HTML 문서가 알 수 없는 글자로 표시됩니다.

전송받은 웹 문서의 문자셋(CharacterSet)이 지정되지 않아 알아볼 수 없는 문자가 표시되는 현상입니다.

웹 서버가 웹 문서의 문자셋을 지정하도록 설정해서 문제를 해결할 수 있습니다.

▼ 그림 8-7 문자셋이 지정되지 않았을 경우
![ ](/ing/08/07.jpg)

한글 사용을 위한 문자셋을 활성화시켜야 합니다.

웹 서버 설정 디렉터리의 /etc/apache2/conf-available에는 웹 서버의 문자셋을 설정하는 `charset.conf` 파일이 있습니다.

이 파일을 vi로 엽니다.

```t
administra tor@server01:~$ sudo vi /etc/apache2/conf-available/charset.conf
```

AddDefaultCharset 항목의 주석을 해제해서 활성화합니다.

웹 페이지의 기본 문자셋을 전 세계 모든 문자를 표현할 수 있는 유니코드인 UTF-8로 설정합니다.

```conf
AddDefaultCharset UTF-8
```

설정 내용을 반영하기 위하여 아파치 웹 서버를 재시작합니다.

```t
administrator@server01:~$ sudo service apache2 restart
```

- - -

Tip
이번에는 a2enconf를 사용하지 않는데 추가 기능으로 활성화시켰던 servername과 달리 charset은 이미 존재하는 설정 항목이기 때문입니다.

- - -

다시 호스트 웹 브라우저에서 웹 서버에 접속해보면 웹 문서가 정상적으로 보입니다.

▼ 그림 8-8 문자셋 문제 해결
![ ](/img/08/08.jpg)

#### 사용자마다 웹 사이트 운영하기

리눅스 서버의 사용자마다 자신의 홈 디렉터리에서 웹 사이트를 운영하도록 설정할 수 있습니다.

아파치 웹 서버는 이런 기능을 사용자 디렉터리 모듈(userdir)로 분리해서 제공합니다.

웹 서버의 모듈을 활성화하는 명령은 a2enmod입니다.

다음과 같이 userdir 모듈을 활성화합니다.

```t
administrator@server01:~$ sudo a2enmod userdir
```

웹 서버를 재시작해서 설정 내용을 반영합니다.

```t
administrator@server01:~$ sudo service apache2 restart
```

홈 디렉터리마다 각자의 웹 서버 루트 디렉터리가 필요합니다.

public_html이라는 디렉터리를 만들어 `index.html` 파일을 vi로 생성합니다.

- - -

Tip

사용자 계정의 웹 서버 루트 디렉터리가 public_html인 이유는 아래에서 설명합니다.

- - -

구분하기 쉽도록 웹 서버 루트 디렉터리의 `index.html`과 약간 다르게 `index.html` 파일을 작성해봅시다.

```xml
<html>
  <body>
    <h1>웹 서버 테스트입니다.</h1>
    <p>이 문서는 사용자 디렉터리의 public_html에서</p>
    <p> 제공되는 index.html 파일입니다.</p>
  </body>
</html>
```

호스트로 돌아와서 웹 브라우저를 실행하고

`[웹 서버 주소]/~[사용자 계정]` 형식으로 주소를 입력해봅니다.

앞서 public_html 디렉터리를 생성한 사용자 계정이 administrator이므로 `www.webserver.com/~administrator`라고 입력했습니다.

이렇게 리눅스 서버의 사용자마다 각각 웹 사이트를 운영할 수 있습니다.

▼ 그림 8-9 administrator 계정의 홈 디렉터리에서 웹 서비스하기
![ ](/img/08/09.jpg)

아파치 웹 서버의 모듈을 활성화시키는 a2enmod 명령은 사용 가능한 모듈이 들어 있는 `/etc/apache2/mods-available` 디렉터리에서 특정 파일을 `/etc/apache2/mods-enabled` 디렉터리에 링크시킵니다.

a2enmod 명령이 userdir 모듈을 활성화시켰기 때문에 mods-available 디렉터리에 `userdir.conf`와 `userdir.load` 두 파일에 대한 링크가 mods-enabled 디렉터리에 생성됩니다.

```t
administrator@server01:~$ ls -l /etc/apache2/mods-enabled/
...
lrwxrwxrwx 1 root root 40 May 11 00:39 userdir.conf -> /etc/apache2/mods-available/userdir.conf
lrwxrwxrwx 1 root root 40 May 11 00:39 userdir.load -> /etc/apache2/mods-available/userdir.load
```

`userdir.conf` 파일에는 사용자 디렉터리와 관련된 항목을 설정합니다.

vi로 열어서 살펴봅시다.

```t
administrator@server01:~$ vi /etc/apache2/mods-enabled/userdir.conf
```

UserDir은 사용자 웹 서버 루트 디렉터리를 public_html로 지정합니다.

보안을 유지하기 위해 루트 사용자 홈 디렉터리에 대한 접근은 차단합니다(disabled root).

사용자 웹 서버 루트 디렉터리의 기본 설정은 `<Directory /home/*/public_html>`에 정의되어 있습니다.

```xml
<IfModule mod_userdir.c>
        UserDir public_html
        UserDir disabled root

        <Directory /home/*/public_html>
                AllowOverride FileInfo AuthConfig Limit Indexes
                Options MultiViews Indexes SymLinksIfOwnerMatch IncludesNoExec
        ...
```

- - -

**이렇게 하세요!**

a2enmod 명령을 사용하는 대신 다음과 같이 직접 ln 명령으로 mods-enabled 디렉터리에 링크를 만들어서 사용자 디렉터리 기능을 활성화할 수 있습니다.

물론 링크를 만든 다음 아파치 웹 서버를 재시작해야 설정 내용이 반영됩니다.

administrator@server01:~$ cd /etc/apache2/mods-enabled/
administrator@server01:/etc/apache2/mods-enabled$ sudo ln -s /etc/apache2/mods-available/userdir.conf
administrator@server01:/etc/apache2/mods-enabled$ sudo ln -s /etc/apache2/mods-available/userdir.load

- - -

아파치 웹 서버 모듈을 해제하는 명령은 a2dismod입니다.

사용자 디렉터리 모듈을 해제합니다

```t
administrator@server01:~$ sudo a2dismod userdir
```

- - -

Tip

a2dismod가 처리하는 일은 단순합니다.

/etc/apache2/mods-enabled 디렉터리를 확인하면 userdir.conf와 userdir.load에 대한 링크가 삭제된 사실을 알 수 있습니다.

- - -

웹 서버를 재시작해서 설정 내용을 반영합니다.

```t
administrator@server01:~$ sudo service apache2 restart
```

사용자 계정에 대한 웹 서비스가 중단됩니다.

▼ 그림 8-10 administrator 계정의 웹 서비스가 중단됨
![ ](/img/08/10.jpg)

### 데이터베이스와 프로그래밍 언어로 웹 서비스를 다이나믹하게

여기에서는 사용자와 상호작용하는 동적인 웹 사이트를 서비스하기 위해 필요한 데이터베이스 관리 시스템과 프로그래밍 언어를 소개합니다.

웹 서버와 함께 동작하도록 여러 모듈을 함께 설치해야 합니다.

#### 동적인 웹 서비스를 위한 데이터베이스 관리 시스템과 프로그래밍 언어

동적인 웹 서비스 환경을 제공하기 위해서는 웹 응용 프로그램을 동작시킬 프로그래밍 언어와 방대한 자료를 처리할 데이터베이스 관리 시스템이 필요합니다.

이 책에서는 프로그래밍 언어로 PHP를, 데이터베이스 관리 시스템으로 MySQL을 사용하지만 리눅스에서는 사용하려는 웹 응용 프로그램에 따라 다양한 프로그래밍 언어와 데이터베이스를 선택할 수 있습니다.

PHP는 서버에서 실행되는 프로그래밍 언어입니다.

처음에는 개인용 홈페이지 제작 도구 (PersonalHomePageTool)라는 이름으로 개발됐지만 지금은 서버에서 처리하는 웹에 최적화된 프로그래밍 언어(HyperText Preprocessor)로 발전했습니다.

배우기 쉽고, 동적인 웹 문서를 처리하는데 적합하기 때문에 많은 웹 개발자가 웹 응용 프로그램을 제작하는 PHP를 사용됩니다.

공개 웹 응용 프로그램 중 절대 다수가 PHP로 만들어져 있습니다.

MySQL은 오픈 소스 데이터베이스 관리 시스템입니다.

상용 데이터베이스 관리 시스템에 비해 안정적이고 기능면에서 전혀 뒤떨어지지 않습니다.

특히 속도가 빠르다는 것이 큰 장점입니다.

PHP를 비롯한 C , C++, 자바, 파이썬과 같은 다양한 프로그래밍 언어와 수많은 웹 서버를 지원합니다.

리눅스를 비롯한 유닉스 제품군은 물론, 윈도에서도 MySQL을 사용할 수 있습니다.

아파치(Apache) 웹 서버와 프로그래밍 언어 PHP, 데이터베이스 관리 시스템 MySQL의 머리글자를 딴 APM(Apache, PHP, MySQL)

여기에 웹 서비스를 제공하기에 적합한 운영체제인 리눅스까지 합친 LAMP(Linux, Apache, MySQL, PHP)는 저렴하고 다루기 쉬운 공개 웹 서비스 솔루션으로 널리 사용되고 있습니다.

#### MySQL, PHP 설치하기

먼저 MySQL 서버 패키지인 mysql-server를 설치합니다.

웹 서버와 PHP 웹 응용 프로그램과 상호작용을 위해 libapache2-mod-auth-mysql과 php5-mysql 패키지를 함께 설치합니다.

libapache2-mod-auth-mysql은 MySQL 데이터베이스에 저장된 정보로 웹에서 사용자 인증을 처리하기 위한 아파치 웹 서버 모듈이며 php5-mysql은 PHP로 데이터베이스를 제어하기 위한 MySQL 모듈입니다.

```t
administrator@server01:~$ sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql
```

설치 과정에서 다음과 같이 MySQL root 사용자의 패스워드를 설정합니다.

여기에서 등장하는 root는 리눅스 서버의 root가 아닌 MySQL 데이터베이스 관리를 위한 사용자이며, 설정한 패스워드는 데이터베이스에 접속할 때 사용됩니다.

확인을 위해 패스워드를 한 번 더 입력해야 합니다.

▼그림 8-11 MySQL root 사용자 패스워드 설정하기
![ ](/img/08/11.jpg)

- - -

Tip

예전에는 MySQL 패키지를 설치한 다음 자료 디렉터리, 기본 데이터베이스를 생성하는 스크립트인 mysql_install_db, 보안 설정을 위한 스크립트 mysql_secure_installation을 직접 실행해서 초기화했지만 우분투 mysql-server 패키지는 설치 과정에서 이런 귀찮은 일을 자동으로 처리합니다.

- - -

설정한 root 패스워드를 이용해서 데이터베이스 관리를 위한 MySQL 모니터에 접속합니다.

`mysql -u [MySQL 사용자 계정] -p` 형식으로 입력합니다.

-p가 있어야 패스워드를 입력할 수 있습니다.

명령 프롬프트가 변경되는 것을 확인할 수 있습니다.

```t
administrator@server01:~$ mysql -u root -p
Enter password: ******
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 42
Server version: 5.5.40-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights
reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input
statement.

mysql>
```

데이터베이스에 정보를 요청하는 질의어(명령)를 쿼리 query라고 합니다.

SHOW DATABASES; 쿼리는 현재 시스템에 설치된 데이터베이스 목록을 조회합니다.

쿼리 끝에 ;를 붙여 `[Enter]`를 눌러야합니다.

mysql-server 패키지를 설치할 때 기본적으로 설치된 데이터베이스를 확인할 수 있습니다.

```mysql
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
3 rows in set (0.03 sec)
```

- - -

Tip

모든 명령을 소문자로 입력해도 MySQL이 이해하지만, 여기에서는 쿼리를 구분하기 위해 대문자를 사용했습니다. SQL 쿼리는 일종의 프로그래밍 언어라고 할 수 있을 정도로 방대한 분량을 다뤄야 하기 때문에 여기에서는 일부만 소개합니다.

- - -

exit를 입력하면 MySQL 모니터를 종료하고 리눅스 명령 프롬프트로 돌아옵니다.

```mysql
mysql> exit
Bye
administrator@server01:~$
```

이제 PHP를 설치해봅시다.

php5 패키지를 설치하고 동시에 libapache2-mod-php5와 php5-mcrypt 패키지를 설치합니다.

libapache2-mod-php5는 웹 서버에서 PHP5를 사용하기 위한 아파치 웹 서버 모듈이며 php5-mcrypt는 PHP에서 사용하는 암호화 라이브러리 모듈입니다.

```t
administrator@server01:~$ sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt
```

웹 서버에서 PHP 문서를 실행하도록 아파치 웹 서버 설정 파일을 수정합니다.

디렉터리 모듈 설정 파일인 `dir.conf`를 vi로 엽니다.

```t
administrator@server01:~$ sudo vi /etc/apache2/mods-enabled/dir.conf
```

DirectoryIndex는 웹 브라우저에서 웹 서버 주소를 입력하면 가장 먼저 실행하는 웹 문서를 지정하는 항목입니다.

여기에 PHP 형식의 파일인 `index.php`를 추가합니다.

```xml
<IfModule mod_dir.c>
          DirectoryIndex index.php index.html index.cgi index.pl index.php index.xhtml index.htm
</IfModule>
```

아파치 웹 서버를 재시작합니다.

```t
administrator@server01:~$ sudo service apache2 restart
```

DocumentRoot 디렉터리에 `info.php` 파일을 생성합니다.

```t
administrator@server01:~$ sudo vi /var/www/html/info.php
```

`<?php ~ ?>` 형식의 코드는 PHP 코드입니다.

문자열을 출력하고 웹 서버에 설치된 PHP 상태를 출력하는 phpinfo() 함수를 호출합니다.

```php
<?php
    phpinfo();
?>
```

호스트 웹 브라우저에서 [웹 서버 주소]/info.php 형식으로 주소를 입력해서 접속하면 다음과 같이 출력됩니다.

웹 서버를 통해 php 문서를 확인하는 데 성공했습니다.

▼ 그림 8-12 PHP 모듈 활성화 상태 확인
![ ](/img/08/12.jpg)

- - -

**Q** MySQL root 패스워드를 잊어버렸습니다.

**A** 곤란하네요. 패스워드 잊지 않도록 노력해주시기 바랍니다.

먼저 mysql 데몬을 정지합니다.

```t
administrator@server01:~$ sudo service mysql stop
mysql stop/waiting
```

다시 mysql 데몬을 실행하는데 --skip-grant 옵션을 추가해서 인증 과정을 건너뜁니다.

```t
administrator@server01:~$ sudo mysqld_safe --skip-grant &
```

mysql에 접속하면 사용자 인증 없이 MySQL 모니터에 바로 접속 가능합니다.

```t
administrator@serer01:~$ mysql
...
mysql>
```

데이터베이스 목록 중에서 기본 데이터베이스 mysql에는 사용자 권한, 데이터베이스에 대한 권한이 저장되어 있습니다.

이 내용을 수정해야 합니다. mysql 데이터베이스에 접근합니다.

```sql
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
3 rows in set (0.03 sec)

mysql> USE mysql;
```

mysql 데이터베이스에 root 사용자의 패스워드를 변경하는 쿼리를 입력합니다.

쿼리 구문이 다소 복잡한데 `root'에 해당하는(WHERE user='root') `password` 값을 새로운 패스워드로 변경(SET password=password('[새로운 패스워드]') )하여 USER 테이블을 갱신(UPDATE user)합니다.

```sql
mysql> UPDATE user SET password=password('******') WHERE user='root';
```

변경된 사용자 권한을 적용하기 위해 'FLUSH PRIVILEGES' 쿼리를 입력합니다.

```sql
mysql> FLUSH PRIVILEGES;
```

MySQL 모니터를 종료하고 명령 프롬프트로 돌아옵니다.

```sql
mysql> exit
```

--skip-grant 옵션을 적용한 mysql 데몬이 실행 중이므로 이를 중지시켜야 합니다.

```t
administrator@server01:~$ ps -ef | grep mysql
root      2076 1131  0 01:42 pts/0     00:00:00 sudo mysqld_safe --skip-grant
root      2077 2076  0 01:42 pts/0     00:00:00 /bin/sh /usr/bin/mysqld_safe --skip-grant
mysql     2437 2077  1 01:42 pts/0     00:00:00 /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mysql/plugin --user=mysql --skip-grant --log-error=/var/log/mysql/error.log --pid-file=/var/run/mysqld/mysqld.pid --socket=/var/run/mysqld/mysqld.sock --port=3306
administrator@server01:~$ sudo kill -9 2076
administrator@server01:~$ sudo kill -9 2077
administrator@server01:~$ sudo kill -9 2437
```

kill 명령으로 각 프로세스를 하나씩 중지시키는 방법도 있지만 다음과 같이 mysql과 관련된 모든 프로세스를 한 번에 중지시키는 스크립트를 사용하면 편리합니다.

mysql과 관련된 프로세스 목록 중 둘째 열(프로세스 ID) 정보를 추출하여 kill 명령의 인자로 넘겨 프로세스를 중지시킵니다.

이때 인자로 넘기는 명령은 역따옴표(`)를 이용해서 처리해야 하므로 주의합니다.

명령을 실행한 다음 ps 명령으로 다시 조회해봅시다.

```t
administrator@server01:~$ sudo kill -9 `ps -ef | grep mysql | awk '{print $2}'`
administrator@server01:~$ ps -ef | grep mysql
1000 2956 1131 0 01:52 pts/0 00:00:00 grep --color=auto mysql
```

mysql 서버를 재시작하고 테스트합니다.

root 사용자의 변경된 패스워드를 입력해서 MySQL 터미널에 접속 가능한지 확인합니다.

```t
administrator@server01:~$ sudo service mysql start
administrator@server01:~$ mysql -u root -p
```

- - -

### 워드프레스로 블로그 운영하기

준비된 리눅스, 아파치 웹 서버, PHP, MySQL 환경으로 무엇을 해볼까요?

PHP와 MySQL을 이용해서 직접 동적인 웹 사이트를 만들고 싶겠지만,

PHP나 MySQL이 무엇인지를 이 책에서 설명하기 어려운 만큼 여러분 스스로 공부하는 수밖에 도리가 없습니다.

대신 PHP, MySQL을 기반으로 개발된 오픈 소스 웹 응용 프로그램을 소개하고자 합니다.

#### PHP, MySQL 기반 웹 응용 프로그램, 워드프레스

워드프레스(Wordpress)는 블로그, 홈페이지 같은 웹 사이트를 쉽게 제작할 수 있게 도와주는 도구입니다.

워드프레스를 이용하면 누구나 웹에서 쉽게 콘텐츠를 만들어낼 수 있고, 효율적으로 관리할 수 있습니다.

때문에 워드프레스를 콘텐츠 관리 시스템(ContentsManagementSystem, CMS)으로 분류합니다.

처음에는 블로그 관리 도구로 시작했지만 전 세계 수많은 개발자와 디자이너가 추가 기능을 제공하는 플러그인, 디자인 테마를 유, 무료로 배포하면서 발전을 거듭하여 웹 사이트를 구축하는 도구로 성장했습니다.

워드프레스로 웹 사이트를 구축하는 이유는 다음과 같습니다.

* 오픈 소스이기 때문에 누구나 제한 없이 무료로 사용 가능합니다.
* 웹 사이트를 쉽게 만들 수 있고 유지보수 관리가 용이합니다.
* 웹 표준을 따르는 웹 사이트를 제작하기에 적합합니다.
* 다양한 사회 관계망 서비스(Social Network Service, SNS)와 연계하기 쉽습니다.
* 반응형 디자인을 지원하는 테마를 사용하면 모바일 환경에도 적합한 웹 사이트를 제작할 수 있습니다.

- - -

Tip

웹 사이트를 제작할 때 맞닥뜨리는 가장 큰 고민 중 하나는 호환성 문제입니다.

운영체제와 웹 브라우저를 가리지 않는 웹 사이트 제작은 쉽지 않은 일이기 때문입니다.

따라서 웹 표준(W3C 표준)을 따르는 웹 사이트를 제작할 수 있다는 점은 워드프레스가 인기를 누리는 중요한 이유가 됩니다.

- - -

최근 국내에서도 워드프레스에 대한 관심이 증가하고 있으며 이런 요청에 따라 워드프레스를 제공하는 웹 호스팅 업체도 늘어나고 있습니다.

리눅스 서버에 워드프레스를 설치하고 운영하는 방법을 알아두면 실제 웹 호스팅 업체를 통해 웹 사이트를 서비스할 때도 도움이 될 것입니다.

### 워드프레스 설치하기

**1** 워드프레스를 설치하기 위해 먼저 워드프레스 파일을 받아와야 합니다.

현재 한글 워드프레스를 얻는 주소는 [ko.wordpress.org](http://ko.wordpress.org)입니다.

웹에서 파일을 가져오는 명령 wget으로 압축된 워드프레스 파일을 받아옵니다.

```t
administrator@server01:~$ wget http://ko.wordpress.org/wordpress-3.9-ko_KR.zip
```

- - -

Tip

파일 경로를 잘 확인하기 바랍니다.

워드프레스 한국어 홈페이지([http://ko.wordpress.org](http://ko.wordpress.org))를 방문하면 워드프레스를 다운로드할 수 있는 링크가 아래 존재하는데, 이 링크를 통해 파일을 다운로드해야 합니다.

▼ 그림 8-13 워드프레스 다운로드 페이지
![ ](/img/08/13.jpg)

- - -

**2** 리눅스에서 zip으로 압축된 파일의 압축을 해제하려면 unzip이 필요합니다.

apt-get 명령으로 unzip 패키지를 설치합니다.

```t
administrator@vm001:~$ sudo apt-get install unzip
```

**3** unzip 명령으로 압축을 해제합니다.

압축 해제된 파일은 wordpress라는 디렉터리에 저장됩니다.

```t
administrator@server01:~$ ls
wordpress-3.9-ko_KR.zip
administrator@server01:~$ unzip wordpress-3.9-ko_KR.zip
administrator@server01:~$ ls
wordpress wordpress-3.9-ko_KR.zip
```

**4** wordpress를 웹 서버 루트 디렉터리인 /var/www/html에 jamesblog라는 이름으로 복사합니다.

-r은 하위 디렉터리까지 전부 복사, -p는 파일 소유권과 접근 권한을 그대로 보존하는 옵션입니다.

즉 jamesblog가 워드프레스의 루트 디렉터리가 됩니다.

```t
administrator@server01:~$ sudo cp -rp wordpress /var/www/html/jamesblog/
```

**5** 워드프레스가 사용할 기본적인 데이터베이스를 생성하기 위해 MySQL 모니터에 접속합니다.

```t
administrator@server01:~$ mysql -u root -p
```

**6** CREATE DATABASE는 데이터베이스를 생성하는 쿼리입니다.

jamesblog라는 데이터베이스를 생성합니다.

데이터베이스가 정상적으로 생성( SHOW DATABASES)됐는지 확인합니다.

```sql
mysql> CREATE DATABASE jamesblog;
Query OK, 1 row affected (0.00 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| jamesblog          |
| mysql              |
| performance_schema |
+--------------------+
4 rows in set (0.00 sec)
```

**7** MySQL 모니터를 종료합니다.

```t
mysql> exit
```

**8** 이후 워드프레스 설치 과정은 웹 브라우저에서 이루어집니다.

호스트에서 웹 브라우저를 실행하고 `[웹 서버 주소]/[워드프레스 루트 디렉터리]`로 접속합니다. (필자의 경우 www.webserver.com/jamesblog)

워드프레스 설치를 시작합니다.

`<Let`s go!>`를 클릭합니다.

▼ 그림 8-14 워드프레스 설치 시작
![ ](/img/08/14.jpg)

**9** 워드프레스가 연결할 데이터베이스에 대한 정보를 입력합니다.

➊ 워드프레스 웹 사이트가 사용할 데이터베이스 이름,

➋ MySQL에 접속할 사용자 이름(root),

➌ 사용자 패스워드(MySQL root 사용자의 패스워드),

➍ MySQL이 동작하는 주소,

➎ 워드프레스가 자동으로 생성하는 데이터베이스 테이블에 붙일 접두어를 입력하고 `<전송>`을 클릭합니다.

▼ 그림 8-15 데이터베이스 정보 입력
![ ](/img/08/15.jpg)

- - -

Tip

워드프레스는 웹 사이트를 생성하면서 데이터베이스에 여러 테이블을 자동으로 생성합니다. 이때 자동으로 생성하는 각 테이블마다 테이블 접두어(`wp_`)를 붙입니다.

- - -

**10** 설정 내용을 토대로 워드프레스 설정 파일 `wp-config.php`를 생성합니다.

텍스트 상자에 들어 있는 내용을 그대로 복사해서 붙여넣으면 됩니다.

다음과 같이 텍스트 상자의 전체 내용을 영역 지정한 뒤 마우스 오른쪽 버튼을 클릭하면 나오는 팝업 메뉴에서 `복사`를 선택합니다.

▼ 그림 8-16 설정 파일 내용 복사하기
![ ](/img/08/16.jpg)

**11** 그런 다음 ssh로 웹 서버에 접속해서 sudo vi/var/www/html/jamesblog/wp-config.php 명령으로 워드프레스 설정 파일을 생성합니다.

▼ 그림 8-17 ssh로 웹 서버에 접속해서 워드프레스 설정 파일 생성하기
![ ](/img/08/17.jpg)

**12** i를 눌러 vi의 INSERT 모드로 전환하고 터미널에서 마우스 오른쪽 버튼을 클릭하여 `붙여넣기`를 선택하면 복사한 내용을 입력할 수 있습니다.

▼ 그림 8-18 vi 편집기에 복사한 내용 붙여넣기
![ ](/img/08/18.jpg)

▼ 그림 8-19 붙여넣기 성공
![ ](/img/08/19.jpg)

**13** 파일을 저장하고 다시 웹 브라우저로 돌아와 `[설치 실행하기]`를 클릭하여 다음 단계로 진행합니다.

▼ 그림 8-20 워드프레스 설치 실행하기
![ ](/img/08/20.jpg)

- - -

Tip

이 외에도 wp-config.php 파일을 호스트에 생성하고 NFS나 삼바, scp를 이용해서 웹 서버로 전송하는 방법을 생각해볼 수 있습니다. 전송한 `wp-config.php` 파일을 워드프레스 루트 디렉터리(/var/www/html/jamesblog)로 복사하면 됩니다.

이렇게 하세요!

복사해서 붙여넣기가 잘 안 되면 직접 입력합니다. 루트 디렉터리의 설정 파일 예제(wp-config-sample.php)를 `wp-config.php`로 복사하고 vi를 열어 데이터베이스 관련 설정만 수정합니다. DB_NAME에 데이터베이스 이름, DB_USER에 데이터베이스 사용자 이름, DB_PASSWORD에 사용자 패스워드를 입력하면 됩니다.

```t
administrator@server01:~$ sudo cp /var/www/html/jamesblog/wp-config-sample.php /var/www/html/jamesblog/wp-config.php
administrator@server01:~$ sudo vi /var/www/jamesblog/wp-config.php
define('DB_NAME', 'jamesblog');
define('DB_USER', 'root');
define('DB_PASSWORD', '******');
```

- - -

**14** 웝 사이트에 대한 기본적인 정보를 입력합니다.

➊ 웹 사이트 제목
➋ 웹 사이트 관리자 이름
➌ 관리자 비밀번호
➍ 관리자 이메일 주소를 입력합니다.
➎ 웹 사이트를 검색엔진에 노출시킬지 결정합니다.

준비가 끝났으면 `[워드프레스 설치하기]`를 클릭합니다.

▼ 그림 8-21 웹 사이트 기본 정보 입력하기
![ ](/img/08/21.jpg)

- - -

Tip

여기에서 등록하는 사용자는 웹사이트 관리자로서 워드프레스 관리 페이지를 통해 웹 사이트에 대한 모든 관리 권한을 갖게 됩니다.

사용자 이름은 알파벳과 특수 기호 중 일부를 사용할 수 있습니다.

- - -

**15** 설치가 끝나면 다음과 화면이 나옵니다. `[로그인]`을 클릭합니다.

▼ 그림 8-22 워드프레스 설치 성공
![ ](/img/08/22.jpg)

**16** 앞에서 설정한 관리자 이름, 비밀번호를 입력하고 `[로그인]`을 클릭합니다.

▼ 그림 8-23 웹 사이트 알림판에 로그인하기
![ ](/img/08/23.jpg)

**17** 이 화면이 워드프로세스 웹 사이트를 관리하는 알림판 대시보드(Dashboard)입니다.

작성한 글, 댓글을 비롯한 웹 사이트 현황을 한눈에 볼 수 있고, 사용자에 대한 설정부터 웹 사이트 외모(겉모양) 수정, 다양한 기능을 갖춘 플러그인 사용을 모두 여기에서 처리합니다.

알림판에 직접 접속하려면 웹 브라우저에서 직접 주소 칸에 `[웹 서버 주소]/[워드프레스 루트 디렉터리]/wp-admin`이라고 입력하면 됩니다.

▼ 그림 8-24 웹 사이트 알림판
![ ](/img/08/24.jpg)

**18** 알림판에서 웹 사이트를 멋지게 꾸밀 수 있습니다.

테마를 변경해볼까요? 왼쪽에 있는 메뉴에서 `외모` → `테마`를 선택하고 Twenty Thirteen 테마를 활성화시켰습니다.

왼쪽 상단의 웹 사이트 제목을 선택한 후 `사이트 보기`를 클릭합니다.

▼ 그림 8-25 웹 사이트 테마 변경하기
![ ](/img/08/25.jpg)

- - -

Tip

마음에 드는 테마가 없다면 인터넷에 공개된 테마를 사용해서 적용할 수 있습니다.

- - -

**19** 간단히 테마만 변경해도 블로그다운 웹 사이트 분위기를 연출할 수 있습니다.

최종적으로 웹 사이트 주소는 `[웹 서버 주소]/[루트 디렉터리]` 형식이 됩니다.

▼ 그림 8-26 변경된 웹 사이트 테마
![ ](/img/08/26.jpg)

- - -

**Q** 워드프레스로 제작한 웹 사이트를 삭제하려면 어떻게 해야 하나요?

**A** 앞서 만든 jamesblog를 완전 삭제해봅시다. 먼저 rm 명령으로 루트 디렉터리를 삭제합니다.

```t
administrator@server01:~$ sudo rm -rf /var/www/jamesblog/
```

MySQL 모니터에 접속합니다.

```t
administrator@server01:~$ mysql -u root -p
```

워드프레스가 생성한 jamesblog 데이터베이스를 삭제합니다.

데이터베이스를 삭제하는 쿼리는 DROP DATABASE입니다.

```sql
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| jamesblog          |
| mysql              |
| performance_schema |
+--------------------+
4 rows in set (0.00 sec)

mysql> DROP DATABASE jamesblog;
Query OK, 26 rows affected (1.16 sec)
```

다시 데이터베이스 목록을 조회해서 jamesblog가 삭제된 사실을 확인하고 exit로 리눅스 명령 프롬프트로 나옵니다.

```t
mysql> exit
```

- - -

#### 워드프레스로 여러 웹 사이트 운영하기

웹 서버를 이용해서 여러 웹 사이트를 운영하려면 어떻게 해야 할까요?

예를 들어 리눅스 매거진이라는 웹 매거진(linuzine)에서 리눅스 초보자를 위한 블로그 `리눅스 무작정 따라하기(begininglinux)`와 중급자를 위한 블로그 `리눅스를 다루는 기술(masteringlinux)`을 운영한다고 가정해봅시다.

워드프레스를 이용하면 여러 웹 사이트를 운영하는 일도 어렵지 않게 설정할 수 있습니다.

**1** 먼저 홈 디렉터리에 압축 해제했던 wordpress 디렉터리를 워드프레스 루트 디렉터리로 복사합니다.

```t
administrator@server01:~$ sudo cp -rp wordpress /var/www/html/linuzine/
```

**2** root 사용자로 MySQL 모니터에 접속합니다.

```t
administrator@server01:~$ mysql -u root -p
```

**3** linuzine이라는 데이터베이스를 생성(CREATE DATABASE)합니다.

제대로 생성되었는지 확인(SHOW DATABASES)해봅시다.

```sql
mysql> CREATE DATABASE linuzine;
Query OK, 1 row affected (0.00 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| linuzine           |
| mysql              |
| performance_schema |
+--------------------+
4 rows in set (0.00 sec)
```

**4** 데이터베이스 생성이 끝나면 mysql 모니터를 종료합니다.

```t
mysql> exit
```

**5** 호스트에서 웹 브라우저를 실행하고 `[웹 서버 주소]/[워드프레스 루트 디렉터리]`로 접속([http://www.webserver.com/linuzine](http://www.webserver.com/linuzine))해서 워드프레스 설치를 진행합니다.

워드프레스가 연결할 데이터베이스에 대한 정보를 입력하는 과정입니다.

데이터베이스 이름만 다를 뿐 나머지 내용은 동일합니다.

▼ 그림 8-27 데이터베이스 정보 입력
![ ](/img/08/27.jpg)

**6** 워드프레스 설정 파일 `wp-config.php`를 생성합니다.

텍스트 상자에 들어 있는 내용을 복사해서 워드프레스 설정 파일 `/var/www/html/linuzine/wp-config.php`로 저장하고 웹 브라우저로 돌아와 `[설치 실행하기]`를 클릭합니다.

▼ 그림 8-28 워드프레스 설치 실행하기
![ ](/img/08/28.jpg)

- - -

Tip

텍스트 상자의 내용을 복사해서 워드프레스 설정 파일 /var/www/html/linuzine/wp-config.php로 저장하는 방법은 `워드프레스 설치하기`를 참고합니다.

- - -

**7** 웹 사이트에 대한 기본적인 정보를 입력한 후 `[워드프레스 설치하기]`를 클릭합니다.

설치가 끝나면 입력한 관리자 이름, 패스워드를 사용해서 로그인합니다.

admin 사용자로 알림판에 접속해보면 아직까지는 큰 차이를 확인할 수 없습니다.

▼ 그림 8-29 웹 사이트 기본 정보 입력하기
![ ](/img/08/29.jpg)

**8** 워드프레스의 멀티 사이트 기능을 활성화시키기 위해 워드프레스 설정 파일 `wp-config.php`를 vi로 수정합니다.

```t
administrator@server01:~$ sudo vi /var/www/html/linuzine/wp-config.php
```

**9**  That`s all, stop editing! Happy blogging. 행 바로 위에 define(`WP_ALLOW_MULTISITE`, true);이라고 입력합니다.

이렇게 하면 워드프레스의 멀티 사이트 기능을 활성화시킵니다.

```php
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

define('WP_ALLOW_MULTISITE', true);

/* That's all, stop editing! Happy blogging. */
```

**10** 웹 브라우저에서 알림판을 새로고침하면 왼쪽 도구 메뉴에서 전에 없던 하위 메뉴 `네트워크 설치`가 활성화됩니다.

➊ `네트워크 제목` 항목에 전체 웹 사이트의 이름을,

➋ `네트워크 관리자 이메일` 항목에 관리자 메일 주소를 입력하고 `[설치]`를 클릭합니다.

▼ 그림 8-30 웹 사이트 네트워크 생성하기
![ ](/img/08/30.jpg)

**11** 다음은 네트워크 활성화 과정입니다.

먼저 1번 항목의 텍스트 상자 내용을 영역 지정하여 복사합니다.

▼ 그림 8-31 설정 파일에 추가할 내용 복사하기
![ ](/img/08/31.jpg)

**12** 워드프레스 설정 파일 `wp-config.php`를 vi로 열어서 That`s all, stop editing! Happy blogging. 행 바로 위에 붙여 넣습니다.

커서를 원하는 위치에 갖다 놓고 i를 눌러 입력 모드로 전환한 다음 마우스 오른쪽버튼을 눌러 붙여넣으면 됩니다.

설정 내용을 저장합니다.

▼ 그림 8-32 vi 편집기에 복사한 내용 붙여넣기
![ ](/img/08/32.jpg)

▼ 그림 8-33 붙여넣기 성공
![ ](/img/08/33.jpg)

- - -

이렇게 하세요!

복사해서 붙여넣기가 잘 안되면 직접 입력합니다.

다음 코드를 /var/www/html/linuzine/ 안에 있는 `wp-config.php` 파일에서 `That`s all, stop editing! Happy blogging.` 행 앞에 추가하고 저장합니다.

```php
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
$base = '/';
define( 'DOMAIN_CURRENT_SITE', '[웹 서버 주소]' );
define( 'PATH_CURRENT_SITE', '[루트 디렉터리 주소]' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );
```

- - -

**13** 2번 항목의 텍스트 상자 내용을 영역 지정하여 복사합니다.

▼ 그림 8-34 htaccess 파일 내용 복사하기
![ ](/img/08/34.jpg)

**14** 워드프레스 루트 디렉터리(/var/www/linuzine)에 복사할 내용을 붙여넣을 `.htaccess`라는 파일을 생성합니다.

`.htaccess` 파일은 아파치 웹 서버의 mod_rewrite 모듈에 의해 웹 사이트 주소를 고쳐 쓰기 위한 규칙을 정의합니다.

```t
administrator@server01:~$ sudo vi /var/www/html/linuzine/.htaccess
```

**15** i를 눌러 삽입 모드로 바꾼 다음 터미널에서 마우스 오른쪽 버튼을 클릭하여 팝업 메뉴에서 `붙여넣기`를 선택합니다.

파일 내용을 복사했으면 파일을 저장하고 vi를 종료합니다.

▼ 그림 8-35 붙여넣기 성공
![ ](/img/08/35.jpg)

- - -

이렇게 하세요!

복사해서 붙여넣기가 잘 안 되면 직접 입력합니다.

다음과 같이 /var/www/html/linuzine/.htaccess 파일을 작성합니다.

```php
RewriteEngine On
RewriteBase /[루트 디렉터리]/
RewriteRule ^index.php$ - [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^[_0-9a-zA-Z-]+/(wp-(content|admin|includes).*) $2 [L]
RewriteRule ^[_0-9a-zA-Z-]+/(.*.php)$ $2 [L]
RewriteRule . index.php [L]
```

- - -

**16** 아파치 웹 서버 모듈을 관리하는 a2enmod 명령으로 mod_rewrite 모듈을 활성화시킵니다.

```t
administrator@server01:~$ sudo a2enmod rewrite
```

**17** 웹 서버 루트 디렉터리 /var/www에 존재하는 `.htaccess`에 대한 접근을 허용하기 위해 웹 사이트 기본 설정 파일을 수정합니다.

```t
administrator@server01:~$ sudo vi /etc/apache2/apache2.conf
```

**18** `<Directory /var/www/>~</Directory>`의 AllowOverride를 All로 수정합니다.

```xml
<Directory />
        Options FollowSymLinks
        AllowOverride None
        Require all denied
</Directory>

<Directory /usr/share>
        AllowOverride None
        Require all granted
</Directory>

<Directory /var/www/>
       Options Indexes FollowSymLinks
       AllowOverride All
       Require all granted
</Directory>
```

**19** 파일을 저장합니다.

**20** 설정 내용을 반영하기 위해 웹 서버를 재시작합니다.

```t
administrator@server01:~$ sudo service apache2 restart
```

**21** 웹 브라우저를 열어서 리눅스 매거진 알림판 [http://www.webserver.com/linuzine/wp-login.php](http://www.webserver.com/linuzine/wp-login.php)에 다시 접속합니다.

왼쪽 상단 메뉴가 달라진 것을 확인할 수 있습니다.

새로 생긴 `[내 사이트]` 메뉴 → `네트워크관리자` → `알림판`을 선택합니다.

▼ 그림 8-36 `[내 사이트]` 메뉴 → `네트워크관리자` → `알림판` 클릭
![ ](/img/08/36.jpg)

*22* `새로운 사이트 생성`을 클릭합니다.

▼ 그림 8-37 새로운 사이트 생성하기
![ ](/img/08/37.jpg)

*23* 앞서 계획한대로 `리눅스 매거진`이라는 웹사이트에서 운영할 리눅스 초보자를 위한 블로그 `리눅스 무작정 따라하기`를 생성합니다.

➊ `사이트 주소`로 `begininglinux`를

➋`사이트 제목`에는 `리눅스 무작정 따라하기`를

➌ `관리자 이메일`을 입력하고 `사이트 추가`를 클릭합니다.

▼ 그림 8-38 새로운 사이트 `리눅스 무작정 따라하기` 추가
![ ](/img/08/38.jpg)

*24* 다음으로 중급자를 위한 블로그 `리눅스를 다루는 기술`을 생성합니다.

➊ `사이트 주소`로 `masteringlinux`

➋ `사이트 제목`으로 `리눅스를 다루는 기술`

➌ `관리자 이메일`을 입력하고 `[사이트 추가]`를 클릭합니다.

▼ 그림 8-39 새로운 사이트 `리눅스를 다루는 기술` 추가
![ ](/img/08/39.jpg)

**25** 왼쪽 메뉴에서 `사이트`를 클릭하면 생성해 놓은 모든 블로그 웹 사이트를 확인할 수 있습니다.

각 웹 사이트에 대한 환경 설정, 웹사이트 활성화/해제 또는 삭제 선택, 알림판 또는 웹 사이트 방문이 가능합니다.

▼ 그림 8-40 `사이트` 메뉴에서 블로그 목록 확인
![ ](/img/08/40.jpg)

26 이렇게 해서 리눅스 매거진이라는 웹 사이트 주소는 [http://www.webserver.com/linuzine](http://www.webserver.com/linuzine) 이 되고 리눅스 매거진에서 생성한 블로그 `리눅스 무작정 따라하기`의 웹 사이트 주소는 [http://www.webserver.com/linuzine/begininglinux](http://www.webserver.com/linuzine/begininglinux), `리눅스를 다루는 기술`의 웹 사이트 주소는 [http://www.webserver.com/linuzine/masteringlinux](http://www.webserver.com/linuzine/masteringlinux)가 됩니다.

▼ 그림 8-41 리눅스 매거진 사이트
![ ](/img/08/41.jpg)

▼ 그림 8-42 리눅스 무작정 따라하기 블로그
![ ](/img/08/42.jpg)

▼ 그림 8-43 리눅스를 다루는 기술 블로그
![ ](/img/08/43.jpg)