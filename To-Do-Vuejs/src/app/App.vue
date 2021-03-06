<template>
    <div>

        <!-- <nav v-if="currentUser" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
                <router-link to="/" class="nav-item nav-link">Home</router-link>
                <router-link v-if="isAdmin" to="/admin" class="nav-item nav-link">Admin</router-link>
                <a @click="logout" class="nav-item nav-link">Logout</a>
            </div>
        </nav> -->

    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a class="navbar-brand brand-logo" href="index.html">
            <img src="assets/images/logo.svg" alt="logo"> </a>
          <a class="navbar-brand brand-logo-mini" href="index.html">
            <img src="assets/images/logo-mini.svg" alt="logo"> </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center">
          <ul class="navbar-nav">
            <li class="nav-item font-weight-semibold d-none d-lg-block"></li>
            <li class="nav-item dropdown language-dropdown">
              <a class="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <div class="d-inline-flex mr-0 mr-md-3">
                  <div class="flag-icon-holder">
                    <i class="flag-icon flag-icon-us"></i>
                  </div>
                </div>
                <span class="profile-text font-weight-medium d-none d-md-block">English</span>
              </a>
              <div class="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                <a class="dropdown-item">
                  <div class="flag-icon-holder">
                    <i class="flag-icon flag-icon-us"></i>
                  </div>English
                </a>
                <a class="dropdown-item">
                  <div class="flag-icon-holder">
                    <i class="flag-icon flag-icon-fr"></i>
                  </div>French
                </a>
                <a class="dropdown-item">
                  <div class="flag-icon-holder">
                    <i class="flag-icon flag-icon-ae"></i>
                  </div>Arabic
                </a>
                <a class="dropdown-item">
                  <div class="flag-icon-holder">
                    <i class="flag-icon flag-icon-ru"></i>
                  </div>Russian
                </a>
              </div>
            </li>
          </ul>
          <form class="ml-auto search-form d-none d-md-block" action="#">
            <div class="form-group">
              <input type="search" class="form-control" placeholder="Search Here">
            </div>
          </form>
          <ul class="navbar-nav ml-auto">           
            <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown">
              <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img class="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image"> </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div class="dropdown-header text-center">
                  <img class="img-md rounded-circle" src="assets/images/faces/face8.jpg" alt="Profile image">
                  <p class="mb-1 mt-3 font-weight-semibold">{{currentUser.name}}</p>
                  <p class="font-weight-light text-muted mb-0">{{currentUser.email}}</p>
                </div>
                <a class="dropdown-item">My Profile <span class="badge badge-pill badge-danger">1</span><i class="dropdown-item-icon ti-dashboard"></i></a>
                <a  @click="logout" class="dropdown-item">Sign Out<i class="dropdown-item-icon ti-power-off"></i></a>
              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        
        <sidebar/>

        <!-- partial -->
        <div class="main-panel margin-left-main">
          <div class="content-wrapper">
            <!-- Page Title Header Starts-->
            <div class="row page-title-header">
              <div class="col-12">
                  <router-view></router-view>  
              </div>
              <div class="col-md-12">
               
              </div>
            </div>
            <!-- Page Title Header Ends-->
          
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="container-fluid clearfix">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © Rooah.com 2021</span>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>

    <!-- ADD PROJECT MODAL -->
    <b-modal id="modal-addproject" title="Add Project">
         <form @submit="onSubmitProject" @reset="onReset" v-if="show">
            <div class="form-group" id="input-group-1">
                <label>Poject Title</label>
                <input
                id="input-1"
                v-model="Projectform.title"
                type="text"
                placeholder="Project Title"
                required
                >

                <label for="example-datepicker">Due date</label>
                <input type="date" id="example-datepicker" v-model="Projectform.dueDate" class="mb-2"/>

            </div>

            <button type="submit" variant="primary">Save</button>
        </form>
    </b-modal>
    <!-- ADD LABEL MODAL -->
    <b-modal id="modal-addlabel" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
    </b-modal>

    </div>
</template>

<script>
import { authenticationService } from '@/_services';
import { router, Role } from '@/_helpers';
import Sidebar from './Sidebar.vue';

export default {
  components: { Sidebar },
    name: 'app',
    data () {
        return {
            currentUser: null,
            modalShow: false,
            Projectform: {
                title: '',
                date: '',
                dueDate: '',
            },
            show: true
        };
    },
    computed: {
        isAdmin () {
            return this.currentUser && this.currentUser.role === Role.Admin;
        }
    },
    created () {
        authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.Projectform.date = new Date();
    },
    methods: {
        logout () {
            authenticationService.logout();
            router.push('/login');
        },
        onSubmitProject(event) {
            event.preventDefault()
            this.saveProjects();
        },  
        onSubmitLabel(event) {
            event.preventDefault()
            alert(JSON.stringify(this.Labelform))
        },       
    }
};
</script>