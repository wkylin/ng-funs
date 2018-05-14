import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

export const MyAnimation = trigger('myAnimation', [
  state('small', style({
    transform: 'scale(1)'
  })),
  state('large', style({
    transform: 'scale(1.2)'
  })),
  transition('small <=> large', animate('300ms ease-in', keyframes([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
    style({opacity: 1, transform: 'translateY(-75%)', offset: 1})
  ])))
]);
export const ListAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ]))
    ]), {optional: true}),
    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
        style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
      ]))
    ]), {optional: true})
  ])
]);
