/*
 *接口编写处...
*如果接口需要做Action的权限验证，请在Action上使用属性
*如: [ApiActionPermission("SellOrder",Enums.ActionPermissionOptions.Search)]
 */
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using VOL.Core.Filters;

namespace VOL.Order.Controllers
{
    public partial class SellOrderController
    {
        [HttpPost]
        [ApiActionPermission("SellOrder", Core.Enums.ActionPermissionOptions.Search)]
        [Route("getServiceDate")]
        public IActionResult GetServiceDate()
        {
            return Content(Service.GetServiceDate());
        }

        [HttpPost]
        [Authorize]
        //[AllowAnonymous]
        [Route("getOrders")]
        public async Task<IActionResult> GetOrderList(bool hasRefund, int status)
        {
            return Json(await Service.GetOrderList(hasRefund, status));
        }
    }
}
