# 🎨 AI Cover Generator

> 基于 DALL-E 3 的 AI 红包封面生成器，支持用户认证、付费订阅和图片存储

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xianyu110/aicover)

[中文说明](/README_CN.md) | [部署指南](DEPLOY.md)

![demo](./preview.png)

## ✨ 功能特性

- 🤖 **AI 图片生成** - 使用 OpenAI DALL-E 3 生成高质量红包封面
- 🔐 **用户认证** - 基于 Clerk 的完整用户管理系统
- 💳 **支付系统** - Stripe 积分购买，支持信用卡和微信支付
- ☁️ **云存储** - AWS S3 图片存储和 CDN 加速
- 📱 **响应式设计** - 适配桌面端和移动端
- 🚀 **生产就绪** - 优化的 Vercel 部署配置

## 🚀 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xianyu110/aicover)

详细部署说明请查看 [DEPLOY.md](DEPLOY.md)

## 🛠️ 本地开发

### 1. 克隆项目
```bash
git clone https://github.com/xianyu110/aicover.git
cd aicover
```

### 2. 安装依赖
```bash
npm install
# 或
pnpm install
```

### 3. 环境变量配置
复制 `.env.example` 为 `.env.local` 并填入配置：

```env
# OpenAI API
OPENAI_API_KEY=sk-your-openai-api-key

# 数据库 (推荐 Vercel Postgres)
POSTGRES_URL=postgres://username:password@host:port/database

# AWS S3 存储
AWS_AK=AKIA...
AWS_SK=your-aws-secret-key
AWS_REGION=us-west-1
AWS_BUCKET=your-s3-bucket-name

# Clerk 用户认证
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Stripe 支付
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_PRIVATE_KEY=sk_test_...

# 应用基础 URL
WEB_BASE_URI=http://localhost:3000
```

### 4. 数据库初始化
使用 `data/install.sql` 创建数据表：
```sql
-- 在你的 PostgreSQL 数据库中执行
-- users, covers, orders 表
```

### 5. 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:3000` 查看应用

## 📦 技术栈

- **前端框架**: Next.js 14 + React 18 + TypeScript
- **样式**: Tailwind CSS + Radix UI
- **认证**: Clerk
- **支付**: Stripe
- **AI 服务**: OpenAI DALL-E 3
- **数据库**: PostgreSQL
- **存储**: AWS S3
- **部署**: Vercel

## 📝 API 接口

### 生成封面
```bash
POST /api/gen-cover
{
  "description": "春节红包封面描述"
}
```

### 创建支付
```bash
POST /api/checkout
{
  "plan": "one-time",
  "credits": 5,
  "amount": 520,
  "currency": "cny"
}
```

### 获取用户封面
```bash
GET /api/get-covers
```

## 🔧 环境变量说明

| 变量名 | 描述 | 获取方式 |
|--------|------|----------|
| `OPENAI_API_KEY` | OpenAI API 密钥 | [platform.openai.com](https://platform.openai.com) |
| `POSTGRES_URL` | PostgreSQL 连接 URL | Vercel Postgres / Supabase |
| `AWS_AK/AWS_SK` | AWS 访问密钥 | AWS IAM 控制台 |
| `NEXT_PUBLIC_CLERK_*` | Clerk 认证配置 | [clerk.com](https://clerk.com) |
| `STRIPE_*_KEY` | Stripe 支付密钥 | [stripe.com](https://stripe.com) |

## 📁 项目结构

```
aicover/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 认证相关页面
│   ├── (default)/         # 主要页面
│   └── api/               # API 路由
├── components/            # React 组件
├── lib/                   # 工具函数
├── models/                # 数据模型
├── services/              # 业务逻辑
├── types/                 # TypeScript 类型
├── data/                  # SQL 数据库脚本
└── public/                # 静态资源
```

## 🎯 支付套餐

- **试用版**: ¥5.20 / 5 积分
- **畅享版**: ¥20.24 / 30 积分

支持支付方式：
- 💳 国际信用卡 (Visa, MasterCard, American Express)
- 💰 微信支付 (人民币)

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📄 许可证

[MIT License](LICENSE)

## 🙏 致谢

- [OpenAI](https://openai.com) - DALL-E 3 AI 图片生成
- [Vercel](https://vercel.com) - 部署平台  
- [Clerk](https://clerk.com) - 用户认证
- [Stripe](https://stripe.com) - 支付处理
- [Next.js](https://nextjs.org) - React 框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架

---

如果这个项目对你有帮助，请给个 ⭐️ Star！

<a href="https://www.buymeacoffee.com/idoubi" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174">
</a>