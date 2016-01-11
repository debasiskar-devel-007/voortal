/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var voortal = angular.module('voortal', ['ui.router','angularValidator','ngCookies','ui.bootstrap','ngFileUpload']);


voortal.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.createIdeaId = 0;

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });




}]);

voortal.filter('brain', function() {
    return function(input) {
        var out = [];
        if(typeof (input) != 'undefined'){
            for (var i = 0; i < input.length; i++) {
                if(input[i].roles == 6){
                    out.push(input[i]);
                }
            }
        }
        return out;
    }
});

voortal.filter('agent', function() {
    return function(input) {
        var out = [];
        if(typeof (input) != 'undefined'){
            for (var i = 0; i < input.length; i++) {
                if(input[i].roles == 5){
                    out.push(input[i]);
                }
            }
        }
        return out;
    }
});

voortal.filter('creative', function() {
    return function(input) {
        var out = [];
        if(typeof (input) != 'undefined'){
            for (var i = 0; i < input.length; i++) {
                if(input[i].roles == 4){
                    out.push(input[i]);
                }
            }
        }
        return out;
    }
});

voortal.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

// For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");

//
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                'footer': {
                    controller: 'index'
                },

            }
        }
    )
        .state('home',{
            url:"/home",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/home.html' ,
                    controller: 'home'
                },

            }
        }
    )
        .state('viewallidea',{
            url:"/all-idea",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/viewallidea.html' ,
                    controller: 'viewallidea'
                },

            }
        }
    )

        .state('login',{
            url:"/login",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/login.html' ,
                    controller: 'login'
                },

            }
        }
    )

        .state('forgotpassword',{
            url:"/forgot-password",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/forgotpassword.html' ,
                    controller: 'forgotpassword'
                },

            }
        }
    )

        .state('resetpassword',{
            url:"/resetpassword/:cpass/:uid",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/resetpassword.html' ,
                    controller: 'resetpassword'
                },

            }
        }
    )

        .state('signup',{
            url:"/signup",
            views: {

                'footer': {
                    templateUrl: 'partials/footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/signup.html' ,
                    controller: 'signup'
                },

            }
        }
    )

        .state('logout',{
            url:"/logout",
            views: {

                'content': {
                    controller: 'logout'
                },

            }
        }
    )

        .state('dashboard',{
            url:"/dashboard",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/dashboard.html' ,
                    controller: 'dashboard'
                },

            }
        }
    )

        .state('userlist',{
            url:"/user-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/user_list.html' ,
                    controller: 'userlist'
                },

            }
        }
    )

        .state('useradd',{
            url:"/user-add",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/user_add.html' ,
                    controller: 'useradd'
                },

            }
        }
    )

        .state('useredit',{
            url:"/user-edit/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/user_edit.html' ,
                    controller: 'useredit'
                },

            }
        }
    )

        .state('userdetails',{
            url:"/user-details/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/userdetails.html' ,
                    controller: 'userdetails'
                },

            }
        }
    )

        .state('changepassword',{
            url:"/change-password/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/changepassword.html' ,
                    controller: 'changepassword'
                },

            }
        }
    )

        .state('updateprofile',{
            url:"/update-profile",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/updateprofile.html' ,
                    controller: 'updateprofile'
                },

            }
        }
    )

        .state('myaccount',{
            url:"/my-account",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/myaccount.html' ,
                    controller: 'myaccount'
                },

            }
        }
    )

        .state('changepassword1',{
            url:"/change-my-password",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/changepassword1.html' ,
                    controller: 'changepassword1'
                },

            }
        }
    )

        .state('agentlist',{
            url:"/agent-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/custom_user_list.html' ,
                    controller: 'agentlist'
                },

            }
        }
    )

        .state('brainlist',{
            url:"/brain-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/custom_user_list.html' ,
                    controller: 'brainlist'
                },

            }
        }
    )

        .state('creativelist',{
            url:"/creative-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/custom_user_list.html' ,
                    controller: 'creativelist'
                },

            }
        }
    )

        .state('createidea',{
            url:"/create-idea",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_1.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('createidea2',{
            url:"/create-idea-step-2",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_2.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('createidea3',{
            url:"/create-idea-step-3",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_3.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('createidea4',{
            url:"/create-idea-step-4",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_4.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('createidea5',{
            url:"/create-idea-step-5",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_5.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('createidea6',{
            url:"/create-idea-step-6",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_6.html' ,
                    controller: 'createidea'
                },

            }
        }
    )

        .state('idealist',{
            url:"/idea-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/idealist.html' ,
                    controller: 'idealist'
                },

            }
        }
    )

        .state('myideas',{
            url:"/my-ideas",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/myideas.html' ,
                    controller: 'myideas'
                },

            }
        }
    )

        .state('allideas',{
            url:"/all-ideas",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/allideas.html' ,
                    controller: 'allideas'
                },

            }
        }
    )
        .state('createideacomplete',{
            url:"/create-idea-complete/:ideaId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createideacomplete.html' ,
                    controller: 'createideacomplete'
                },

            }
        }
    )
        .state('ideadetails',{
            url:"/idea-details/:ideaId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/ideadetails.html' ,
                    controller: 'ideadetails'
                },

            }
        }
    )
        .state('editidea',{
            url:"/edit-idea/:ideaId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/createidea_1.html' ,
                    controller: 'editidea'
                },

            }
        }
    )

        .state('addindustry',{
            url:"/add-industry",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/addindustry.html' ,
                    controller: 'addindustry'
                },

            }
        }
    )

        .state('editindustry',{
            url:"/edit-industry/:industryId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/addindustry.html' ,
                    controller: 'editindustry'
                },

            }
        }
    )

        .state('industrylist',{
            url:"/industry-list",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_header.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'admin_content': {
                    templateUrl: 'partials/industrylist.html' ,
                    controller: 'industrylist'
                },

            }
        }
    )




    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});

