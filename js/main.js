define([],function() {

    //配置
    require.config({

        baseUrl: './',

        paths: {
            advertAdd: 'js/advert/advert_add',
            advertList: 'js/advert/advert_List',
            courseAdd1: 'js/course/course_add_step1',
            courseAdd2: 'js/course/course_add_step2',
            courseAdd3: 'js/course/course_add_step3',
            courseAdd: 'js/course/course_add',
            courseCategoryAdd: 'js/course/course_category_add',
            courseCategory: 'js/course/course_category',
            courseList: 'js/course/course_list',
            courseTopic: 'js/course/course_topic',
            login: 'js/home/login',
            repass: 'js/home/repass',
            settings: 'js/home/settings',
            teacherAdd: 'js/teacher/teacher_add',
            teacherList: 'js/teacher/teacher_list',
            userProfile: 'js/user/user_profile',
            userList: 'js/user/user_list',

            //配置第三方js模块别名
            template:'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            bootstrap: 'lib/bootstrap/js/bootstrap',
        },
    });



    //根据页面加载对应的js模块
});