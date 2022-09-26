import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

export const Scroller = ({children, ...props}) => (
  <FlatList
    ref={props.ref}
    showsVerticalScrollIndicator={false}
    data={[]}
    keyExtractor={() => 'key'}
    renderItem={null}
    style={props.style}
    ListHeaderComponent={<>{children}</>}
  />
);