voortal.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$rootScope,$http) {

    if(typeof ($scope.ideaId) != 'undefined'){
        $scope.competitors = [];
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
            data    : $.param({'id':$scope.ideaId}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.ideaDetails = data[0];

            $scope.companies = angular.fromJson($scope.ideaDetails.companies);
            $scope.websites = angular.fromJson($scope.ideaDetails.websites);

            angular.forEach($scope.companies, function(value, key){
                $scope.competitors.push({'name':value,'website':$scope.websites[key]});
            });

        });
    }

    $scope.addremark = function(){
        alert(Math.floor(Date.now() / 1000));
        alert($scope.remark);
        alert($scope.ideaid1);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

voortal.controller('index', function($scope,$state,$cookieStore,$rootScope) {
    $state.go('home');
    return
});


voortal.controller('home', function($scope,$state,$cookieStore,$http,$rootScope,$uibModal) {
    $scope.userid =0;

    if(typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid')>0) {
        $scope.userid = $cookieStore.get('userid');
    }

    $scope.gotologin = function(ideaId){
        $cookieStore.put('idea_det_id',ideaId);
        $state.go('login');
        return
    }

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/idealist',
        // data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaList = data;
    });

    $scope.idea_details = function(ideaId,size){
        $scope.ideaId = ideaId;

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ideaDet.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope: $scope
        });
    }

});

voortal.controller('viewallidea', function($scope,$state,$cookieStore,$http,$rootScope,$uibModal) {

    $scope.userid =0;

    if(typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid')>0) {
        $scope.userid = $cookieStore.get('userid');
    }

    $scope.gotologin = function(ideaId){
        $cookieStore.put('idea_det_id',ideaId);
        $state.go('login');
        return
    }

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/idealist',
        // data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaList = data;
    });

    $scope.idea_details = function(ideaId,size){
        $scope.ideaId = ideaId;

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'ideaDet.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope: $scope
        });
    }

});

voortal.controller('login', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.login = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/login',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                if(typeof (data.userdetails.roles[4]) != 'undefined')
                    $cookieStore.put('userrole',4);
                if(typeof (data.userdetails.roles[5]) != 'undefined')
                    $cookieStore.put('userrole',5);
                if(typeof (data.userdetails.roles[6]) != 'undefined')
                    $cookieStore.put('userrole',6);
                if(typeof (data.userdetails.roles[7]) != 'undefined')
                    $cookieStore.put('userrole',7);


                if(typeof($cookieStore.get('idea_det_id')) != 'undefined' && $cookieStore.get('idea_det_id')>0) {
                    $scope.idea_det_id = $cookieStore.get('idea_det_id');
                    $cookieStore.remove('idea_det_id');
                    $state.go('ideadetails',{ideaId: $scope.idea_det_id});
                    return
                }else{
                    $state.go('dashboard');
                    return
                }

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});

