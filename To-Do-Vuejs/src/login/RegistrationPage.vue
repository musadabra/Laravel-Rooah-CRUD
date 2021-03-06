<template>
    <div>

        <div class="back-to-home rounded d-none d-sm-block">
            <a href="localhost:8000-" class="btn btn-icon btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home icons"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a>
        </div>

        <section class="cover-user bg-white">
            <div class="container-fluid px-0">
                <div class="row g-0 position-relative">
                    <div class="col-lg-4 cover-my-30 order-2">
                        <div class="cover-user-img d-lg-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card border-0" style="z-index: 1">
                                        <div class="card-body p-0">
                                            <h4 class="card-title text-center">Signup</h4>
                                            <form class="login-form mt-4" @submit.prevent="onSubmit">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Name <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user fea icon-sm icons"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                                <input type="text" v-model.trim="$v.name.$model" :class="{ 'is-invalid': submitted && $v.name.$error }" class="form-control ps-5" placeholder="Name" name="name" required="">
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                                <input type="text" v-model.trim="$v.email.$model" :class="{ 'is-invalid': submitted && $v.email.$error }" class="form-control ps-5" placeholder="Email" name="email" required="">
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Password <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                                <input type="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': submitted && $v.password.$error }" class="form-control ps-5" placeholder="Password" name="password" required="">
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
                                                            <div class="form-icon position-relative">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key fea icon-sm icons"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                                                <input type="password" v-model.trim="$v.password_confirmation.$model" :class="{ 'is-invalid': submitted && $v.password_confirmation.$error }" class="form-control ps-5" placeholder="Password" name="password_confirmation" required="">
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">I Accept <a href="#" class="text-primary">Terms And Condition</a></label>
                                                            </div>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-md-12">
                                                        <div class="d-grid">
                                                            <button class="btn btn-primary" :disabled="loading">Register</button>
                                                            <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="col-lg-12 mt-4 text-center">
                                                        <h6>Or Signup With</h6>
                                                        <div class="row">
                                                            <div class="col-6 mt-3">
                                                                <div class="d-grid">
                                                                    <a href="javascript:void(0)" class="btn btn-light"><i class="mdi mdi-facebook text-primary"></i> Facebook</a>
                                                                </div>
                                                            </div><!--end col-->
                                                            
                                                            <div class="col-6 mt-3">
                                                                <div class="d-grid">
                                                                    <a href="javascript:void(0)" class="btn btn-light"><i class="mdi mdi-google text-danger"></i> Google</a>
                                                                </div>
                                                            </div><!--end col-->
                                                        </div>
                                                    </div><!--end col-->

                                                    <div class="mx-auto">
                                                        <p class="mb-0 mt-3"><small class="text-dark me-2">Already have an account ?</small> <a href="/login" class="text-dark fw-bold">Sign in</a></p>
                                                    </div>
                                                </div><!--end row-->
                                            </form>  
                                        </div>
                                    </div>
                                </div>
                            </div><!--end row-->
                        </div> <!-- end about detail -->
                    </div> <!-- end col -->    

                    <div class="col-lg-8 offset-lg-4 padding-less img order-1" style="background-image:url('public/images/user/02.jpg')" data-jarallax="{&quot;speed&quot;: 0.5}"></div><!-- end col -->    
                </div><!--end row-->
            </div><!--end container fluid-->
        </section>

    </div>
    
</template>

<script>
import { required } from 'vuelidate/lib/validators';

import { router } from '@/_helpers';
import { authenticationService } from '@/_services';

export default {
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            submitted: false,
            loading: false,
            returnUrl: '',
            error: ''
        };
    },
    validations: {
      name: { required },
      email: { required },
      password: { required },
      password_confirmation: { required }
    },
    created () {
        // redirect to home if already logged in
        if (authenticationService.currentUserValue) { 
            return router.push('/');
        }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.$route.query.returnUrl || '/';
    },
    methods: {
        onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            authenticationService.signup(this.name, this.email, this.password, this.password_confirmation)
                .then(
                    user => router.push(this.returnUrl),
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
    }
};
</script>