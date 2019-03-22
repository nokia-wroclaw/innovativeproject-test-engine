If you want run the project on local VM [JUMP TO STEP 1B](#STEP-1B)
# STEP 1A
## Creating VM
Create new project in (google cloud)[console.cloud.google.com] with name such as `projekt-zespolowy-n`
In the list (top-left corner) select `COMPUTE` -> `Compute Engine` -> `VM instances`
Click Create.
Fill in the form
```
Name: test-machine
Region: europe-west3
Zone: europe-west3-c
Machine type:
	(default)
	1vCPU 3.75GB
Boot disk:
	New 10 GB standard persisten disk
	Ubuntu 18.04 LTS Minimal
```
Click create 
[JUMP TO STEP 2](#STEP-2)

# STEP 1B
## Creating local VM
Create VM using Ubuntu 18.04LTS Minimal image 1vCPU; 4GB RAM; 10GB storage

# STEP 2
## Instaling basic environment

Connect to VM via ssh and execute following commands 
or just run `bash <(curl -s https://raw.githubusercontent.com/nokia-wroclaw/innovativeproject-test-engine/master/installation/install_script.sh)` 

```bash
sudo apt update
### install software needed for development
sudo apt install vim git htop
### install docker-ce
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo groupadd docker
sudo usermod -aG docker $USER
```
Log out and in in order to changes take place.


