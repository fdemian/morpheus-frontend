import React from 'react';
import {
  afterUpload,
  getBase64 ,
  beforeUpload,
  handleChange
} from '../utils';

describe("<Profile /> utils", () => {

  /*
  it('beforeUpload()', () =>{
   const mockCallback = jest.fn();
   const beforeUploadFn = beforeUpload('image.png', mockCallback);

   expect(mockCallback.mock.calls.length).toBe(1);
   expect(mockCallback.mock.calls[0][0]).toBe('image.png');
 })*/


  it('afterUpload()', () =>{
   const mockCallback = jest.fn();
   const afterUploadFn = afterUpload('image.png', mockCallback);

   expect(mockCallback.mock.calls.length).toBe(1);
   expect(mockCallback.mock.calls[0][0]).toBe('image.png');
  })

  /*
  it('getBase64()', () =>{
   const mockCallback = jest.fn();
   const afterUploadFn = getBase64('image.png', mockCallback);

   expect(mockCallback.mock.calls.length).toBe(1);
   expect(mockCallback.mock.calls[0][0]).toBe('image.png');
 })*/



});
