---
title: "My Windows setup"
summary: "How do I setup my Windows environment"
publishedAt: 2024-11-24
---

# My Windows setup

Whenever I talk with someone about our operating systems, I hear their uncountable issues with Windows, and I'm always like "Why I've never experienced any (or most) of these?". After talking a little bit, We find out that our installation steps are different in some small details.

So, in this post, I'm going to tell about every app, tool, and script that I use for my Windows installation step by step.

## Before we begin

This blog post is not intended as a _tutorial_ but a walkthrough on my Windows setup. I also expect you to have some common knowledge, too.

> [!NOTE]
> This blog post may be updated regularly, so expect changes every few months or so. I'll tell the changes in [my Telegram channel](/urls/telegram-channel)

> [!CAUTION]
> Please do your own research before using any apps, scripts, or commands of this post from different perspectives (security, legally, and what they even do). I'm not responsible for any possible issues.

## Table of contents

- [Prepare a USB drive](#prepare-a-usb-drive)
  1. [Required ISO files](#required-iso-files)
  2. [Make the USB drive bootable](#make-the-usb-drive-bootable)
  3. [Download the essentials](#download-the-essentials)
  4. [Take a backup](#take-a-backup)
- [Installation Process](#installation-process)
  1. [Windows Installation](#windows-installation)
  2. [Windows Setup](#windows-setup)
- [Environment Setup Process](#environment-setup-process)
- [Apps, Scripts, and Alternatives](#apps-scripts-and-alternatives)

## Prepare a USB drive

### Required ISO files

- Windows 11
  - I **ALWAYS** download my Windows .iso file from Microsoft themselves; I don't trust any 3rd party websites when Microsoft is already providing it for free.
  - Download: https://www.microsoft.com/en-us/software-download/windows11
- Linux
  - It's always good to have a live-bootable GNU/Linux OS ready for emergency or something.
  - I just like Manjaro; you can choose whatever distro you want.
  - Download: https://manjaro.org/products/download/x86

### Make the USB drive bootable

To make your USB flash drive bootable, I prefer Ventoy. It's way simpler and easier to use without sacrificing the whole USB for a single OS installation file. You can have and boot as many .iso files as you want while having most of your personal files in there too!

1. Download Ventoy
   - https://www.ventoy.net/en/download.html
2. Make the USB drive bootable using **Ventoy2Disk**
3. Move all of your .iso files there.
4. You're done!

### Download the essentials

To be able to begin the setup process instantly after the installation, prepare your essential apps, drivers, and files. Here is my checklist:

1. NekoRay (VPN): [Link](https://github.com/MatsuriDayo/nekoray)
   - Depends On: VCRedist: [Link](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
2. Chrome: [Link](https://www.google.com/chrome/)
3. Telegram: [Link](https://telegram.org/dl/desktop)
4. GHelper: [Link](https://github.com/seerge/g-helper)
   - ArmoryCrate Alternative. ([more info](#ghelper))
   - Depends On: .NET 8.0 Desktop Runtime: [Link](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
5. Drivers:
   - Network driver
   - Printer driver
   - iGPU/dGPU drivers

### Take a backup

Now that our USB drive is ready for the installation, we should take a backup from our current installation. Here is a list of files and folders that I usually look for. (they might be different for you.)

- Files

  - .gitconfig: `%UserProfile%\.gitconfig`
  - scoop data: `scoop export > scoop.json`
  - scoop config: `%UserProfile%\.config\scoop`
  - RClone config: `%UserProfile%\scoop\apps\rclone\current\rclone.conf`
  - VSCode settings: `%AppData%\Code\User\settings.json`
  - vpn configurations: `export them manually`

- Folders

  - .ssh: `%UserProfile%\.ssh`
  - Fonts: `C:\Windows\Fonts`
  - Projects: `%UserProfile%\Documents\GitHub`
  - Portable apps: `%UserProfile%\Documents\Apps`
  - Scoop persist: `%UserProfile%\scoop\persist`

- Extra
  - Installed Apps list

## Installation Process

Now we're ready to install Windows! I won't get into the details but just a quick summary.

### Windows Installation

1. Boot into Ventoy
2. Select the Windows .iso file
3. Choose normal boot
4. Follow the process
   - _Language_: English (United States)
   - _OS_: Windows 11 Pro
   - For a clean installation, deleting all of the disk's partitions is recommended.

### Windows Setup

After the installation, there's a way to avoid "Login to your Microsoft account" page. to do it,

1. Disable network connections (if any)
2. Bypass OOBE (out-of-box experience)
   - [Video Preview](https://docs.atlasos.net/getting-started/installation/#31-initial-setup-oobe)
   1. Select your language and keyboard layout.
   2. Press `Shift + F10` on "Let's connect you to a network" page.
   3. Enter `OOBE\BYPASSNRO` command.
   4. You're computer will be restarted.
   5. After doing the first part again, now choose "I don't have internet connection".
3. Continue the process
   - I prefer to _deny_ everything as much as possible.

## Environment Setup Process

Now we're in our desktop and ready to setup our environment!

You can do them in any order you like, but these are ordered in the way I do them.

- Install the Network driver (if required)
- Prepare your VPN
  - Install VCRedist
  - Launch NekoRay
  - Import your VPN configurations
- Install Chrome
- Active Windows
  - Using [Massgrave](#massgrave)
- Debloat Windows
  - Using [Win11Debloat](#win11debloat)
- Install the rest of the drivers
  - I just install dGPU drivers
  - I let Windows to handle the rest
- Update settings, colors, etc.
  - Delete the *Color Profile*s (System > Display > Color Profile)
  - Update _power and battery_ (System > Power and battery)
  - Update/Enable _Storage Sense_ (System > Storage > Storage Sense)
- Install the apps
  - I use [scoop](https://scoop.sh/) whenever is possible
    - _DO NOT_ install everything from scoop, especially your game launchers, social media apps, vscode and spotify.
  - Take a look at the [Apps, Scripts, and Alternatives](#apps-scripts-and-alternatives) section.
- Execute optimization scripts
  - I've found some interesting scripts recently but didn't have enough time to try and see how they actually work.
  - I'll update the post after more investigations.

## Apps, Scripts, and Alternatives

Now that you're setting up your Windows environment, take a break and look at this section which is basically about my recommendations.

- Apps: You can install them however you want, but I recommend you some sources to download and install some specific apps.
- Scrips: A set of scripts to active, debloat, or even optimize some specific parts of your environment.
- Alternatives: Some underrated alternative apps that I've fell in love with.

| Name                                  | Type        |
| ------------------------------------- | ----------- |
| [Microsoft Office](#microsoft-office) | App         |
| [Adobe Apps](#adobe-apps)             | App         |
| [massgrave](#massgrave)               | Script      |
| [Win11Debloat](#win11debloat)         | Script      |
| [GHelper](#ghelper)                   | Alternative |
| [Powershell 7](#powershell-7)         | Alternative |

### Microsoft Office

- Type: App
- Description: A better way to install Microsoft Office apps.
- Source: [MS:Office Deployment Tool](https://learn.microsoft.com/en-us/microsoft-365-apps/deploy/overview-office-deployment-tool)
- **Note 1:** Don't forget to use [massgrave](#massgrave) after the installation.
- **Note 2:** Also take a look at [massgrave/genuine-installation-media](https://massgrave.dev/genuine-installation-media).

If you're lazy to read the source, here's a shortened version:

1. Create a configuration file
   - from [config.office.com](https://config.office.com/deploymentsettings)
2. Download and run office deployment tool
   - from [MS:download?id=49117](https://www.microsoft.com/en-us/download/details.aspx?id=49117)
3. Open the terminal and run: (download step)
   - `.\setup.exe /download .\Configuration.xml`
4. Open the Terminal (as Administrator) and run: (installation step)
   - `.\setup.exe /configure .\Configuration.xml`

### Adobe Apps

- Type: App
- Description: If you can't buy Adobe apps, take a look at r/GenP!
- Source: [r/GenP](https://www.reddit.com/r/GenP/wiki/index/)
- **Note:** They're way more trustworthy and even easier to install compared to other untrusted sources.

### Massgrave

- Type: Script
- Description: Best way to activate Windows and Office.
- Source: [massgrave.dev](https://massgrave.dev/)

### Win11Debloat

- Type: Script
- Description: Easiest way to remove bloatwares from Windows 11.
- Source: [GitHub:Win11Debloat](https://github.com/Raphire/Win11Debloat)

### GHelper

- Type: Alternative
- Description: A lightweight **ArmoryCrate** alternative.
- Source: [GitHub:g-helper](https://github.com/seerge/g-helper)
- **Note:** ArmoryCrate just makes Windows worse with tons of bloated processes, but on the other hand, GHelper is just a single and lightweight portable executable!

### Powershell 7

- Type: Alternative
- Description: Way better version of Windows Powershell (Powershell 5).
- Source: [GitHub:Powershell](https://github.com/PowerShell/PowerShell)

## Scoop Recommendations

Scoop is great and I love it, but it's not good for everything. So here's a list about the apps that you should or shouldn't install using scoop.

### Do NOT install ||scoop-blacklist||

- discord
  - Update hell
- docker
  - Docker Desktop is just better
- epic-games-launcher
  - Uninstalls EVERYTHING (games) after each update!
- git
  - Weird configuration behaviors (especially in VSCode)
- googlechrome
  - Can't make it default properly
- nodejs
  - Might break after each update
- spotify
  - Fails to update
- telegram
  - Fails to update
- vscode
  - Weird updates + GitHub Desktop can't detect it

### Do Install ||scoop-recommended||

- aria2
- ffmpeg
- github
- go
- mpv
- openjdk21
- rclone
  - At the moment of writing this, it's config file is not stored properly. so might break after each update.
- task
- tdm-gcc
- tokei
- upx
- windirstat
- winrar

---

That's it! Now you know how I setup my Windows environment. I hope that you found this post useful.

Thanks for reading. ❤️