voortal.controller('forgotpassword', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.submit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/forgot_user_mail',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                var myEl = angular.element( document.querySelector( '#emailgroup' ) );
                myEl.find('.errormsg').remove();
                myEl.append('<span class="errormsg has-error validationMessage">'+data.msg+'</span>');
            }else{
                $scope.sucmsg = 'Please chcek your mail';
            }

        });
    }
});


voortal.controller('resetpassword', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.cpass=$stateParams.cpass;
    $scope.uid=$stateParams.uid;

    $scope.form = {
        password : $stateParams.cpass,
        uid : $stateParams.uid,
    }

    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.passwordValidator1 = function(password1,password2) {

        if (!password1) {
            return;
        }
        else if (password1 != password2) {
            return "Password does not match";
        }

        return true;
    };

    $scope.errormsg = 0;
    $scope.sucmsg = 0;

    $scope.submit = function(){
        $rootScope.stateIsLoading = true;
        $scope.errormsg = 0;
        $scope.sucmsg = 0;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/resetuserpass',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                $scope.errormsg = 1;
            }else{
                $scope.sucmsg = 1;
            }

        });
    }

});

voortal.controller('signup', function($scope,$state,$cookieStore,$http,$rootScope) {
    /*$scope.user_job_all = [
        {"ID":"Front-End Developer", "TIPIS":"Web", "DESC":"Front-End Developer"},
        {"ID":"PHP Developer", "TIPIS":"Web", "DESC":"PHP Developer"},
        {"ID":"Python Developer", "TIPIS":"Web", "DESC":"Python Developer"},
        {"ID":"Rails Developer", "TIPIS":"Web", "DESC":"Rails Developer"},
        {"ID":"Web Designer", "TIPIS":"Web", "DESC":"Web Designer"},
        {"ID":"WordPress Developer", "TIPIS":"Web", "DESC":"WordPress Developer"},
        {"ID":"Androild Developer", "TIPIS":"Mobile", "DESC":"Androild Developer"},
        {"ID":"iOS Developer", "TIPIS":"Mobile", "DESC":"iOS Developer"},
        {"ID":"Mobile Designer", "TIPIS":"Mobile", "DESC":"Mobile Designer"},
        {"ID":"Business Owner", "TIPIS":"Business", "DESC":"Business Owner"},
        {"ID":"Freelancer", "TIPIS":"Business", "DESC":"Freelancer"},
        {"ID":"Secretary", "TIPIS":"Other", "DESC":"Secretary"},
        {"ID":"Maintenance", "TIPIS":"Other", "DESC":"Maintenance"},
    ];*/

    $scope.user_job_all = [
        {"ID":4, "DESC":"Creative"},
        {"ID":5, "DESC":"Agent"},
        {"ID":6, "DESC":"Brain"},
   ];

    $scope.emailValidator = function(email) {

        $scope.pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (!email) {
            return;
        }
        else if (!$scope.pattern.test(email)) {
            return "Enter valid email address.";
        }
       // else if($scope.usernamecheckserver(email)!= 1){
           // return 'Email already exists';
       // }

        return true;
    };

    $scope.usernamecheckserver = function(email) {

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/validateusername',
            data    : {username: email},  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            return data;
        });




    };

    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.form = {
        biography : {
            is_private:0,
            value:''
        },
        location : {
            is_private:0,
            value:''
        },
        skills : {
            is_private:0,
            value:''
        },
        education : {
            is_private:0,
            value:''
        }
    }

    $scope.register = function () {
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/signupfront',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                var myEl = angular.element( document.querySelector( '#emailgroup' ) );
                myEl.find('.errormsg').remove();
                myEl.append('<span class="errormsg has-error validationMessage">'+data.msg+'</span>');
            }else{
                $state.go('home');
                return
            }

        });
    }

});

voortal.controller('logout', function($scope,$state,$cookieStore,$http,$rootScope) {
    $cookieStore.remove('userid');

    $state.go('home');
    return
});

