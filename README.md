# ie-webapp

## Development Server

開発環境で必要なライブラリをインストールし，サーブするには次のコマンドを実行します．

なお，.env は次のような形式でルートに置きます．

```.env
NEXT_PUBLIC_SUPABASE_URL="https://{supabase-domain}"
NEXT_PUBLIC_SUPABASE_ANON_KEY="{supabase-key}"
```

以下は `npm` の例です．お手持ちの環境によって，適宜読み替えてください．

```bash
npm install
npm run dev
```

## StoryBook

フロントエンドのデザインをより用意にするために，このプロジェクトでは `StoryBook` を導入しています．

StoryBook は以下の方法で起動することができます．

```bash
npm install
npm run storybook
```
