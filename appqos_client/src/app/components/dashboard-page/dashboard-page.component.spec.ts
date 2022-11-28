/*BSD LICENSE

Copyright(c) 2022 Intel Corporation. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in
    the documentation and/or other materials provided with the
    distribution.
  * Neither the name of Intel Corporation nor the names of its
    contributors may be used to endorse or promote products derived
    from this software without specific prior written permission.
    
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/

import { Router } from '@angular/router';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardPageComponent } from './dashboard-page.component';

describe('Given DashboardPageComponent', () => {
  beforeEach(() =>
    MockBuilder(DashboardPageComponent).mock(SharedModule).mock(Router)
  );

  MockInstance.scope('case');

  describe('when initialized', () => {
    it('should render SystemCapsComponent', () => {
      MockRender(DashboardPageComponent);

      const expectValue = ngMocks.find('app-system-caps');

      expect(expectValue).toBeTruthy();
    });
  });

  describe('when OVERVIEW button clicked', () => {
    it('should display Overview content', () => {
      const fixture = MockRender(DashboardPageComponent);

      const toolbar = ngMocks.find('app-toolbar');

      toolbar.triggerEventHandler('switcher', true);

      fixture.detectChanges();

      const overview = ngMocks.find('app-overview');

      expect(overview).toBeTruthy();
    });

    it('should display NOT RAP Config content', () => {
      const fixture = MockRender(DashboardPageComponent);

      const toolbar = ngMocks.find('app-toolbar');

      toolbar.triggerEventHandler('switcher', true);

      fixture.detectChanges();

      const rapConfig = ngMocks.find('app-rap-config', null);

      expect(rapConfig).toBeNull();
    });
  });

  describe('when RAP CONFIG button clicked', () => {
    it('should display RAP Config content', () => {
      const fixture = MockRender(DashboardPageComponent);

      const toolbar = ngMocks.find('app-toolbar');

      toolbar.triggerEventHandler('switcher', false);

      fixture.detectChanges();

      const rapConfig = ngMocks.find('app-rap-config');

      expect(rapConfig).toBeTruthy();
    });

    it('should NOT display Overview content', () => {
      const fixture = MockRender(DashboardPageComponent);

      const toolbar = ngMocks.find('app-toolbar');

      toolbar.triggerEventHandler('switcher', false);

      fixture.detectChanges();

      const overview = ngMocks.find('app-overview', null);

      expect(overview).toBeNull();
    });
  });
});