voortal.controller('admin_header', function($rootScope,$scope,$state,$http,$cookieStore) {
    $scope.loggedinstatus = 0;
    $scope.userid =0;
    $scope.username ='';
    $scope.userpicture ='';

    if(typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid')>0){
        $scope.loggedinstatus = 1;
        $scope.userid = $cookieStore.get('userid');

        $scope.rootuserid = $cookieStore.get('userid');

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/userdetails',
            data    : $.param({'uid':$scope.userid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.rootuserdet = data;
            if(data.roles == 4)
                $rootScope.rootrole = "Creative";
            if(data.roles == 5)
                $rootScope.rootrole = "Agent";
            if(data.roles == 6)
                $rootScope.rootrole = "Brain";
            if(data.roles == 7)
                $rootScope.rootrole = "Site Admin";
        });


    }else{
        $state.go('home');
        return;
    }
});

voortal.controller('dashboard', function($scope,$state,$cookieStore,$http,$rootScope) {
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/alluserlist',
        //data    : $.param({role:4}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
    });
});

voortal.controller('userlist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/alluserlist',
        //data    : $.param({role:4}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
    });

    $scope.predicate = 'created';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.lname.indexOf($scope.searchkey) != -1) || (item.mail.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

    $scope.changestatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/updateuserstatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = !$scope.userlist[idx].status;
        });
    }

    $scope.userdelete = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/userdelete',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist.splice(idx,1);
        });
    }
});

voortal.controller('useradd', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.user_job_all = [
        {"ID":4, "DESC":"creative"},
        {"ID":5, "DESC":"agent"},
        {"ID":6, "DESC":"brain"},
        {"ID":7, "DESC":"site admin"},
    ];

    $scope.emailValidator = function(email) {

        $scope.pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (!email) {
            return;
        }
        else if (!$scope.pattern.test(email)) {
            return "Enter valid email address.";
        }
        // else if($scope.usernamecheckserver(email)!= 1){
        // return 'Email already exists';
        // }

        return true;
    };

    $scope.usernamecheckserver = function(email) {

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/validateusername',
            data    : {username: email},  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            return data;
        });




    };

    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.register = function () {
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/signupfront',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                var myEl = angular.element( document.querySelector( '#emailgroup' ) );
                myEl.find('.errormsg').remove();
                myEl.append('<span class="errormsg has-error validationMessage">'+data.msg+'</span>');
            }else{
                $state.go('userlist');
                return
            }
        });
    }

});

voortal.controller('useredit', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.user_job_all = [
        {"ID":4, "DESC":"Creative"},
        {"ID":5, "DESC":"Agent"},
        {"ID":6, "DESC":"Brain"},
        {"ID":7, "DESC":"Site Admin"},
    ];

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/userdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.form = {
            uid: data.uid,
            fname: data.fname,
            lname: data.lname,
            biography : {
                is_private:data.about.is_private,
                value:data.about.value
            },
            skills: {
                is_private:data.skills.is_private,
                value:data.skills.value
            },
            education:{
                is_private:data.education.is_private,
                value:data.education.value
            },
            location: {
                is_private:data.location.is_private,
                value:data.location.value
            },
            user_job :{
                ID:data.roles
            }
        }
    });


    $scope.update = function () {
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/userupdate',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('userlist');
            return
        });
    }

});

voortal.controller('changepassword', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.userid=$stateParams.userId;

    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.passwordValidator1 = function(password1,password2) {

        if (!password1) {
            return;
        }
        else if (password1 != password2) {
            return "Password does not match";
        }

        return true;
    };

    $scope.form = {
        'uid':$scope.userid
    }

    $scope.changepass = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/adminchangepassword',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
           $state.go('userlist');
                return;

        });
    }


    $scope.cancel =function(){
        $state.go('userlist');
        return;
    }



});

voortal.controller('userdetails', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.userid=$stateParams.userId;

    $scope.role = "";

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/userdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userdet = data;
        if(data.roles == 4)
            $scope.role = "Creative";
        if(data.roles == 5)
            $scope.role = "Agent";
        if(data.roles == 6)
            $scope.role = "Brain";
        if(data.roles == 7)
            $scope.role = "Site Admin";
    });
});

