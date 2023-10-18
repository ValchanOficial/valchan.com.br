---
date: 2023-06-14
title: "WSL2 + Kind + Kubectl"
description: "Como instalar o Kind e o Kubectl no WSL2"
category: "WSL2"
image: "/assets/img/cover.png"
---

Antes de tudo, é necessário possuir o Docker instalado, no meu outro post você pode verificar como instalar: <a href="https://valchan.com.br/install-wsl-with-docker-windows/" target="_blank" rel="nofollow, noreferrer,noopener,external">Windows + WSL2 + Docker</a>

## Instalando o Kind

Você pode verificar a release aqui: <a href="https://github.com/kubernetes-sigs/kind/releases" target="_blank" rel="nofollow, noreferrer,noopener,external">Github kubernetes-sigs/kind</a>

```bash
# Para x86_64
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.19.0/kind-linux-amd64
# Para ARM64
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.19.0/kind-linux-arm64

# Permissão de execução
chmod +x ./kind

# Mover para o diretório bin
sudo mv ./kind /usr/local/bin

# Verifique a versão
kind version

```

## Instando o kubectl

Você pode verificar a release aqui: <a href="https://kubernetes.io/releases/" target="_blank" rel="nofollow, noreferrer,noopener,external">Kubernetes - Release History</a>

```bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.27.0/bin/linux/amd64/kubectl

# Permissão de execução
chmod +x ./kubectl

# Mover para o diretório bin/kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

# Nome do usuário do Windows
windowsUser=$1

# Crie o diretório .kube
mkdir -p ~/.kube

# Crie um link simbólico para o arquivo config do Windows
ln -sf "/mnt/c/users/$windowsUser/.kube/config" ~/.kube/config

# Verifique a versão
kubectl version --short
```

## Criando um cluster

```bash
# Crie um arquivo config.yml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30000
    hostPort: 30000
    protocol: TCP

# Crie o cluster
kind create cluster --config=config.yml --name nomedoseucluster

# Verificando se o cluster foi criado
kubectl cluster-info --context kind-nomedoseucluster
```

## Alguns erros e como corrigir:

- **ERROR: failed to create cluster: failed to write KUBECONFIG:**

```bash
# Remova o config danificado do diretório .kube
ls $HOME/.kube # Verifica se existe o arquivo config
rm $HOME/.kube/config # Remove o arquivo config

# Adicione no ~/.bashrc o path do Kube Config
export KUBECONFIG=${HOME}/.kube/config
#exemplo
echo "export KUBECONFIG=${HOME}/.kube/config" >> ~/.bashrc
```

- **ERROR: failed to create cluster: failed to init node with kubeadm: command "docker exec**  
  Provavelmente você não possui espaço para criar o cluster, se possível remova do Docker os containers, etc que não estão sendo utilizados.

<br/><br/>

**_Fontes:_**

- <a href="https://kind.sigs.k8s.io/docs/user/quick-start#installing-from-release-binaries" target="_blank" rel="noopener noreferrer">Kind - Installing From Release Binaries</a>

- <a href="https://kind.sigs.k8s.io/docs/user/using-wsl2/">Kind - Using WSL2</a>

- <a href="https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/">WSL+Docker: Kubernetes on the Windows Desktop</a>
