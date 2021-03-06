/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('Uint8Array', function() {
  it('checks equality', function() {
    const subject = new Uint8Array([0, 1, 2, 3]);
    const same = new Uint8Array([0, 1, 2, 3]);
    const different = new Uint8Array([4, 5, 6, 7]);

    expect(subject).toBe(subject);
    expect(subject).toEqual(subject);

    expect(subject).not.toBe(same);
    expect(subject).toEqual(same);

    expect(subject).not.toBe(different);
    expect(subject).not.toEqual(different);
  });
});
