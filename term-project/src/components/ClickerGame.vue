<script>
export default {
    data() {
        return {
            data: {
                totalClicks: 0,
                money: 0,
                mps: 0.0,
                cps: 0.0,
                clickPower: 1,
                clickMulti: 1,
            },
            milestones: {
                SHOW_UPGRADES: 10
            },
            upgrades: {
                SM_CLICK_POWER: {
                    cost: 1,
                    amount: 1
                },
                MD_CLICK_POWER: {
                    cost: 400,
                    amount: 0
                },
                LG_CLICK_POWER: {
                    cost: 10000,
                    amount: 0
                },
                SM_CPS: {
                    cost: 10,
                    amount: 0
                },
                MD_CPS: {
                    cost: 5000,
                    amount: 0
                },
                LG_CPS: {
                    cost: 50000,
                    amount: 0
                },
            }
        };
    },
    methods: {
        increment() {
            this.data.totalClicks++;
            this.data.money += this.data.clickPower * this.data.clickMulti;
        },
        autoClick() {

            if (this.data.cps > 0) {
                this.data.totalClicks = Math.round((this.data.totalClicks + this.data.cps) * 1e12) / 1e12;
                this.data.money = Math.round((this.data.money + (this.data.clickPower * this.data.clickMulti * this.data.cps)) * 1e12) / 1e12;

            }
        },
        canAfford(prop) {
            return this.data.money >= this.upgrades[prop].cost;
        },
        purchasedAllUpgrades(prop) {
            return this.upgrades[prop].amount == 10;
        },
        revealNewUpgrade(prop) {
            return this.canAfford(prop) || this.upgrades[prop].amount > 0
        },
        upgradeClickPower(prop) {
            if (prop == 'SM_CLICK_POWER') {
                this.data.clickPower++;
            } else if (prop == 'MD_CLICK_POWER') {
                this.data.clickPower += 10;
            } else {
                this.data.clickPower += 100;
            }
            this.data.money = Math.floor(this.data.money - this.upgrades[prop].cost);
            this.upgrades[prop].amount++;
            this.upgrades[prop].cost = Math.ceil(this.upgrades[prop].cost * 1.5);

            this.data.mps = Math.round((this.data.clickPower * this.data.clickMulti * this.data.cps) * 1e12) / 1e12;

        },
        upgradeClicksPerSecond(prop) {
            let cost = this.upgrades[prop].cost;
            let increment = 0;
            if (prop == 'SM_CPS') {
                increment = 0.1;
            } else if (prop == 'MD_CPS') {
                increment = 1;
            } else {
                increment = 10;
            }
            this.data.money = Math.floor(this.data.money - cost);
            this.data.cps = Math.round((this.data.cps + increment) * 1e12) / 1e12;

            this.upgrades[prop].cost = Math.ceil(cost * 1.5);
            this.upgrades[prop].amount++;

            this.data.cps = Math.round((this.data.cps + 0.1) * 1e12) / 1e12;
            this.data.mps = Math.round((this.data.clickPower * this.data.clickMulti * this.data.cps) * 1e12) / 1e12;
        }
    },
    computed: {
        showUpgrades() {
            return this.data.totalClicks >= this.milestones.SHOW_UPGRADES;
        }
    },
    mounted: function () {
        window.setInterval(() => {
            this.autoClick()
        }, 1000);
    }
}
</script>

