# Ainspection
Travis Unit Test Result
Worker information
hostname: ip-10-12-9-85:547d5ffe-d1a8-4685-a31e-d156cb3d1d73
version: v2.5.0-8-g19ea9c2 https://github.com/travis-ci/worker/tree/19ea9c20425c78100500c7cc935892b47024922c
instance: 4b4fb11:travis:ruby
startup: 587.506891ms
system_info
Build system information
Build language: ruby
Build group: stable
Build dist: precise
Build id: 189415772
Job id: 189415773
travis-build version: 8720fc090
Build image provisioning date and time
Thu Feb  5 15:09:33 UTC 2015
Operating System Details
Distributor ID:	Ubuntu
Description:	Ubuntu 12.04.5 LTS
Release:	12.04
Codename:	precise
Linux Version
3.13.0-29-generic
Cookbooks Version
a68419e https://github.com/travis-ci/travis-cookbooks/tree/a68419e
GCC version
gcc (Ubuntu/Linaro 4.6.3-1ubuntu5) 4.6.3
Copyright (C) 2011 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
LLVM version
clang version 3.4 (tags/RELEASE_34/final)
Target: x86_64-unknown-linux-gnu
Thread model: posix
Pre-installed Ruby versions
ruby-1.9.3-p551
Pre-installed Node.js versions
v0.10.36
Pre-installed Go versions
1.4.1
Redis version
redis-server 2.8.19
riak version
2.0.2
MongoDB version
MongoDB 2.4.12
CouchDB version
couchdb 1.6.1
Neo4j version
1.9.4
RabbitMQ Version
3.4.3
ElasticSearch version
1.4.0
Installed Sphinx versions
2.0.10
2.1.9
2.2.6
Default Sphinx version
2.2.6
Installed Firefox version
firefox 31.0esr
PhantomJS version
1.9.8
ant -version
Apache Ant(TM) version 1.8.2 compiled on December 3 2011
mvn -version
Apache Maven 3.2.5 (12a6b3acb947671f09b81f49094c53f426d8cea1; 2014-12-14T17:29:23+00:00)
Maven home: /usr/local/maven
Java version: 1.7.0_76, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-7-oracle/jre
Default locale: en_US, platform encoding: ANSI_X3.4-1968
OS name: "linux", version: "3.13.0-29-generic", arch: "amd64", family: "unix"
fix.CVE-2015-7547
$ export DEBIAN_FRONTEND=noninteractive
W: Size of file /var/lib/apt/lists/us.archive.ubuntu.com_ubuntu_dists_precise-updates_restricted_binary-amd64_Packages.gz is not what the server reported 19576 20785
W: Size of file /var/lib/apt/lists/us.archive.ubuntu.com_ubuntu_dists_precise-updates_restricted_binary-i386_Packages.gz is not what the server reported 19521 20707
W: Size of file /var/lib/apt/lists/us.archive.ubuntu.com_ubuntu_dists_precise-backports_multiverse_source_Sources.gz is not what the server reported 5886 5888
W: Size of file /var/lib/apt/lists/ppa.launchpad.net_travis-ci_zero-mq_ubuntu_dists_precise_main_binary-amd64_Packages.gz is not what the server reported 832 1195
W: Size of file /var/lib/apt/lists/ppa.launchpad.net_ubuntugis_ppa_ubuntu_dists_precise_main_binary-amd64_Packages.gz is not what the server reported 33653 36677
W: Size of file /var/lib/apt/lists/ppa.launchpad.net_ubuntugis_ppa_ubuntu_dists_precise_main_binary-i386_Packages.gz is not what the server reported 33699 36733
W: Size of file /var/lib/apt/lists/security.ubuntu.com_ubuntu_dists_precise-security_restricted_binary-amd64_Packages.gz is not what the server reported 13782 14904
W: Size of file /var/lib/apt/lists/security.ubuntu.com_ubuntu_dists_precise-security_restricted_binary-i386_Packages.gz is not what the server reported 13751 14885
Reading package lists...
Building dependency tree...
Reading state information...
The following extra packages will be installed:
  libc-bin libc-dev-bin libc6-dev
Suggested packages:
  glibc-doc
