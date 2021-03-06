<template>
    <div>
         
    </div>
</template>

<script>
import { userService, authenticationService } from '@/_services';

export default {
    data () {
        return {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    },
    created () {
        userService.getUser().then(user => this.userFromApi = user);
        // console.log(userService.getUser().then(user => console.log(user)));
        console.log(currentUser);
    }
};
</script>