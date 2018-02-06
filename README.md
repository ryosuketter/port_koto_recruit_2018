# 光東株式会社｜2018年度新卒採用サイト README

<img src="./dest/recruit/shinsotsu/assets/img/ogp.png" height="300">

URL:

## 期間

2017-12-?? 〜 2018-01-??

## 関係者
- 営業：採用コンサル事業部
    - 滝澤(ryota.takizawa@theport.jp)
    - 柴田(risa.shibata@theport.jp)
- ディレクター
    - 金沢(hidetake.kanazawa@theport.jp)
- デザイン
    - 綿貫修平(shuhei.watanuki@theport.jp)
- コーディング
    - 志水亮介(ryosuke.shimizu@theport.jp)

## 確認事項
- [JIRA](https://port-development.atlassian.net/browse/INFRAAPP-952)
- [デザインファイル（psdなど）](#)
- [関係者共有用（要件定義書）](#)
- [KPT（反省点）ドキュメント](https://port.esa.io/posts/2799)
- [テンプレートファイル](https://github.com/ryosuketter/static_site_template)
- [社外確認用（sakuraの本番）](http://160.16.51.181:5055/)

ベーシック認証
```
user:koto-port
password:recruit-2018
```

## 開発環境など
- [pug](https://pugjs.org/api/getting-started.html) -> HTML
- sass -> CSS
    - css設計: [Enduring CSS](http://ecss.io/)
- JavaScript(~ES5)
    - Library:jQuery(3.2.1)
- build system:gulp
- Responsive Web Design

## Enduring CSSを採用した理由
- 共通コンポートが少ない
- 修正したときのスタイルの影響範囲が明確なので、運用しやすい

## バージョン
- Node.js : 6.9.1
- npm : 5.3.0
- gulp : 3.9.1

## 対応ブラウザ
PC
- IE = 11以上
- firefox, Safari, Chrome = 最新版

SP
- iOS = 8以上
- Android(chrome & firefox)

## 対応デバイス
- iPhone, ipad, iphone5S, iphone6 puls, iphone6, iphone6 puls
- Nexus 6, GALAXY S5 SC-04F, arrowsM03

## KPT（反省点）ドキュメント
https://port.esa.io/posts/2799
