<template>
  <div>
    <b-table :items="tableData" striped hover>
      <template #cell(name)="row">
        {{ row.item.name }}
      </template>
      <template #cell(value)="row">
        {{ row.item.value }}
      </template>
      
    
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://ybiapi.fresh-app.com/api/demo_profile')
        .then(response => {
          // Convert object to array of key-value pairs
          this.tableData = Object.entries(response.data).map(([name, value]) => ({ name, value }));
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
