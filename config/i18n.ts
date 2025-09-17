export interface PageTranslation {
  title: string;
  message: string;
}

export interface InterfaceTranslations {
  message: string;
}

export interface BlockPageTranslation extends PageTranslation {}
export interface ErrorPageTranslation extends PageTranslation {}
export interface ChallengePageTranslation extends PageTranslation {}

// 定义语言类型
type Language = 'en' | 'zh-CN' | 'zh-TW';

// 定义不同语言的翻译对象
const translations: Record<Language, {
  blockPageTranslations: Record<string, BlockPageTranslation>;
  errorPageTranslations: Record<string, ErrorPageTranslation>;
  challengePageTranslations: Record<string, ChallengePageTranslation>;
  interfaceTranslations: Record<string, InterfaceTranslations>;
}> = {
  'en': {
    blockPageTranslations: {
      ip: {
        title: "Access Denied",
        message: "Your IP address has been blocked by the website administrator."
      },
      waf: {
        title: "Security Block",
        message: "Your request was blocked by Cloudflare's Web Application Firewall (WAF)."
      },
      "rate-limit": {
        title: "Rate Limit Exceeded",
        message: "You have exceeded the request rate limit. Please try again later."
      }
    },
    errorPageTranslations: {
      "500s": {
        title: "Server Error",
        message: "The website encountered an unexpected error. Please try again later."
      },
      "1000s": {
        title: "DNS Resolution Error",
        message: "The requested domain name could not be resolved. Don't worry, this is not your fault."
      }
    },
    challengePageTranslations: {
      interactive: {
        title: "Human Verification Required",
        message: "Please complete the CAPTCHA to access the website."
      },
      managed: {
        title: "Under Attack Protection",
        message: "Complete the CAPTCHA to continue. This is a standard security check."
      },
      country: {
        title: "Regional Access Restriction",
        message: "Additional verification is required for visitors from your region."
      },
      javascript: {
        title: "Security Verification",
        message: "Please wait while our security system verifies your request."
      }
    },
    interfaceTranslations: {
      "error-details": {
        message: "View Details"
      },
      "connection-tracking": {
        message: "Connection Trace"
      },
      "network-status-you": {
        message: "You"
      },
      "network-status-cdn": {
        message: "CDN"
      },
      "network-status-origin": {
        message: "Origin"
      }
    }
  },
  'zh-CN': {
    blockPageTranslations: {
      ip: {
        title: "访问被拒绝",
        message: "您的IP地址已被网站管理员屏蔽。",
      },
      waf: {
        title: "安全拦截",
        message: "您的请求被Cloudflare Web应用防火墙(WAF)拦截。",
      },
      "rate-limit": {
        title: "请求频率超限",
        message: "您的请求频率超过限制，请稍后再试。",
      },
    },
    errorPageTranslations: {
      "500s": {
        title: "服务器错误",
        message: "网站遇到意外错误，请稍后再试。",
      },
      "1000s": {
        title: "DNS解析错误",
        message: "无法解析请求的域名，别担心，这不是您的问题。",
      },
    },
    challengePageTranslations: {
      interactive: {
        title: "需要人机验证",
        message: "请完成验证码以访问网站。",
      },
      managed: {
        title: "攻击防护模式",
        message: "完成验证码以继续，这是标准安全检查。",
      },
      country: {
        title: "区域访问限制",
        message: "来自您所在区域的访问者需要额外验证。",
      },
      javascript: {
        title: "安全验证中",
        message: "请稍候，我们的安全系统正在验证您的请求。",
      },
    },
    interfaceTranslations: {
      "error-details": {
        message: "查看详情",
      },
      "connection-tracking": {
        message: "连接追踪",
      },
      "network-status-you": {
        message: "You",
      },
      "network-status-cdn": {
        message: "CDN",
      },
      "network-status-origin": {
        message: "Origin",
      },
    },
  },
  'zh-TW': {
    blockPageTranslations: {
      ip: {
        title: "存取遭拒",
        message: "您的IP位址已被網站管理員封鎖。",
      },
      waf: {
        title: "安全攔截",
        message: "您的請求被Cloudflare Web應用防火牆(WAF)攔截。",
      },
      "rate-limit": {
        title: "請求速率超限",
        message: "您的請求速率超過限制，請稍後再試。",
      },
    },
    errorPageTranslations: {
      "500s": {
        title: "伺服器錯誤",
        message: "網站遇到意外錯誤，請稍後再試。",
      },
      "1000s": {
        title: "DNS解析錯誤",
        message: "無法解析請求的域名，別擔心，這不是您的問題。",
      },
    },
    challengePageTranslations: {
      interactive: {
        title: "需要人機驗證",
        message: "請完成驗證碼以存取網站。",
      },
      managed: {
        title: "防攻擊保護模式",
        message: "完成驗證碼以繼續，這是標準安全檢查。",
      },
      country: {
        title: "區域存取限制",
        message: "來自您所在區域的訪客需要額外驗證。",
      },
      javascript: {
        title: "安全驗證中",
        message: "請稍候，我們的安全系統正在驗證您的請求。",
      },
    },
    interfaceTranslations: {
      "error-details": {
        message: "查看詳情",
      },
      "connection-tracking": {
        message: "連線追蹤",
      },
      "network-status-you": {
        message: "You",
      },
      "network-status-cdn": {
        message: "CDN",
      },
      "network-status-origin": {
        message: "Origin",
      },
    },
  },
};

// 使用简体中文作为默认语言
const activeLanguage: Language = 'zh-CN';

// 获取当前语言的翻译函数
const getTranslations = (language: Language = activeLanguage) => {
  return translations[language];
};

// 使用最终确定的语言获取翻译
const {
  blockPageTranslations,
  errorPageTranslations,
  challengePageTranslations,
  interfaceTranslations
} = getTranslations(activeLanguage);

// 导出当前活动语言和翻译函数
export {
  blockPageTranslations,
  errorPageTranslations,
  challengePageTranslations,
  interfaceTranslations,
  getTranslations,
  activeLanguage
};
