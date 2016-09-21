#新手centos 配置 （*nix）

##创建新用户
```
    两个重要文件 passwd 和 group

    useradd fanhehe  <创建新用户>
        -d /home/fanhehe 指定用户主目录
        -g #########     指定用户组
        -G #########     指定从属多个用户组
        -s /bin/zsh      指定登录shell
    userdel fanhehe  <删除用户>
    usermod fanhehe  <修改用户信息>
        配置同上
        -e  MM/DD/YY  设置用户有效期
    passwd fanhehe   <修改密码>
``` 

##zsh
```
    查看当前所使用的shell echo $SHELL
    查看当前bin下是否有zsh  cat /etc/shells

    安装zsh
    sudo yum install zsh

    切换shell
    chsh -s /bin/zsh

    重启
```

##oh-my-zsh
``` git
        sudo yum install git
    oh-my-zsh
        wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

##vim
```
    安装 vim 配置
    curl http://j.mp/spf13-vim3 -L -o - | sh
```
> quote
* [vim 配置 ](http://vim.spf13.com/#install)
* [oh-my-zsh](http://www.bubuko.com/infodetail-900295.html)
