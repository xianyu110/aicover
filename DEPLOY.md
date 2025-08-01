# 🚀 AI Cover 部署指南

## 一键部署到 Vercel

### 前置条件
1. ✅ 已有 [Vercel](https://vercel.com) 账户
2. ✅ 已连接 GitHub 仓库

### 部署步骤

#### 1. 克隆并推送到 GitHub
```bash
git add .
git commit -m "optimize for deployment"
git push origin main
```

#### 2. Vercel 快速部署
1. 访问 [vercel.com/new](https://vercel.com/new)
2. 导入 GitHub 仓库：`https://github.com/xianyu110/aicover`
3. Framework Preset: **Next.js**
4. 点击 **Deploy**

#### 3. 配置环境变量
部署后在 **Project Settings → Environment Variables** 添加：

```env
# OpenAI API
OPENAI_API_KEY=sk-your-openai-key

# 数据库 (推荐 Vercel Postgres)
POSTGRES_URL=postgres://...

# AWS S3
AWS_AK=AKIA...
AWS_SK=your-secret-key
AWS_REGION=us-west-1
AWS_BUCKET=your-bucket

# Clerk 认证
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Stripe 支付
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_PRIVATE_KEY=sk_test_...

# 应用域名
WEB_BASE_URI=https://your-app.vercel.app
```

#### 4. 数据库初始化
1. 创建 Vercel Postgres 数据库
2. 在数据库中执行 `data/install.sql`

#### 5. 重新部署
配置环境变量后点击 **Redeploy**

### 第三方服务申请

#### OpenAI
- 访问：[platform.openai.com](https://platform.openai.com)
- 创建 API Key

#### Clerk (用户认证)
- 访问：[clerk.com](https://clerk.com)
- 创建应用，获取 Public Key

#### Stripe (支付)
- 访问：[stripe.com](https://stripe.com)
- 获取测试环境密钥

#### AWS S3 (存储)
- 创建 S3 存储桶
- 配置 IAM 用户权限

### 部署后验证

访问你的 Vercel 域名测试：
- ✅ 用户注册登录
- ✅ AI 红包封面生成
- ✅ 支付购买积分
- ✅ 图片下载

### 常见问题

**Q: 部署失败怎么办？**
A: 检查环境变量是否完整配置

**Q: 数据库连接失败？**
A: 确认 POSTGRES_URL 正确且数据库已创建表

**Q: 图片生成失败？**
A: 检查 OPENAI_API_KEY 和 AWS 配置

**Q: 支付测试失败？**
A: 确认使用 Stripe 测试环境密钥

---
🎉 **部署完成！开始使用 AI 红包封面生成器**