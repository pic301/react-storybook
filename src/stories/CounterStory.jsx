import React from 'react';
import { storiesOf } from '@storybook/react'
import Counter from '../components/Counter'


storiesOf('Counter', module).add('기본설정', ()=> <Counter/>)