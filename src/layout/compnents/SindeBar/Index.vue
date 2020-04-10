<template>

        <div :class="{'has-logo':showLogo}">
        <logo v-if="showLogo" :collapse="isCollapse"/>

        <el-scrollbar wrap-class="scrollbar-wrapper">

          <!--  default-active：默认选中菜单
                collapse：是否折叠
          -->

            <el-menu

                    :default-active="activeMenu"
                    :collapse="isCollapse"
                    :background-color="variables.menuBg"
                    :text-color="variables.menuText"
                    :unique-opened="true"
                    :active-text-color="variables.menuActiveText"
                    :collapse-transition="false"
                    mode="vertical"
                    style="height: 450px"
           >
                <SidebarItem v-for="(route,index) in permission_routes" :key="index" :item="route"
                                                                   :base-path="route.path"/>
            </el-menu>
        </el-scrollbar>


    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    import Logo from './Logo'
    import SidebarItem from './SidebarItem'
    import variables from '../../../assets/styles/variables.scss'
    import {constantRoutes} from '../../../router/index'

    export default {
        components: {SidebarItem, Logo},
        data() {
            return {
                permission_routes: []
            }
        },
        created() {
            this.breakRoutes(constantRoutes);
        },
        computed: {

            ...mapGetters([
                // 'permission_routes',
                'sidebar'
            ]),

            //默认激活的菜单
            activeMenu() {
                const route = this.$route
                const {meta, path} = route
                // if set path, the sidebar will highlight the path you set
                if (meta.activeMenu) {
                    return meta.activeMenu
                }
                return path
            },
            showLogo() {

                return this.$store.state.settings.sidebarLogo
            },
            variables() {
                return variables
            },
            isCollapse() {
                return !this.sidebar.opened
            }
        }, methods: {

            breakRoutes(arr) {
                const routegroup = [];
                const group = [];

                pushRoutes(arr)

                function pushRoutes(arr) {
                    for (var i = 0; i < arr.length; i++) {
                        routegroup.push({
                            path: arr[i].path,
                            name: arr[i].name,
                            component: arr[i].component,
                            title: arr[i].title,
                            meta: arr[i].meta,
                            parentId: arr[i].parentId,
                            children: arr[i].children,
                        });
                    }
                }

                this.permission_routes = routegroup;
                /*                const target = {};
                                this.permission_routes.forEach(a => {
                                    const source = JSON.parse(`{"${a.path}":"${a.component}":"${a.parentId}"}`);//利用JSON.parse将对象格式直接造出来
                                    Object.assign(target, source);
                                })*/

                console.log(this.permission_routes)
            },

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

        }


    }
</script>