voortal.controller('myaccount', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.userid = $cookieStore.get('userid');

    $scope.role = "";

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/userdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userdet = data;
        if(data.roles == 4)
            $scope.role = "Creative";
        if(data.roles == 5)
            $scope.role = "Agent";
        if(data.roles == 6)
            $scope.role = "Brain";
        if(data.roles == 7)
            $scope.role = "Site Admin";
    });
});

voortal.controller('changepassword1', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope) {
    $scope.userid= $cookieStore.get('userid');

    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.passwordValidator1 = function(password1,password2) {

        if (!password1) {
            return;
        }
        else if (password1 != password2) {
            return "Password does not match";
        }

        return true;
    };

    $scope.form = {
        'uid':$scope.userid
    }

    $scope.changepass = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/changepassword',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                var myEl = angular.element( document.querySelector( '#curpass' ) );
                myEl.find('.errormsg').remove();
                myEl.append('<span class="errormsg has-error validationMessage">'+data.msg+'</span>');
            }else{
                $state.go('myaccount');
                return
            }

        });
    }


    $scope.cancel =function(){
        $state.go('myaccount');
        return;
    }



});

voortal.controller('updateprofile', function($scope,$state,$cookieStore,$http,$stateParams,$rootScope,Upload) {
    $scope.user_job_all = [
        {"ID":4, "DESC":"Creative"},
        {"ID":5, "DESC":"Agent"},
        {"ID":6, "DESC":"Brain"},
        {"ID":7, "DESC":"Site Admin"},
    ];

    $scope.userid= $cookieStore.get('userid');

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/userdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.form = {
            uid: data.uid,
            fname: data.fname,
            lname: data.lname,
            biography : {
                is_private:data.about.is_private,
                value:data.about.value
            },
            skills: {
                is_private:data.skills.is_private,
                value:data.skills.value
            },
            education:{
                is_private:data.education.is_private,
                value:data.education.value
            },
            location: {
                is_private:data.location.is_private,
                value:data.location.value
            },
            user_job :{
                ID:data.roles
            }
        }
    });



    $scope.update = function () {
         $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/userupdate',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('myaccount');
            return
        });
    }

    $scope.$watch('userpic', function (files) {
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });

    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
        file.upload = Upload.upload({
            url: 'http://adminvoortal.hagencompaniesonline.com/changeprofilepicture' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'userid':$cookieStore.get('userid')},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            $('.progress').addClass('ng-hide');
            file.result = response.data;

            $rootScope.rootuserdet.picture = response.data;


        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }


});

voortal.controller('agentlist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.header = "Agent List";

    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/alluserlist',
        data    : $.param({role:5}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
    });
});


voortal.controller('creativelist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.header = "Creative List";
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/alluserlist',
        data    : $.param({role:4}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
    });
});


voortal.controller('brainlist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.header = "Brain List";
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/alluserlist',
        data    : $.param({role:6}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
    });
});



