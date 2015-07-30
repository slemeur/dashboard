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

import DeleteFactory from '../information-tab/delete-factory/delete-factory.directive';
import FactoryInformation from '../information-tab/factory-information/factory-information.directive';
import FactoryRoutingCtrl from '../information-tab/factory-routing/factory-routing.controller';
import FactoryRouting from '../information-tab/factory-routing/factory-routing.directive';


class InformationTabConfig {

  constructor(register) {
    register.directive('cdvyDeleteFactory', DeleteFactory);

    register.directive('cdvyFactoryInformation', FactoryInformation);

    register.controller('FactoryRoutingCtrl', FactoryRoutingCtrl);
    register.directive('cdvyFactoryRouting', FactoryRouting);

  }
}

export default InformationTabConfig;
