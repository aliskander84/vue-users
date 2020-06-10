<template>
  <div class="d-flex justify-center">
    <ArrowBtn
        icon="mdi-chevron-left"
        class="mx-1"
        v-if="!isFirstPage"
        @click="decreasePage"
    />

    <PageNumberBtn
        :page-number="leftNumber"
        class="mx-1"
        :accent="leftAccent"
        @click="goToPage(leftNumber)"
    />

    <PageNumberBtn
        :page-number="middleNumber"
        class="mx-1"
        :accent="middleAccent"
        @click="goToPage(middleNumber)"
    />

    <PageNumberBtn
        :page-number="rightNumber"
        class="mx-1"
        :accent="rightAccent"
        @click="goToPage(rightNumber)"
    />

    <ArrowBtn
        icon="mdi-chevron-right"
        class="mx-1"
        v-if="!isLastPage"
        @click="increasePage"
    />
  </div>
</template>

<script>
  import ArrowBtn from './components/arrowBtn'
  import PageNumberBtn from './components/pageNumberBtn'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'Pagination',
    components: {
      PageNumberBtn,
      ArrowBtn
    },
    computed: {
      ...mapGetters(['currentPage', 'pagesCount']),
      leftNumber() {
        switch (this.currentPage) {
          case 1:
            return 1
          case this.pagesCount:
            return this.currentPage - 2
          default:
            return this.currentPage - 1
        }
      },
      middleNumber() {
        switch (this.currentPage) {
          case 1:
            return this.currentPage + 1
          case this.pagesCount:
            return this.currentPage - 1
          default:
            return this.currentPage
        }
      },
      rightNumber() {
        switch (this.currentPage) {
          case 1:
            return this.currentPage + 2
          case this.pagesCount:
            return this.pagesCount
          default:
            return this.currentPage + 1
        }
      },
      isFirstPage() {
        return this.currentPage === 1
      },
      isLastPage() {
        return this.currentPage === this.pagesCount
      },
      leftAccent() {
        return this.currentPage === 1
      },
      middleAccent() {
        return (this.currentPage > 1) && (this.currentPage < this.pagesCount)
      },
      rightAccent() {
        return this.currentPage === this.pagesCount
      }
    },
    methods: {
      ...mapActions(['changePage']),
      decreasePage() {
        this.changePage(this.currentPage - 1)
      },
      increasePage() {
        // console.log('incr')
        this.changePage(this.currentPage + 1)
      },
      goToPage(number) {
        // console.log('go')
        this.changePage(number)
      }
    }
  }
</script>
