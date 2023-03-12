<template>
    <div
        class="card md:flex md:flex-col bg-granit-lighter shadow-md transition ease-out duration-300 overflow-hidden rounded-2xl relative"
        :class="{ 'shadow-sm': !winner }"
    >
        <div class="px-6 pb-2.5 pt-3 card-head bg-gradient-to-r from-primary to-secondary flex justify-between">
            <h4 class="card-title text-on-primary font-medium">{{ monthName }} {{ year }}</h4>
            <div class="">
                <span class="bg-violet-200 font-medium text-xs text-violet-900 rounded-full pb-0 pt-0.5 px-3">
                    Historic
                </span>
            </div>
        </div>

        <div class="p-6 pb-4 flex justify-between flex-col grow">
            <div class="card-body flex flex-col relative">
                <div class="flex flex-col mb-5">
                    <p v-if="avgPredictionPrice" class="leading-normal">
                        Prediction
                        <span
                            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                            >{{ winner.prediction_future_price }} $</span
                        >
                        from
                        <span
                            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                            >{{ winner.user_name.slice(1) }}</span
                        >
                        was the one closest to the Binance price
                        <span class="font-semibold">{{ closePrice }} $</span> at the end of
                        <span class="font-semibold">{{ monthName }}</span
                        >.
                    </p>
                    <p v-else class="leading-normal">
                        No predictions were made in this month.
                        <span
                            class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                            >{{ closePrice }} $</span
                        >
                        was the closing price of Reef at Binance on
                        <span class="font-semibold">{{ closeTime }}</span
                        >.
                    </p>
                </div>

                <div
                    class="card-content flex grow nm-inset-granit-dark-sm rounded-xl p-2 justify-between"
                    :class="{ 'flex-col': winner }"
                >
                    <div class="w-full flex gap-2 flex-col">
                        <div
                            v-if="winner"
                            class="flex bg-granit-lighter rounded-lg text-center justify-between items-center"
                        >
                            <div class="px-4 flex items-center font-medium text-gray-900 whitespace-nowrap gap-2">
                                <ReefCoinCrown :size="25" />
                                <a
                                    :href="`https://t.me/` + winner.user_name.slice(1)"
                                    target="_blank"
                                    class="hover:cursor-pointer"
                                >
                                    <span
                                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-sm font-semibold"
                                        >{{ winner.user_name }}</span
                                    >
                                </a>
                            </div>
                            <div class="pt-2 px-4 rounded-t-lg">
                                <h3
                                    class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold"
                                >
                                    $ {{ winner.prediction_future_price }}
                                </h3>
                            </div>
                        </div>
                        <div class="flex bg-granit-lighter rounded-lg text-center justify-between items-center">
                            <div class="pt-2 pb-2 px-4 flex justify-center font-medium text-gray-900 whitespace-nowrap">
                                <BinanceLogo :size="30" />
                            </div>
                            <div class="pt-2.5 pb-1 px-4 ">
                                <h3 class="font-semibold">$ {{ closePrice }}</h3>
                            </div>
                        </div>
                        <div
                            v-if="avgPredictionPrice"
                            class="flex bg-granit-lighter rounded-lg text-center justify-between items-center"
                        >
                            <div class="pt-3 pb-2 px-4 flex justify-center font-medium text-gray-900 whitespace-nowrap">
                                <AverageIcon :size="30" />
                            </div>
                            <div class="pt-3 pb-2 px-4">
                                <h3 class="font-semibold bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    $ {{ avgPredictionPrice }}
                                </h3>
                            </div>
                        </div>

                        <div
                            v-if="winner"
                            class="bg-granit-lighter rounded-lg leading-none py-2 px-4 w-full text-center"
                        >
                            <small class="block">
                                <span
                                    class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                                    >{{ winner.user_name.slice(1) }}</span
                                >
                                is the winner out of
                                <span
                                    class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                                    >{{ predictionAmount }}x</span
                                >
                                Predictions
                            </small>
                            <small> « {{ winner.user_comment }} » </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer mt-3">
                <div class="rounded-xl p-3">
                    <div class="flex flex-col gap-1">
                        <div v-if="winner" class="flex items-center">
                            <ReefCoinCrown :size="20" />
                            <small class="pl-2 pt-1.5">Prediction King of the month</small>
                        </div>

                        <div class="flex items-center">
                            <BinanceLogo :size="20" />
                            <small class="pl-2 pt-1.5">Reef Price {{ closeTime }}</small>
                        </div>

                        <div v-if="avgPredictionPrice" class="flex items-center">
                            <AverageIcon :size="20" />
                            <small class="pl-2 pt-1.5">Avg. Community Prediction Price</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
// import BinanceLogo from '../BinanceLogo.vue'
// import AverageIcon from '../AverageIcon.vue'
// import ReefCoinCrown from '../ReefCoinCrown.vue'

const props = defineProps({
    avgPredictionPrice: {
        type: String,
        default: null,
    },
    closePrice: {
        type: String,
        default: null,
    },
    openTime: {
        type: String,
        default: null,
    },
    closeTime: {
        type: String,
        default: null,
    },
    winner: {
        type: Object as any,
        default: null,
    },
    predictionAmount: {
        type: Number,
        default: null,
    },
})

const year = computed(() => {
    return props.closeTime.slice(0, 4)
})

const monthName = computed(() => {
    const historicDate = new Date(props.closeTime)
    const monthName = new Date(historicDate).toLocaleString('en-US', { month: 'long' })
    return monthName
})
</script>
