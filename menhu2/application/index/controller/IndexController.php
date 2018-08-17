<?php

namespace app\index\controller;

use think\Controller;
use think\Request;
use think\db;
use think\paginator;
use app\index\model\Information;
use app\index\model\Sciencename;
use app\index\model\Sciencetechnology;

class IndexController extends Controller {

    //首页数据加载 
    public function index() {
        $user = model('Information');
        $res = $user->limit(12)
                        ->order('id', 'desc')
                        ->select()->toArray();
        $this->assign("list", $res);
        return view('index');
//        return '<style type="text/css">*{ padding: 0; margin: 0; } .think_default_text{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p> ThinkPHP V5<br/><span style="font-size:30px">十年磨一剑 - 为API开发设计的高性能框架</span></p><span style="font-size:22px;">[ V5.0 版本由 <a href="http://www.qiniu.com" target="qiniu">七牛云</a> 独家赞助发布 ]</span></div><script type="text/javascript" src="https://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script><script type="text/javascript" src="https://e.topthink.com/Public/static/client.js"></script><think id="ad_bd568ce7058a1091"></think>';
    }

    //首页资讯详情数据查看
    public function index_show() {
        $id = $_GET['id'];
        $user = model('Information');
        $res = $user->where('id', $id)
                ->select()
                ->toArray();
//            var_dump($res);
        $this->assign("list", $res);
        return view("details");
    }

    
    //关于我们页面
    public function about() {

        return view("about");
    }

    public function contact() {
        return view("contact");
    }

    public function map() {
        return view("map");
    }
    
     public function zmap() {
        return view("zmap");
    }

    public function introductor() {
        return view("introductor");
    }

    //科技成果页面
    public function kjcg() {

        $user = model('Sciencename');
        $users = model('Sciencetechnology');
        $res1 = $user->all()->toArray();
        $where['sort'] = input('get.sort') ? input('get.sort') : '';
        $where['pid'] = input('get.id') ? input('get.id') : '';
        $res1 = $user->all()->toArray();
        $res2 = $users->where($where)->find();
//        var_dump($res2);
        return $this->fetch('kjcg', ['list1' => $res1, 'list2' => $res2]);
    }
  //科技成果iframe页面
    public function kjcg_iframe() {

        $users = model('Sciencetechnology');
        $where['sort'] = input('get.sort') ? input('get.sort') : '';
        $where['pid'] = input('get.id') ? input('get.id') : '';
        $res2 = $users->where($where)->find();
//        $res2 = $users->where('pid',1)->where("id",1)->find(); 
//        var_dump($res2);
        return $this->fetch('kjcg_iframe', ['list2' => $res2]);
    }


    //科技转移
    public function  kjzy(){

       //资讯分页
        $user = model('Information');
        $re = $user->paginate(10);
        return $this->fetch('kjzy',['lists'=>$re]);
    }
    
    //科技转移侧边加载页面
    public function kjzy_show(){
        $users = model('Information');
        $where['sort'] = input('get.sort');
        $res2 = $users->where($where)->paginate(10)->toArray();
//              var_dump($res2);
        return $res2;
    }

    //资讯中心加资讯分页
    public function news() {
        //资讯动态加载
        $user = model('Information');
        $res = $user->limit(12)
            ->order('id', 'desc')
            ->select()->toArray();
        $this->assign("list", $res);
        
       //资讯分页
        $re = $user->paginate(10);
        return $this->fetch('news',['lists' => $re,'list'=>$res]);

    }
    
    //资讯中心侧边iframe页面
    public function news_iframe() {
        $users = model('Information');
        $where['sort'] = input('get.sort');
        $res2 = $users->where($where)->paginate(10)->toArray();
//              var_dump($res2);
        return $res2;

    }

    //资讯详情展示
    public function news_show() {
        $id = $_GET['id'];
        $user = model('Information');
        $res = $user->where('id', $id)
            ->select()
            ->toArray();
//            var_dump($res);
        $this->assign("list", $res);
        return view("details");
    }

    public function periodical() {
        return view("periodical");
    }

    //搜索
    public function search() {
        $text = $_POST['text'];
        $_SESSION['text'] = $text;
        $user = model('Information');
        if ($text) {
            $res = $user->where('title|content', 'like', '%' . $text . '%')
                    ->select()
                    ->toArray();
            //        var_dump($res);
            $this->assign("name", $_SESSION['text']);
            $this->assign("list", $res);
        } else {
            $res = $user->all()->toArray();
            $this->assign("name", "无关键字");
            $this->assign("list", $res);
        }
        return view("search");
    }

}