voortal.controller('createidea', function($scope,$state,$cookieStore,$http,$rootScope,$stateParams,Upload) {


    $scope.brandlogo = '';

    $scope.dynamic = 50;

    $scope.table = { companies: [],websites: [] };


   $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
        data    : $.param({'id':$rootScope.createIdeaId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $rootScope.createIdeaId = data[0].id;
        $scope.form = {
            name:data[0].name,
            concept_summery:data[0].concept_summery,
            why:data[0].why,
            service_for:data[0].service_for,
            industry:{'id':data[0].industry},
            customer_description:data[0].customer_description,
            companies:data[0].companies,
            websites:data[0].websites,
            potential_brands:data[0].potential_brands,
            user_id : $cookieStore.get('userid'),
            competetion : (data[0].competetion==0)?50:data[0].competetion
        };



        if(typeof (data[0].id) == 'undefined'){
            $scope.dynamic = 50;

            $scope.table.companies.push('');
            $scope.table.websites.push('');

        }else{
            $scope.dynamic = (data[0].competetion==0)?50:data[0].competetion;

            $scope.brandlogo = data[0].logo;

            if (data[0].companies != null && data[0].companies !== undefined && data[0].companies != '') {
                $scope.companies_arr = angular.fromJson(data[0].companies);
                $scope.websites_arr = angular.fromJson(data[0].websites);

                angular.forEach($scope.companies_arr, function(value, key){
                    $scope.table.companies.push(value);
                    $scope.table.websites.push($scope.websites_arr[key]);
                });

            }else{
                $scope.table.companies.push('');
                $scope.table.websites.push('');
            }
        }

//
    });

    /********Step 1 [start]**********/


    $scope.step_1_submit = function(){
        if(typeof ($rootScope.createIdeaId) == 'undefined'){
            $rootScope.stateIsLoading = true;
            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://adminvoortal.hagencompaniesonline.com/addidea',
                data    : $.param($scope.form),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                $rootScope.stateIsLoading = false;
                $rootScope.createIdeaId = data.id;
                $state.go('createidea2');
                return
            });
        }else{
            var indexes=[];
            var values=[];

            angular.forEach($scope.form, function(value, key){
                indexes.push(key);
                values.push(value);
            });

            $rootScope.stateIsLoading = true;
            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
                data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                $rootScope.stateIsLoading = false;
                $state.go('createidea2');
                return
            });
        }




    }
    /********Step 1 [end]**********/

    /********Step 2 [start]**********/
    $scope.step_2_submit = function(){
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);
            values.push(value);
        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createidea3');
            return
        });
    }

    $scope.back1 = function(){
        $state.go('createidea');
        return;
    }
    /********Step 2 [end]**********/

    /********Step 3 [start]**********/

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/industrylist',
        // data    : $.param({role:6}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.industrylist = data;
    });

    $scope.step_3_submit = function(){
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);

            if(key == 'industry'){
                values.push(value.id);
            }else{
                values.push(value);
            }

        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createidea4');
            return
        });
    }
    $scope.back2 = function(){
        $state.go('createidea2');
        return;
    }
    /********Step 3 [end]**********/

    /********Step 4 [start]**********/
    $scope.max = 100;




    $scope.c_dynamic = function(type){
        if(type == 1){
            $scope.dynamic = parseInt($scope.dynamic) - 1;
        }

        if(type == 2){
            $scope.dynamic = parseInt($scope.dynamic) + 1;
        }

        $scope.form = {
            competetion : $scope.dynamic
        }
    }

    $scope.step_4_submit = function(){
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);
            values.push(value);
        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createidea5');
            return
        });
    }
    $scope.back3 = function(){
        $state.go('createidea3');
        return;
    }
    /********Step 4 [end]**********/

    /********Step 5 [start]**********/



    $scope.addFormField = function() {
        $scope.table.companies.push('');
        $scope.table.websites.push('');
    }

    $scope.step_5_submit = function(){


        var indexes=[];
        var values=[];

        angular.forEach($scope.table, function(value, key){
            indexes.push(key);
            values.push(angular.toJson(value));
        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createidea6');
            return
        });

    }
    $scope.back4 = function(){
        $state.go('createidea4');
        return;
    }
    /********Step 5 [end]**********/

    /********Step 6 [start]**********/




    $scope.$watch('blogo', function (files) {
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                })(files[i]);
            }
        }
    });

    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    function upload(file) {
        $scope.errorMsg = null;
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
        file.upload = Upload.upload({
            url: 'http://adminvoortal.hagencompaniesonline.com/addidealogo' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            $('.progress').addClass('ng-hide');
            file.result = response.data;

            $scope.brandlogo = response.data;

        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }
    $scope.step_6_submit = function(){
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);
            values.push(value);
        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createideacomplete',{ideaId:$rootScope.createIdeaId});
            return
        });
    }
    $scope.back5 = function(){
        $state.go('createidea5');
        return;
    }
    /********Step 6 [end]**********/

});

voortal.controller('createideacomplete', function($scope,$state,$cookieStore,$http,$rootScope,$stateParams) {
    $scope.ideaId = $stateParams.ideaId;
    $scope.companies = [];
    $scope.websites = [];
    $scope.competitors = [];
    $scope.industryName = '';

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
         data    : $.param({'id':$scope.ideaId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaDetails = data[0];

        $scope.companies = angular.fromJson($scope.ideaDetails.companies);
        $scope.websites = angular.fromJson($scope.ideaDetails.websites);

        angular.forEach($scope.companies, function(value, key){
            $scope.competitors.push({'name':value,'website':$scope.websites[key]});
        });

        //console.log($scope.competitor);

    });

    $scope.publishidea = function(ideaId){
        var indexes=[];
        var values=[];

        indexes.push('status');
        values.push(1);

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':ideaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('idealist');
            return
        });
    }


});

