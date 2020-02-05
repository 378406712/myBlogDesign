<template>
  <div class="paginations block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[2, 4, 6,8,10 ]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total='msg'>
    </el-pagination>
  </div>
</template>

<script>
export default {
    name:"paginations",
    props:['msg'],
    data(){
        return{
        total:'',
        }
    },
    methods:{
         handleSizeChange(size) {
       this.$emit('sizeValue', size)
      },
      handleCurrentChange(page) {
    this.$emit('pageValue', page)
      }
    },
    mounted(){
        console.log(this.msg)
    }
}
</script>

<style>

</style>