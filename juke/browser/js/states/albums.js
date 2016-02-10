juke.config(function ($stateProvider) {
    $stateProvider
    .state('albumList', {
        url: '/albums',
        templateUrl: '/templates/albums.html',
        controller: 'AlbumsCtrl'
    })
    .state('albumList.singleAlbum', {
        url: '/:id',
        templateUrl: '/templates/singleAlbum.html',
        controller: function ($scope, $stateParams, AlbumFactory) {
            AlbumFactory.fetchById($stateParams)
            .then(album => { $scope.album = album; });
        }
    });

});