voortal.controller('idealist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/idealist',
        // data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaList = data;
    });

    $scope.searchkey = '';

    $scope.search = function(item){

        if ( (item.name.indexOf($scope.searchkey) != -1) || (item.companies.indexOf($scope.searchkey) != -1) || (item.websites.indexOf($scope.searchkey) != -1) || (item.potential_brands.indexOf($scope.searchkey) != -1) || (item.industryname.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

});

voortal.controller('myideas', function($scope,$state,$cookieStore,$http,$rootScope) {
    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/myidealist',
        data    : $.param({'userid':$cookieStore.get('userid')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaList = data;
    });

    $scope.searchkey = '';

    $scope.search = function(item){

        if ( (item.name.indexOf($scope.searchkey) != -1) || (item.companies.indexOf($scope.searchkey) != -1) || (item.websites.indexOf($scope.searchkey) != -1) || (item.potential_brands.indexOf($scope.searchkey) != -1) || (item.industryname.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

});

voortal.controller('allideas', function($scope,$state,$cookieStore,$http,$rootScope,$uibModal) {
    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/fullidealist',
        //data    : $.param({'userid':$cookieStore.get('userid')}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaList = data;
    });

    $scope.searchkey = '';

    $scope.search = function(item){

        if ( (item.name.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

    $scope.changestatus = function(item){

        var idx = $scope.ideaList.indexOf(item);

        var indexes=[];
        var values=[];

        indexes.push('is_blocked');
        if($scope.ideaList[idx].is_blocked == 0){
            values.push(1);
            var lval = 1;
        }else{
            values.push(0);
            var lval = 0;
        }

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$scope.ideaList[idx].id,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.ideaList[idx].is_blocked = !$scope.ideaList[idx].is_blocked;
        });
    }

    $scope.remark = function(item,size){
        var idx = $scope.ideaList.indexOf(item);
        $scope.ideaid1 = $scope.ideaList[idx].id;

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'addremark.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            scope: $scope
        });
    }

});

voortal.controller('editidea', function($scope,$state,$cookieStore,$http,$rootScope,$stateParams) {
    $scope.ideaId = $stateParams.ideaId;

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
        data    : $.param({'id':$scope.ideaId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $rootScope.createIdeaId = data[0].id;
        $scope.form = {
            name:data[0].name,
            concept_summery:data[0].concept_summery,
            why:data[0].why,
            service_for:data[0].service_for,
            industry:{'id':data[0].industry},
            customer_description:data[0].customer_description,
            companies:data[0].companies,
            websites:data[0].websites,
            potential_brands:data[0].potential_brands,
        };
    });

    $scope.step_1_submit = function(){
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);
            values.push(value);
        });

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$rootScope.createIdeaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('createidea2');
            return
        });
    }




    /*$rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/industrylist',
        // data    : $.param({role:6}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.industrylist = data;
    });

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
        data    : $.param({'id':$scope.ideaId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.form = {
            name:data[0].name,
            concept_summery:data[0].concept_summery,
            why:data[0].why,
            service_for:data[0].service_for,
            industry:{'id':data[0].industry},
            customer_description:data[0].customer_description,
            companies:data[0].companies,
            websites:data[0].websites,
            potential_brands:data[0].potential_brands,
        };
    });

    $scope.updateIdea = function(){
        $rootScope.stateIsLoading = true;
        var indexes=[];
        var values=[];

        angular.forEach($scope.form, function(value, key){
            indexes.push(key);

            if(key == 'industry'){
                values.push(value.id);
            }else{
                values.push(value);
            }

        });
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/ideasstepupdate',
            data    : $.param({'id':$scope.ideaId,'index':indexes,'values':values}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('idealist');
            return
        });
    }*/
});


