// 'use strict';

console.log('Gitlo: Content start');

console.log('Gitlo: Content end');

$(function() {
  console.log("Gitlo: Page loaded");

  $(".list-card").each(function(i, el) {
    processListCard(el);
  });
});

function processListCard(el) {
  var $title = $(el).find('.list-card-title');
  var match  = $title.html().match(/\[(.*)\]/);
  var badge, shirt;

  if (!match) return;
  if (!match.length > 0) return;

  shirt = match[1];
  $title.html($title.html().replace(/\[(.*)\]/, '').replace(/\s+/, ' '));

  // badge = "<div title='' class='badge badge-shirt'><span class='badge-icon icon-sm'></span><strong class='badge-text'>"+shirt+"</strong></div>"
  badge = "<div title='' class='badge badge-shirt'><strong class='badge-text'>"+shirt+"</strong></div>"
  $(el).find('.badges').append(badge);
}
