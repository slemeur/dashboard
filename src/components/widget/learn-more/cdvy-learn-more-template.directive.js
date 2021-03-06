/*
 * Copyright (c) 2015 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

import Register from '../../utils/register';

/**
 * @ngdoc directive
 * @name components.directive:cdvyLearnMoreTemplate
 * @restrict E
 * @function
 * @element
 *
 * @description
 * `<cdvy-learn-more>` defines a learn more item.
 *
 * @author Florent Benoit
 */
class CodenvyLearnMoreTemplate {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor ($compile, $mdUtil) {
    this.$compile= $compile;
    this.$mdUtil = $mdUtil;
    this.restrict='A';

   this.require = '^cdvyLearnMore';

    this.scope = {
      template:     '=cdvyLearnMoreTemplate',
      compileScope: '=cdvyScope'
    };
  }




  /**
   * Defines id of the controller and apply some initial settings
   */
  link(scope, element) {
    var compileScope = scope.compileScope;
    element.html(scope.template);
    this.$compile(element.contents())(compileScope);
  }
}


export default CodenvyLearnMoreTemplate;

Register.getInstance().directive('cdvyLearnMoreTemplate', CodenvyLearnMoreTemplate);