voortal.controller('ideadetails', function($scope,$state,$cookieStore,$http,$rootScope,$stateParams,$sce) {
    $scope.ideaId = $stateParams.ideaId;


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/ideadetail',
        data    : $.param({'id':$scope.ideaId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.ideaDetails = data[0];

        if(data[0].user.roles == 4)
            $scope.crole = "Creative";
        if(data[0].user.roles == 5)
            $scope.crole = "Agent";
        if(data[0].user.roles == 6)
            $scope.crole = "Brain";
        if(data[0].user.roles == 7)
            $scope.crole = "Site Admin";

        var comp_list = '<table width="100%">';

        if (data[0].companies != null && data[0].companies !== undefined && data[0].companies != '') {
            $scope.companies_arr = angular.fromJson(data[0].companies);
            $scope.websites_arr = angular.fromJson(data[0].websites);

            angular.forEach($scope.companies_arr, function(value, key){
                comp_list += '<tr class="topslidertext">';
                comp_list += '<td style="padding-bottom: 10px;">Name : '+value+'</td>';
                comp_list += '<td style="padding-bottom: 10px;">Website : '+$scope.websites_arr[key]+'</td>';
                comp_list += '</tr>';

            });


        }

        comp_list += '</table>';






        slides.push({
            html: $sce.trustAsHtml('<div class="topslidertext">\
            <h4>Idea Details</h4>\
            <h5>Created By : '+data[0]['user']['fname']+' '+data[0]['user']['lname']+' </h5>\
        </div>\
        <div class="bodyslidertext">\
            <h6>Summary</h6>\
            <p>'+data[0]['concept_summery']+'</p>\
        </div>')
        });

        slides.push({
            html: $sce.trustAsHtml('<div class="topslidertext">\
            <h4>Service For</h4>\
            <h5>'+data[0]['industryname']+'</h5>\
        </div>\
        <div class="bodyslidertext">\
            <h6>Details</h6>\
            <p>'+data[0]['customer_description']+'</p>\
        </div>')
        });

        slides.push({
            html: $sce.trustAsHtml('<div class="topslidertext">\
            <h4>Competition Level</h4>\
        </div>\
        <div class="bodyslidertext">\
            <div class="progress4">\
                <div class="progress-striped progress ng-isolate-scope" value="dynamic" max="max">\
            <div ng-transclude="" style="min-width: 0px; width: '+data[0]['competetion']+'%;" aria-labelledby="progressbar" aria-valuetext="'+data[0]['competetion']+'%" ng-style="{width: (percent &lt; 100 ? percent : 100) + \'%\'}" aria-valuemax="100" aria-valuemin="0" aria-valuenow="'+data[0]['competetion']+'" role="progressbar" ng-class="type &amp;&amp; \'progress-bar-\' + type" class="progress-bar"><span style="color:white; white-space:nowrap;" class="ng-binding ng-scope">'+data[0]['competetion']+'%</span></div>\
        </div>\
        </div>\
        </div>')
        });

        slides.push({
            html: $sce.trustAsHtml('<div class="topslidertext">\
            <h4>Competitors</h4>\
        </div>\
        <div class="bodyslidertext">\
            '+comp_list+'</div>')
        });

        slides.push({
            html: $sce.trustAsHtml('<div class="topslidertext">\
            <h4>Potential Brand Name</h4>\
        </div>\
        <div class="bodyslidertext">\
            <p>'+data[0]['potential_brands']+'</p>\
        </div>')
        });

    });


});


voortal.controller('industrylist', function($scope,$state,$cookieStore,$http,$rootScope) {
    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/industrylist',
       // data    : $.param({role:6}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.industrylist = data;
    });

    $scope.industrydelete = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.industrylist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/industrydelete',
            data    : $.param({id: $scope.industrylist[idx].id}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.industrylist.splice(idx,1);
        });
    }

});

voortal.controller('addindustry', function($scope,$state,$cookieStore,$http,$rootScope) {
    $scope.addindustry = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/addindustry',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('industrylist');
            return
        });
    }
});


voortal.controller('editindustry', function($scope,$state,$cookieStore,$http,$rootScope,$stateParams) {
    $scope.industryId=$stateParams.industryId;

    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://adminvoortal.hagencompaniesonline.com/industrydetail',
        data    : $.param({id:$scope.industryId}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        $scope.form = {
            'id':data[0].id,
            'name':data[0].name,
            'status':data[0].status,
        };
    });

    $scope.addindustry = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://adminvoortal.hagencompaniesonline.com/industryupdate',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('industrylist');
            return
        });
    }
});