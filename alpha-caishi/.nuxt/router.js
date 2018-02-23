import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _74b0c7f8 = () => import('..\\pages\\domains.vue' /* webpackChunkName: "pages_domains" */).then(m => m.default || m)
const _ba00f9ce = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */).then(m => m.default || m)
const _fcda2c8a = () => import('..\\pages\\home1.vue' /* webpackChunkName: "pages_home1" */).then(m => m.default || m)
const _624b91e3 = () => import('..\\pages\\opend.vue' /* webpackChunkName: "pages_opend" */).then(m => m.default || m)
const _1037dd81 = () => import('..\\pages\\issues.vue' /* webpackChunkName: "pages_issues" */).then(m => m.default || m)
const _526f73e1 = () => import('..\\pages\\issues\\index.vue' /* webpackChunkName: "pages_issues_index" */).then(m => m.default || m)
const _03f344be = () => import('..\\pages\\issues\\invalid_api.vue' /* webpackChunkName: "pages_issues_invalid_api" */).then(m => m.default || m)
const _e14ef3d4 = () => import('..\\pages\\issues\\fe_dev.vue' /* webpackChunkName: "pages_issues_fe_dev" */).then(m => m.default || m)
const _6750a520 = () => import('..\\pages\\issues\\doc_enter.vue' /* webpackChunkName: "pages_issues_doc_enter" */).then(m => m.default || m)
const _c123831c = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _0735ef58 = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _cd100dba = () => import('..\\pages\\admin\\user.vue' /* webpackChunkName: "pages_admin_user" */).then(m => m.default || m)
const _5d695dff = () => import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages_admin_user_index" */).then(m => m.default || m)
const _402b36df = () => import('..\\pages\\admin\\message.vue' /* webpackChunkName: "pages_admin_message" */).then(m => m.default || m)
const _486474c3 = () => import('..\\pages\\admin\\message\\index.vue' /* webpackChunkName: "pages_admin_message_index" */).then(m => m.default || m)
const _5fb8689c = () => import('..\\pages\\admin\\message\\outbox.vue' /* webpackChunkName: "pages_admin_message_outbox" */).then(m => m.default || m)
const _7db32b43 = () => import('..\\pages\\admin\\message\\compose.vue' /* webpackChunkName: "pages_admin_message_compose" */).then(m => m.default || m)
const _1e86badd = () => import('..\\pages\\admin\\agent.vue' /* webpackChunkName: "pages_admin_agent" */).then(m => m.default || m)
const _2debd1f6 = () => import('..\\pages\\admin\\agent\\index.vue' /* webpackChunkName: "pages_admin_agent_index" */).then(m => m.default || m)
const _1abe7a3b = () => import('..\\pages\\admin\\agent\\withdrawReport.vue' /* webpackChunkName: "pages_admin_agent_withdrawReport" */).then(m => m.default || m)
const _015a8a5e = () => import('..\\pages\\admin\\agent\\transaction.vue' /* webpackChunkName: "pages_admin_agent_transaction" */).then(m => m.default || m)
const _132cb3a0 = () => import('..\\pages\\admin\\agent\\online.vue' /* webpackChunkName: "pages_admin_agent_online" */).then(m => m.default || m)
const _b0c4da02 = () => import('..\\pages\\admin\\agent\\lottoOrder.vue' /* webpackChunkName: "pages_admin_agent_lottoOrder" */).then(m => m.default || m)
const _1b1dc815 = () => import('..\\pages\\admin\\agent\\accountCenter.vue' /* webpackChunkName: "pages_admin_agent_accountCenter" */).then(m => m.default || m)
const _24212940 = () => import('..\\pages\\admin\\agent\\team\\_name.vue' /* webpackChunkName: "pages_admin_agent_team__name" */).then(m => m.default || m)
const _0cd4aee7 = () => import('..\\pages\\admin\\agent\\lottoReport\\_name.vue' /* webpackChunkName: "pages_admin_agent_lottoReport__name" */).then(m => m.default || m)
const _3ab7544e = () => import('..\\pages\\admin\\agent\\lotto_order.vue' /* webpackChunkName: "pages_admin_agent_lotto_order" */).then(m => m.default || m)
const _0a48f384 = () => import('..\\pages\\admin\\agent\\account_center.vue' /* webpackChunkName: "pages_admin_agent_account_center" */).then(m => m.default || m)
const _c2134608 = () => import('..\\pages\\admin\\agent\\withdraw_report.vue' /* webpackChunkName: "pages_admin_agent_withdraw_report" */).then(m => m.default || m)
const _60889d94 = () => import('..\\pages\\admin\\agent\\lotto_report\\_name.vue' /* webpackChunkName: "pages_admin_agent_lotto_report__name" */).then(m => m.default || m)
const _1865515e = () => import('..\\pages\\admin\\payment.vue' /* webpackChunkName: "pages_admin_payment" */).then(m => m.default || m)
const _022e5d64 = () => import('..\\pages\\admin\\payment\\index.vue' /* webpackChunkName: "pages_admin_payment_index" */).then(m => m.default || m)
const _4d10d366 = () => import('..\\pages\\admin\\payment\\chargeReport.vue' /* webpackChunkName: "pages_admin_payment_chargeReport" */).then(m => m.default || m)
const _849cacdc = () => import('..\\pages\\admin\\payment\\复制(2)withdraw.vue' /* webpackChunkName: "pages_admin_payment_复制(2)withdraw" */).then(m => m.default || m)
const _4fd745a8 = () => import('..\\pages\\admin\\payment\\withdraw22.vue' /* webpackChunkName: "pages_admin_payment_withdraw22" */).then(m => m.default || m)
const _736c2288 = () => import('..\\pages\\admin\\payment\\withdrawReport.vue' /* webpackChunkName: "pages_admin_payment_withdrawReport" */).then(m => m.default || m)
const _4fa99bce = () => import('..\\pages\\admin\\payment\\2withdraw.vue' /* webpackChunkName: "pages_admin_payment_2withdraw" */).then(m => m.default || m)
const _40f9a7c9 = () => import('..\\pages\\admin\\payment\\transfer.vue' /* webpackChunkName: "pages_admin_payment_transfer" */).then(m => m.default || m)
const _21e95368 = () => import('..\\pages\\admin\\payment\\withdraw.vue' /* webpackChunkName: "pages_admin_payment_withdraw" */).then(m => m.default || m)
const _64d9789b = () => import('..\\pages\\admin\\payment\\withdraw_report.vue' /* webpackChunkName: "pages_admin_payment_withdraw_report" */).then(m => m.default || m)
const _44354ba9 = () => import('..\\pages\\admin\\payment\\third_platform.vue' /* webpackChunkName: "pages_admin_payment_third_platform" */).then(m => m.default || m)
const _9221ad9e = () => import('..\\pages\\admin\\payment\\charge_report.vue' /* webpackChunkName: "pages_admin_payment_charge_report" */).then(m => m.default || m)
const _6e8b760c = () => import('..\\pages\\admin\\report.vue' /* webpackChunkName: "pages_admin_report" */).then(m => m.default || m)
const _4ab78e14 = () => import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages_admin_report_index" */).then(m => m.default || m)
const _4fcde402 = () => import('..\\pages\\admin\\report\\transaction.vue' /* webpackChunkName: "pages_admin_report_transaction" */).then(m => m.default || m)
const _691c578c = () => import('..\\pages\\admin\\report\\chaseOrder.vue' /* webpackChunkName: "pages_admin_report_chaseOrder" */).then(m => m.default || m)
const _358e6bf8 = () => import('..\\pages\\admin\\report\\lottoReport.vue' /* webpackChunkName: "pages_admin_report_lottoReport" */).then(m => m.default || m)
const _23c60653 = () => import('..\\pages\\admin\\report\\lotto_report.vue' /* webpackChunkName: "pages_admin_report_lotto_report" */).then(m => m.default || m)
const _adddbd3e = () => import('..\\pages\\admin\\report\\chase_order.vue' /* webpackChunkName: "pages_admin_report_chase_order" */).then(m => m.default || m)
const _78ec3edc = () => import('..\\pages\\admin\\playhelp\\_type.vue' /* webpackChunkName: "pages_admin_playhelp__type" */).then(m => m.default || m)
const _1a8f6442 = () => import('..\\pages\\docs.vue' /* webpackChunkName: "pages_docs" */).then(m => m.default || m)
const _76780200 = () => import('..\\pages\\docs\\index.vue' /* webpackChunkName: "pages_docs_index" */).then(m => m.default || m)
const _33925118 = () => import('..\\pages\\docs\\example.vue' /* webpackChunkName: "pages_docs_example" */).then(m => m.default || m)
const _fb1673d6 = () => import('..\\pages\\docs\\architecture.vue' /* webpackChunkName: "pages_docs_architecture" */).then(m => m.default || m)
const _b37654c8 = () => import('..\\pages\\docs\\style_guide.vue' /* webpackChunkName: "pages_docs_style_guide" */).then(m => m.default || m)
const _273c8852 = () => import('..\\pages\\docs\\fe_dev.vue' /* webpackChunkName: "pages_docs_fe_dev" */).then(m => m.default || m)
const _18cd9880 = () => import('..\\pages\\docs\\invalid_api.vue' /* webpackChunkName: "pages_docs_invalid_api" */).then(m => m.default || m)
const _1647f740 = () => import('..\\pages\\events.vue' /* webpackChunkName: "pages_events" */).then(m => m.default || m)
const _6b417634 = () => import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */).then(m => m.default || m)
const _12d52101 = () => import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */).then(m => m.default || m)
const _41d175f6 = () => import('..\\pages\\reposal\\_name.vue' /* webpackChunkName: "pages_reposal__name" */).then(m => m.default || m)
const _7a2a46d0 = () => import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages_news__id" */).then(m => m.default || m)
const _6a9b742a = () => import('..\\pages\\signup\\_id.vue' /* webpackChunkName: "pages_signup__id" */).then(m => m.default || m)
const _5472c94a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'active',
    scrollBehavior,
    routes: [
		{
			path: "/domains",
			component: _74b0c7f8,
			name: "domains"
		},
		{
			path: "/test",
			component: _ba00f9ce,
			name: "test"
		},
		{
			path: "/home1",
			component: _fcda2c8a,
			name: "home1"
		},
		{
			path: "/opend",
			component: _624b91e3,
			name: "opend"
		},
		{
			path: "/issues",
			component: _1037dd81,
			children: [
				{
					path: "",
					component: _526f73e1,
					name: "issues"
				},
				{
					path: "invalid:api",
					component: _03f344be,
					name: "issues-invalidapi"
				},
				{
					path: "fe:dev",
					component: _e14ef3d4,
					name: "issues-fedev"
				},
				{
					path: "doc:enter",
					component: _6750a520,
					name: "issues-docenter"
				}
			]
		},
		{
			path: "/login",
			component: _c123831c,
			name: "login"
		},
		{
			path: "/admin",
			component: _0735ef58,
			name: "admin",
			children: [
				{
					path: "user",
					component: _cd100dba,
					children: [
						{
							path: "",
							component: _5d695dff,
							name: "admin-user"
						}
					]
				},
				{
					path: "message",
					component: _402b36df,
					children: [
						{
							path: "",
							component: _486474c3,
							name: "admin-message"
						},
						{
							path: "outbox",
							component: _5fb8689c,
							name: "admin-message-outbox"
						},
						{
							path: "compose",
							component: _7db32b43,
							name: "admin-message-compose"
						}
					]
				},
				{
					path: "agent",
					component: _1e86badd,
					children: [
						{
							path: "",
							component: _2debd1f6,
							name: "admin-agent"
						},
						{
							path: "withdrawReport",
							component: _1abe7a3b,
							name: "admin-agent-withdrawReport"
						},
						{
							path: "transaction",
							component: _015a8a5e,
							name: "admin-agent-transaction"
						},
						{
							path: "online",
							component: _132cb3a0,
							name: "admin-agent-online"
						},
						{
							path: "lottoOrder",
							component: _b0c4da02,
							name: "admin-agent-lottoOrder"
						},
						{
							path: "accountCenter",
							component: _1b1dc815,
							name: "admin-agent-accountCenter"
						},
						{
							path: "team/:name?",
							component: _24212940,
							name: "admin-agent-team-name"
						},
						{
							path: "lottoReport/:name?",
							component: _0cd4aee7,
							name: "admin-agent-lottoReport-name"
						},
						{
							path: "lotto:order",
							component: _3ab7544e,
							name: "admin-agent-lottoorder"
						},
						{
							path: "account:center",
							component: _0a48f384,
							name: "admin-agent-accountcenter"
						},
						{
							path: "withdraw:report",
							component: _c2134608,
							name: "admin-agent-withdrawreport"
						},
						{
							path: "lotto:report/:name?",
							component: _60889d94,
							name: "admin-agent-lottoreport-name"
						}
					]
				},
				{
					path: "payment",
					component: _1865515e,
					children: [
						{
							path: "",
							component: _022e5d64,
							name: "admin-payment"
						},
						{
							path: "chargeReport",
							component: _4d10d366,
							name: "admin-payment-chargeReport"
						},
						{
							path: "复制(2)withdraw",
							component: _849cacdc,
							name: "admin-payment-复制(2)withdraw"
						},
						{
							path: "withdraw22",
							component: _4fd745a8,
							name: "admin-payment-withdraw22"
						},
						{
							path: "withdrawReport",
							component: _736c2288,
							name: "admin-payment-withdrawReport"
						},
						{
							path: "2withdraw",
							component: _4fa99bce,
							name: "admin-payment-2withdraw"
						},
						{
							path: "transfer",
							component: _40f9a7c9,
							name: "admin-payment-transfer"
						},
						{
							path: "withdraw",
							component: _21e95368,
							name: "admin-payment-withdraw"
						},
						{
							path: "withdraw:report",
							component: _64d9789b,
							name: "admin-payment-withdrawreport"
						},
						{
							path: "third:platform",
							component: _44354ba9,
							name: "admin-payment-thirdplatform"
						},
						{
							path: "charge:report",
							component: _9221ad9e,
							name: "admin-payment-chargereport"
						}
					]
				},
				{
					path: "report",
					component: _6e8b760c,
					children: [
						{
							path: "",
							component: _4ab78e14,
							name: "admin-report"
						},
						{
							path: "transaction",
							component: _4fcde402,
							name: "admin-report-transaction"
						},
						{
							path: "chaseOrder",
							component: _691c578c,
							name: "admin-report-chaseOrder"
						},
						{
							path: "lottoReport",
							component: _358e6bf8,
							name: "admin-report-lottoReport"
						},
						{
							path: "lotto:report",
							component: _23c60653,
							name: "admin-report-lottoreport"
						},
						{
							path: "chase:order",
							component: _adddbd3e,
							name: "admin-report-chaseorder"
						}
					]
				},
				{
					path: "playhelp/:type?",
					component: _78ec3edc,
					name: "admin-playhelp-type"
				}
			]
		},
		{
			path: "/docs",
			component: _1a8f6442,
			children: [
				{
					path: "",
					component: _76780200,
					name: "docs"
				},
				{
					path: "example",
					component: _33925118,
					name: "docs-example"
				},
				{
					path: "architecture",
					component: _fb1673d6,
					name: "docs-architecture"
				},
				{
					path: "style:guide",
					component: _b37654c8,
					name: "docs-styleguide"
				},
				{
					path: "fe:dev",
					component: _273c8852,
					name: "docs-fedev"
				},
				{
					path: "invalid:api",
					component: _18cd9880,
					name: "docs-invalidapi"
				}
			]
		},
		{
			path: "/events",
			component: _1647f740,
			name: "events"
		},
		{
			path: "/home",
			component: _6b417634,
			name: "home"
		},
		{
			path: "/404",
			component: _12d52101,
			name: "404"
		},
		{
			path: "/reposal/:name?",
			component: _41d175f6,
			name: "reposal-name"
		},
		{
			path: "/news/:id?",
			component: _7a2a46d0,
			name: "news-id"
		},
		{
			path: "/signup/:id?",
			component: _6a9b742a,
			name: "signup-id"
		},
		{
			path: "/",
			component: _5472c94a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