<template>
    <main id="main-content" class="body-style">
        <section class="page-jumbotron sea-green">
            <h2 class="text-center">Clicker Game</h2>
            <article>
                <h2>Metrics</h2>
                <p>Total Clicks: {{ data.totalClicks }}</p>
                <p>Click Power: {{ data.clickPower }}</p>
                <p>Clicks per Second: {{ data.cps }}</p>
                <p>Money per Second (MPS): {{ data.mps }}</p>
                <hr>
                <p>Money: {{ data.money }}</p>
            </article>



            <button type="button" @click="increment()">Click Me</button>

            <article v-if="showUpgrades">
                <h2>Upgrades</h2>
                <p id="small-clickPower-upgrade">
                    <span>
                        <strong>Buy Small Click Power Upgrade:&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('SM_CLICK_POWER')">
                            (Cost: {{ upgrades.SM_CLICK_POWER.cost }})&nbsp;&nbsp;&nbsp;<button type="button"
                                @click="upgradeClickPower('SM_CLICK_POWER')"
                                :disabled="!canAfford('SM_CLICK_POWER')">Buy</button>
                        </span>

                        <span v-if="purchasedAllUpgrades('SM_CLICK_POWER')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks Power by 1</span>
                </p>
                <p id="medium-clickPower-upgrade" v-if="revealNewUpgrade('MD_CLICK_POWER')">
                    <span>
                        <strong>Buy Medium Click Power Upgrade:&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('MD_CLICK_POWER')">
                            (Cost: {{ upgrades.MD_CLICK_POWER.cost }})&nbsp;&nbsp;&nbsp;<button type="button"
                                @click="upgradeClickPower('MD_CLICK_POWER')"
                                :disabled="!canAfford('MD_CLICK_POWER')">Buy</button>
                        </span>

                        <span v-if="purchasedAllUpgrades('MD_CLICK_POWER')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks Power by 10</span>
                </p>
                <p id="large-clickPower-upgrade" v-if="revealNewUpgrade('LG_CLICK_POWER')">
                    <span>
                        <strong>Buy Large Click Power Upgrade:&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('LG_CLICK_POWER')">
                            (Cost: {{ upgrades.LG_CLICK_POWER.cost }})&nbsp;&nbsp;&nbsp;<button type="button"
                                @click="upgradeClickPower('LG_CLICK_POWER')"
                                :disabled="!canAfford('LG_CLICK_POWER')">Buy</button>
                        </span>

                        <span v-if="purchasedAllUpgrades('LG_CLICK_POWER')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks Power by 100</span>
                </p>
                <br>
                <hr>
                <br>
                <p id="small-autoClicker-upgrade">
                    <span>
                        <strong>Buy Small Auto-Clicker&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('SM_CPS')">(Cost: {{ upgrades.SM_CPS.cost
                        }})&nbsp;<button type="button" @click="upgradeClicksPerSecond('SM_CPS')"
                                :disabled="!canAfford('SM_CPS')">Buy</button>
                        </span>
                        <span v-if="purchasedAllUpgrades('SM_CPS')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks per Second (CPS) by 0.1</span>
                </p>
                <p id="medium-autoClicker-upgrade" v-if="revealNewUpgrade('MD_CPS')">
                    <span>
                        <strong>Buy Medium Auto-Clicker&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('MD_CPS')">(Cost: {{ upgrades.MD_CPS.cost
                        }})&nbsp;<button type="button" @click="upgradeClicksPerSecond('MD_CPS')"
                                :disabled="!canAfford('MD_CPS')">Buy</button>
                        </span>
                        <span v-if="purchasedAllUpgrades('MD_CPS')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks per Second (CPS) by 1</span>
                </p>
                <p id="large-autoClicker-upgrade" v-if="revealNewUpgrade('LG_CPS')">
                    <span>
                        <strong>Buy Large Auto-Clicker&nbsp;</strong>
                        <span v-if="!purchasedAllUpgrades('LG_CPS')">(Cost: {{ upgrades.LG_CPS.cost
                        }})&nbsp;<button type="button" @click="upgradeClicksPerSecond('LG_CPS')"
                                :disabled="!canAfford('LG_CPS')">Buy</button>
                        </span>
                        <span v-if="purchasedAllUpgrades('LG_CPS')">&nbsp;&nbsp;All upgrades purchased!</span>
                    </span>
                    <br>
                    <span class="font-sm">&nbsp;&nbsp;Increase Clicks per Second (CPS) by 10</span>
                </p>
            </article>
        </section>
    </main>
</template>

<style scoped>
.font-sm {
    font-size: small;
}
</style>