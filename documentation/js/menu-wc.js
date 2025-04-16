'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' :
                                            'id="xs-controllers-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' :
                                        'id="xs-injectables-links-module-AppModule-8c86c42ac2e0979965fad3c05675b890f7991254a50532aa4bfa3f78e62f4af0212bb254cd4f4ef5b503f9e6dd0e538132471913d3e13840d34c430c5de0e35a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' :
                                            'id="xs-controllers-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' :
                                        'id="xs-injectables-links-module-AuthModule-cbbebba6c1e5e019a533a8c71845917b583ea926475df1778cc4c733253d5466971baa7c5e88da75620d50ad4189cb798c03fd3915aafb9c89da81c58f169201"' }>
                                        <li class="link">
                                            <a href="injectables/AuthServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                            'id="xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                        'id="xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' :
                                            'id="xs-controllers-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' :
                                        'id="xs-injectables-links-module-UsersModule-c61b790c0bd5fd1f62e5d1f17467ecef43ceac5c1a5eb9a030b47ec3900f0604ba9029a5c66b7acb09312004553767c3d48c43349a5e150582ad7526be88b1b8"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});