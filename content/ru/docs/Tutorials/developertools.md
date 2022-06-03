---
title: "Setup Fullstack developer workstation"
date: 2017-01-05
weight: 5
description: >
  How to setup developer workstation (Linux or Windows).
---

## Before you begin

To start fullstack development on your PC, you have two options

1. Install [Ubuntu](https://ubuntu.com/download)/[Kubuntu](https://kubuntu.org/getkubuntu/) (if you prefer KDE) - recomended way
2. [Install chocolatley package manager](https://chocolatey.org/install) in Windows OS, or download and install all required packages manully

## Install NodeJS

{{< tabpane >}}
  {{< tab header="Ubuntu" >}}
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
  {{< /tab >}}
  {{< tab header="Windows" >}}
   choco install nodejs
  {{< /tab >}}
{{< /tabpane >}}

## Install VSCode

Build and debug modern web and cloud applications. Code is free and available on your favorite platform - Linux, Mac OSX, and Windows.


{{< tabpane >}}
  {{< tab header="Ubuntu" >}}
cd /tmp
wget -O vscode.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'
sudo apt install ./vscode.deb
rm -f vscode.deb
  {{< /tab >}}
  {{< tab header="Windows" >}}
   choco install vscode
  {{< /tab >}}
{{< /tabpane >}}

## Install PostgreSQL

PostgreSQL is an object-relational database management system.

{{< tabpane >}}
  {{< tab header="Ubuntu" >}}
   sudo apt-get install -y postgresql postgresql-client
  {{< /tab >}}
  {{< tab header="Windows" >}}
   choco install postgresql -y --params '/Password:test'
  {{< /tab >}}
{{< /tabpane >}}


## Install DBeaver

DBeaver is free and open source universal database tool for developers and database administrators.

{{< tabpane >}}
  {{< tab header="Ubuntu" >}}
sudo add-apt-repository ppa:serge-rider/dbeaver-ce -y
sudo apt-get install dbeaver-ce -y
  {{< /tab >}}
  {{< tab header="Windows" >}}
   choco install dbeaver -y
  {{< /tab >}}
{{< /tabpane >}}

## Install Chromium

Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all Internet users to experience the web

{{< tabpane >}}
  {{< tab header="Ubuntu" >}}
sudo add-apt-repository ppa:savoury1/chromium -y
sudo add-apt-repository ppa:savoury1/ffmpeg4 -y
sudo apt-get update
sudo apt install chromium-browser -y
  {{< /tab >}}
  {{< tab header="Windows" >}}
   choco install chromium -y
  {{< /tab >}}
{{< /tabpane >}}

