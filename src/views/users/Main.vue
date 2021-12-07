<template>
    <div>
        <layout-main>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Users</h1>
                <router-link :to="{name:'createuser'}" class="btn btn-success">Create User</router-link>
                
            </div>
            <div class="row row-cols-4 row-cols-md-4 row-cols-sm-2">
                <div v-for="user in datausers" :key="user.id" class="card">
                <img src="../../../public/F.webp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{user.name}}</h5>
                    <address class="card-text">
                        <strong>{{user.company.name}}</strong>
                        <br>
                        {{user.address.street}}, {{user.address.suite}} <br>
                        {{user.address.city}}, {{user.address.zipcode}} <br>
                        <abbr title="phone">{{user.phone}}</abbr> <br>
                        <strong>{{user.username}}</strong> <br>
                        {{user.email}}
                    </address>
                    <router-link :to="{name:'detailuser', params: {id: user.id, username: user.username}}" class="btn btn-primary">Detail User</router-link>
                </div>
                </div>
            </div>
        </layout-main>
    </div>
</template>

<script>
import LayoutMain from "@/views/LayoutMain"
export default { //instand component
    components: {
        LayoutMain
    },
    data(){ //untuk menampung properti
        return {
            datausers: null,
            data2 : null,
            data3 : ""
        }
    },
    methods: //properti
    {
        getUsers()
        {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json()) //then 1, set response sebagai json
                .then(json => {
                    this.datausers=json;
                })//then 2, mengambil json dan ditampung/diset ke dalam data
                .catch(error =>
                {
                    console.log(error);
                })
        },
        fungsi2()
        {

        },
        fungsi3()
        {

        }
        
    },
    
    mounted(){ //method
        this.getUsers();
    }
}
</script>