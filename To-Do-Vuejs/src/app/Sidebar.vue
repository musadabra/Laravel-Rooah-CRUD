<template>
    <div>
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas fixed-navbar" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="profile-image">
                  <img class="img-xs rounded-circle" src="assets/images/faces/face8.jpg" alt="profile image">
                  <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">{{currentUser.name}}</p>
                  <p class="designation">Premium user</p>
                </div>
              </a>
            </li>
            <li class="nav-item nav-category">Main Menu</li>
            
            <li class="nav-item">
                <a v-b-modal.modal-addproject class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <i class="menu-icon typcn typcn-document-add"></i>
                    <span class="menu-title" style="width: 50px;">Project</span>
                    
                    <span style="width:20px; margin-left:50px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                    </span>
                  </a>
                  <div class="collapse show" id="auth">
                    <ul class="nav flex-column sub-menu">
                    
                      <li v-for="project in projects" :key="project.id" class="nav-item">
                        <a class="nav-link" href="pages/samples/login.html"> {{project.title}} </a>
                      </li>
                     
                     
                    </ul>
                  </div>
            </li>
             <li class="nav-item">
                <a v-b-modal.modal-addlabel class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="true" aria-controls="auth">
                    <i class="menu-icon typcn typcn-document-add"></i>
                    <span class="menu-title" style="width: 50px;">Label</span>

                    <span style="width:20px; margin-left:50px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                    </span>
                  </a>
                  <div class="collapse show" id="auth">
                    <ul class="nav flex-column sub-menu">
                    
                      <li v-for="label in labels" :key="label.id" class="nav-item">
                        <a class="nav-link" href="pages/samples/login.html"> {{ label.name }} </a>
                      </li>
                     
                    </ul>
                  </div>
            </li>
             <li class="nav-item">
                 <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="true" aria-controls="auth">
                    <i class="menu-icon typcn typcn-document-add"></i>
                    <span class="menu-title" style="width: 50px;">Filters</span>
                    <span style="width:20px; margin-left:50px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
                    </span>
                  </a>
                  <div class="collapse show" id="auth">
                    <ul class="nav flex-column sub-menu">
                    
                      <li class="nav-item">
                        <a class="nav-link" href="pages/samples/login.html"> Upcomming </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/samples/register.html"> Today </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/samples/register.html"> Priority 1 </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/samples/register.html"> Priority 2 </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="pages/samples/register.html"> Priority 2 </a>
                      </li>
                     
                    </ul>
                  </div>
            </li>
            <li>
              <a @click="logout" class="nav-item nav-link">Logout</a>
            </li>
          </ul>
        </nav>

        

    </div>
</template>

<script>
import { userService, authenticationService, projectService, labelService } from '@/_services';

export default {
    name: 'Sidebar',
    data () {
        return {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            projects: [],
            labels: []
        };
    },
    mounted () {
        userService.getUser().then(user => this.userFromApi = user);  
    },
    created (){
       this.getProjects();
       this.getLabels();
    },
    methods: {
        saveProjects: function(){
            alert("save");
            projectService.createProject(body).then(
                            Response => {
                               console.log(Response);                              
                            }
                        );
        },
        saveLabels: function(){

            labelService.createLabel(body).then(
                            Response => {
                                console.log(Response);                              
                            }
                        );
        },
        getProjects: function(){
            projectService.getAll().then(
                            Response => {
                              this.projects = Response.projects;                               
                            }
                        );
        },
        getLabels: function(){
            labelService.getAll().then(
                            Response => {
                               this.labels = Response.Labels;                               
                            }
                        );
        },
        logout () {
            authenticationService.logout();
            router.push('/login');
        },
    }
};
</script>