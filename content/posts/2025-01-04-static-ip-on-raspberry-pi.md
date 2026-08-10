---
title: "How to assign a static IP on Raspberry PI?"
description: "A short tutorial on how to have a same IP address on your raspberry pi"
pubDate: 2025-01-04
---

# Static IP on Raspberry PI

## TL;DR

Use `nmcli` (NetworkManager CLI) to update the `ipv4.address`. For example:

```bash
sudo nmcli con mod "preconfigured" ipv4.addresses 192.168.1.45/24
```

---

To complete my basic home lab setup, I had to set a static IP on my Raspberry Pi Zero. As I'm not a Linux enthusiast and I rely on Google search results, I followed lots of blog posts, editing the `/etc/dhcpcd.conf` file, but none of them were giving any results.

## What was the problem?

After doing a bit more research about "why /etc/dhcpcd.conf not taking effect", I found out that dhcpcd is not being used anymore! ([source](https://raspberrypi.stackexchange.com/questions/37920/how-do-i-set-up-networking-wifi-static-ip-address-on-raspbian-raspberry-pi-os/74428#74428))

So, now we know that it's using NetworkManager instead and we have to use it to update our IP.

## Find the connection name first

To set the static IP, we should know which connection we should modify. In order to do it, execute this command:

```bash
nmcli dev status
```

It will give a result like this:

```bash
DEVICE         TYPE      STATE                   CONNECTION
wlan0          wifi      connected               preconfigured
lo             loopback  connected (externally)  lo
p2p-dev-wlan0  wifi-p2p  disconnected            --
```

`wlan0` is my WI-FI connection and its connection name is `preconfigured`

> [!NOTE]
> You can find out more details by just entering the `nmcli` command.

## Modify the connection

In order to do it, we should just update the connection's IPv4 address and nothing else! (At least in my case.)

We should execute a command in this template:

```bash
sudo nmcli con mod "CONNECTION_NAME" ipv4.addresses IP.ADD.RE.SS/24
```

And based on my RPi and router settings, I executed this command:

```bash
sudo nmcli con mod "preconfigured" ipv4.addresses 192.168.1.45/24
```

Now, give your device a reboot, and you're good to go!
