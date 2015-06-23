'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('saloons.show', {
        url: '/:id',
        templateUrl: 'app/saloons/saloons.show/saloons.show.html',
        controller: 'SaloonsShowCtrl',
        controllerAs: 'saloon',
        resolve: {
          SaloonObj: function(){
              return {"is_claimed":true,"rating":4.5,"mobile_url":"http://m.yelp.com/biz/melody-lounge-los-angeles","rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":98,"name":"Melody Lounge","snippet_image_url":"http://s3-media4.fl.yelpcdn.com/photo/Iaglb8ta3qs2WGU_L-NBPg/ms.jpg","rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"http://www.yelp.com/biz/melody-lounge-los-angeles","reviews":[{"rating":5,"excerpt":"A co-worker brought me here for happy hour about a week ago and I've already been back twice. Great selection of craft beers (some I'd never heard of, all...","time_created":1428703834,"rating_image_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png","rating_image_small_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png","user":{"image_url":"http://s3-media4.fl.yelpcdn.com/photo/Iaglb8ta3qs2WGU_L-NBPg/ms.jpg","id":"6ubM5imQ8TjZfG7Jj8Tj7w","name":"Austin J."},"rating_image_large_url":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png","id":"SGVTBN6hylrO46whX9ljSw"}],"phone":"2136252823","snippet_text":"A co-worker brought me here for happy hour about a week ago and I've already been back twice. Great selection of craft beers (some I'd never heard of, all...","image_url":"http://s3-media1.fl.yelpcdn.com/bphoto/Te1sSmNRdYH_HYBBpxUQ5w/ms.jpg","categories":[["Lounges","lounges"]],"display_phone":"+1-213-625-2823","rating_img_url_large":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"melody-lounge-los-angeles","is_closed":false,"location":{"city":"Los Angeles","display_address":["939 N Hill St","Chinatown","Los Angeles, CA 90012"],"geo_accuracy":9.5,"neighborhoods":["Chinatown"],"postal_code":"90012","country_code":"US","address":["939 N Hill St"],"coordinate":{"latitude":34.0655981,"longitude":-118.2382151},"state_code":"CA"}};
          },
          Saloonies: [
            'User', '$stateParams', 'currentDate',
            function(User, $stateParams, currentDate){
              return User.getSaloonies({saloon_id: $stateParams.id, night: currentDate.get(), offset: 0}).$promise;
            }
          ]
        }
      });
  }]);