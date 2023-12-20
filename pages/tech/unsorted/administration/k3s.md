# Установка k3s


## Простая установка k3s

Ставить k3s можно последнюю или с указанием версии (как на рабочей). См. [10-k3s.sh](https://github.com/iconicompany/icluster/blob/master/10-k3s.sh)

```
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.26.2+k3s1 sh -s - server \
--write-kubeconfig-mode="0640"
```

## Настройка путей к конфигам

k3s пишет конфиг в  /etc/rancher/k3s/k3s.yaml. Чтобы он стал доступен openlens, нужно скопировать его в `$HOME/.kube/config`.
см. [20-config.sh](https://github.com/iconicompany/icluster/blob/master/20-config.sh)

```
sudo groupadd -f k3s
sudo usermod -aG k3s $USER
sudo chown root:k3s /etc/rancher/k3s/k3s.yaml
mkdir -p $HOME/.kube
sudo cp /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
sudo chown $USER $HOME/.kube/config
sudo chmod og-rwx $HOME/.kube/config
```

## Установить k3s с  postgres

В рабочей среде лучше ставить вариант с базой в Postgres, см. [10-k3s-pg.sh](https://github.com/iconicompany/icluster/blob/master/10-k3s-pg.sh)

1. Установить зависимости `sudo apt install postgresql postgresql-client`
2. Настроить доступ к БД из сети см. [postgres.sh](https://github.com/iconicompany/icluster/blob/master/database/postgres.sh)


## Создать БД

## Объединение конфигов в один файл

В переменной KUBECONFIG прописать через : пути к файлам конфигурации и выполнить команду  `kubectl config view --flatten`
```
export KUBECONFIG=`ls -d $DEST/* | tr '\n' ':'`
kubectl config view --flatten > $DEST/config
mv $DEST/config -f $HOME/.kube/config
```
