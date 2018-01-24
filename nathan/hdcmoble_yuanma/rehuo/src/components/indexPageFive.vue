<template lang="jade">
.centerModules(ref="center")
 .mtitle#mtitle
   v-touch(@tap="$store.commit('returnCenter')",class="backend")
    icon(name="angle-left")
    | 返回
   {{this.$store.state.centerTitle}}
 transform(v-if="$store.state.centers[0].toggle")
 security(v-if="$store.state.centers[1].toggle")
 message(v-if="$store.state.centers[2].toggle")
 recharge(v-if="$store.state.centers[3].toggle")
 withdraw(v-if="$store.state.centers[4].toggle")
 record(v-if="$store.state.centers[5].toggle")
</template>
<script>
  import transform from "./center/center_tran.vue";
  import security from "./center/center_sec.vue";
  import message from "./center/center_mess.vue";
  import recharge from "./center/center_recha.vue";
  import withdraw from './center/center_wit.vue';
  import record from './center/center_reco.vue';
	export default{
		components:{
			transform,
			security,
			message,
			recharge,
			withdraw,
			record
		}
	}
</script>
