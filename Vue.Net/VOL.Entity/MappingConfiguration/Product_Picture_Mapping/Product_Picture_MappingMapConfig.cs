using VOL.Entity.MappingConfiguration;
using VOL.Entity.DomainModels;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VOL.Entity.MappingConfiguration
{
    public class Product_Picture_MappingMapConfig : EntityMappingConfiguration<Product_Picture_Mapping>
    {
        public override void Map(EntityTypeBuilder<Product_Picture_Mapping>
        builderTable)
        {
          //b.Property(x => x.StorageName).HasMaxLength(45);
        }
     }
}