The following packages will be upgraded:
  libc-bin libc-dev-bin libc6 libc6-dev
4 upgraded, 0 newly installed, 0 to remove and 266 not upgraded.
Need to get 8,840 kB of archives.
After this operation, 14.3 kB disk space will be freed.
Get:1 http://us.archive.ubuntu.com/ubuntu/ precise-updates/main libc6-dev amd64 2.15-0ubuntu10.15 [2,943 kB]
Get:2 http://us.archive.ubuntu.com/ubuntu/ precise-updates/main libc-dev-bin amd64 2.15-0ubuntu10.15 [84.7 kB]
Get:3 http://us.archive.ubuntu.com/ubuntu/ precise-updates/main libc-bin amd64 2.15-0ubuntu10.15 [1,177 kB]
Get:4 http://us.archive.ubuntu.com/ubuntu/ precise-updates/main libc6 amd64 2.15-0ubuntu10.15 [4,636 kB]
Fetched 8,840 kB in 0s (35.2 MB/s)
Preconfiguring packages ...
(Reading database ... 71420 files and directories currently installed.)
Preparing to replace libc6-dev 2.15-0ubuntu10.10 (using .../libc6-dev_2.15-0ubuntu10.15_amd64.deb) ...
Unpacking replacement libc6-dev ...
Preparing to replace libc-dev-bin 2.15-0ubuntu10.10 (using .../libc-dev-bin_2.15-0ubuntu10.15_amd64.deb) ...
Unpacking replacement libc-dev-bin ...
Preparing to replace libc-bin 2.15-0ubuntu10.10 (using .../libc-bin_2.15-0ubuntu10.15_amd64.deb) ...
Unpacking replacement libc-bin ...
Processing triggers for man-db ...
Setting up libc-bin (2.15-0ubuntu10.15) ...
(Reading database ... 71419 files and directories currently installed.)
Preparing to replace libc6 2.15-0ubuntu10.10 (using .../libc6_2.15-0ubuntu10.15_amd64.deb) ...
Unpacking replacement libc6 ...
Setting up libc6 (2.15-0ubuntu10.15) ...
Setting up libc-dev-bin (2.15-0ubuntu10.15) ...
Setting up libc6-dev (2.15-0ubuntu10.15) ...
Processing triggers for libc-bin ...
ldconfig deferred processing now taking place
git.checkout
0.62s$ git clone --depth=50 --branch=master https://github.com/richardiyama/Ainspection.git richardiyama/Ainspection
Cloning into 'richardiyama/Ainspection'...
remote: Counting objects: 1031, done.
remote: Compressing objects: 100% (719/719), done.
remote: Total 1031 (delta 293), reused 1031 (delta 293), pack-reused 0
Receiving objects: 100% (1031/1031), 3.27 MiB | 0 bytes/s, done.
Resolving deltas: 100% (293/293), done.
Checking connectivity... done.
$ cd richardiyama/Ainspection
$ git checkout -qf 832596f7bf3f582b65572d5cf19805c380b601b5
This job is running on container-based infrastructure, which does not allow use of 'sudo', setuid and setguid executables.
If you require sudo, add 'sudo: required' to your .travis.yml
See https://docs.travis-ci.com/user/workers/container-based-infrastructure/ for details.
rvm
0.13s$ rvm use default
Using /home/travis/.rvm/gems/ruby-1.9.3-p551
$ ruby --version
ruby 1.9.3p551 (2014-11-13 revision 48407) [x86_64-linux]
$ rvm --version
rvm 1.26.10 (latest-minor) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]
$ bundle --version
Bundler version 1.7.6
$ gem --version
2.4.5
0.01s$ JavaScript/app.js
/home/travis/build.sh: line 57: JavaScript/app.js: Permission denied
The command "JavaScript/app.js" exited with 126.
Done. Your build exited with 1.

INSTRUCTION...
To run this app on your localhost. Please use  http-server..
You can install "http-server" globally: npm install http-server -g

Or just visit this website: https://protected-lowlands-63301.herokuapp.com.
please note that it is not running well on the website,I don't know why..
But you can run it locally and get the right output.

Thank you.

Neiljun
