import { IOrganizationResponse } from '../../services/organization/organization.types';

class OrganizationUtil {
  public static isPartOfOrganization(organizations: IOrganizationResponse[], organizationId: string) {
    const org = organizations.filter((org) => {
      return org.id === organizationId
    })[0];

    return !!org
  }
}

export default OrganizationUtil;