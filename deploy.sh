###
#!/bin/bash

# 前置机前端
# author ljgeng
# 调用示例： ./depoy.sh --version=1.1.1 --service=http://localhost:8080

# 默认参数
# registry: docker-registry 地址 必须以'/'结尾， 通过--registry指定
# version: 版本号，通过--version指定
# service 后端服务地址
# name docker name
# port docker port

registry=hub.iflytek.com/brain
version=latest
service=http://172.31.223.30:19000/
name=biims-ui
port=10089

# 读取参数
while [ $# -ge 1 ] ; do
case "$1" in
  --registry) registry=$2; shift 2;;
  --version) version=$2; shift 2;;
  --service) service=$2; shift 2;;
  --name) name=$2; shift 2;;
  --port) port=$2; shift 2;;
  *) echo "unknown parameter $1." ; exit 1 ; break;;
esac
done

function runDocker() {
  sudo docker create -p $port:80 --env BACKEND_URL=$service --env TZ="Asia/Shanghai" --name $name $registry/$name:$version /bin/sh -c "envsubst '\$BACKEND_URL' < /etc/nginx/nginx.conf.default > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
  sudo docker start $name
}

function runWeb() {
  containerId=`sudo docker ps -a|grep $name:|awk '{print $1}'`
  if [ "$containerId" == "" ]; then
    runDocker
  else
    sudo docker stop ${containerId}
    sudo docker rm ${containerId}
    runDocker
  fi
}

# 创建docker容器
runWeb
