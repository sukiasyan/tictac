import {css} from 'styled-components';

export const media = {
    handled: (...args) => css`
     @media (max-width: 800px){
     ${ css(...args)}   
    }
    `
}