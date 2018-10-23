<template>
  <panel title="Recently Viewed Books">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="histories">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.author}}
        </td>
      </template>  
    </v-data-table>
  </panel> 
</template>

<script>
import {mapState} from 'vuex'
import BookHistoryService from '@/services/BookHistoryService'

export default {
  data() {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Author',
          value: 'author'
        }
      ],
      pagination:{
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.histories = (await BookHistoryService.index({
        userId: this.user.id
      })).data
    }
  },
}
</script>

<style>

</style>
