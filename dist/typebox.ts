import { Type, Static } from "@sinclair/typebox";

export type oid = Static<typeof oid>;
export const oid = Type.String();

export type Id = Static<typeof Id>;
export const Id = Type.Object({
  id: oid,
});

export type InternalAlignmentType = Static<typeof InternalAlignmentType>;
export const InternalAlignmentType = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
  Type.Literal(2),
  Type.Literal(3),
  Type.Literal(4),
  Type.Literal(5),
  Type.Literal(6),
  Type.Literal(7),
  Type.Literal(8),
  Type.Literal(9),
  Type.Literal(10),
  Type.Literal(11),
  Type.Literal(12),
  Type.Literal(13),
  Type.Literal(14),
  Type.Literal(15),
  Type.Literal(16),
  Type.Literal(17),
]);

export type DebugMode = Static<typeof DebugMode>;
export const DebugMode = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
  Type.Literal(2),
]);

export type Constraint_Alignment = Static<typeof Constraint_Alignment>;
export const Constraint_Alignment = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
]);

export type SolveStatus = Static<typeof SolveStatus>;
export const SolveStatus = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
  Type.Literal(2),
  Type.Literal(3),
]);

export type Algorithm = Static<typeof Algorithm>;
export const Algorithm = Type.Union([
  Type.Literal(0),
  Type.Literal(1),
  Type.Literal(2),
]);

export type SketchGeometryProperty = Static<typeof SketchGeometryProperty>;
export const SketchGeometryProperty = Type.Union([
  Type.Literal("x"),
  Type.Literal("y"),
  Type.Literal("radius"),
  Type.Literal("start_angle"),
  Type.Literal("end_angle"),
  Type.Literal("radmin"),
]);

type ObjectParam = Static<typeof ObjectParam>;
const ObjectParam = Type.Object({
  o_id: oid,
  prop: SketchGeometryProperty,
});

export type Equal = Static<typeof Equal>;
export const Equal = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal"),
    param1: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    param2: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    internalalignment: Type.Optional(Constraint_Alignment),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Proportional = Static<typeof Proportional>;
export const Proportional = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("proportional"),
    param1: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    param2: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    ratio: Type.Number(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Difference = Static<typeof Difference>;
export const Difference = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("difference"),
    param1: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    param2: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    difference: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PDistance = Static<typeof P2PDistance>;
export const P2PDistance = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_distance"),
    p1_id: oid,
    p2_id: oid,
    distance: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PAngle_INCR_ANGLE = Static<typeof P2PAngle_INCR_ANGLE>;
export const P2PAngle_INCR_ANGLE = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_angle_incr_angle"),
    p1_id: oid,
    p2_id: oid,
    angle: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    incrAngle: Type.Number(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PAngle = Static<typeof P2PAngle>;
export const P2PAngle = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_angle"),
    p1_id: oid,
    p2_id: oid,
    angle: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2LDistance = Static<typeof P2LDistance>;
export const P2LDistance = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2l_distance"),
    p_id: oid,
    l_id: oid,
    distance: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnLine_PL = Static<typeof PointOnLine_PL>;
export const PointOnLine_PL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_line_pl"),
    p_id: oid,
    l_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnLine_PPP = Static<typeof PointOnLine_PPP>;
export const PointOnLine_PPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_line_ppp"),
    p_id: oid,
    lp1_id: oid,
    lp2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnPerpBisector_PL = Static<typeof PointOnPerpBisector_PL>;
export const PointOnPerpBisector_PL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_perp_bisector_pl"),
    p_id: oid,
    l_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnPerpBisector_PPP = Static<typeof PointOnPerpBisector_PPP>;
export const PointOnPerpBisector_PPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_perp_bisector_ppp"),
    p_id: oid,
    lp1_id: oid,
    lp2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Parallel = Static<typeof Parallel>;
export const Parallel = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("parallel"),
    l1_id: oid,
    l2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Perpendicular_LL = Static<typeof Perpendicular_LL>;
export const Perpendicular_LL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_ll"),
    l1_id: oid,
    l2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Perpendicular_PPPP = Static<typeof Perpendicular_PPPP>;
export const Perpendicular_PPPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_pppp"),
    l1p1_id: oid,
    l1p2_id: oid,
    l2p1_id: oid,
    l2p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type L2LAngle_LL = Static<typeof L2LAngle_LL>;
export const L2LAngle_LL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("l2l_angle_ll"),
    l1_id: oid,
    l2_id: oid,
    angle: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type L2LAngle_PPPP = Static<typeof L2LAngle_PPPP>;
export const L2LAngle_PPPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("l2l_angle_pppp"),
    l1p1_id: oid,
    l1p2_id: oid,
    l2p1_id: oid,
    l2p2_id: oid,
    angle: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type AngleViaPoint = Static<typeof AngleViaPoint>;
export const AngleViaPoint = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("angle_via_point"),
    crv1_id: oid,
    crv2_id: oid,
    p_id: oid,
    angle: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type MidpointOnLine_LL = Static<typeof MidpointOnLine_LL>;
export const MidpointOnLine_LL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("midpoint_on_line_ll"),
    l1_id: oid,
    l2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type MidpointOnLine_PPPP = Static<typeof MidpointOnLine_PPPP>;
export const MidpointOnLine_PPPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("midpoint_on_line_pppp"),
    l1p1_id: oid,
    l1p2_id: oid,
    l2p1_id: oid,
    l2p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type TangentCircumf = Static<typeof TangentCircumf>;
export const TangentCircumf = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_circumf"),
    p1_id: oid,
    p2_id: oid,
    rd1: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    rd2: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    internal: Type.Optional(Type.Boolean()),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type TangentAtBSplineKnot = Static<typeof TangentAtBSplineKnot>;
export const TangentAtBSplineKnot = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_at_bspline_knot"),
    b_id: oid,
    l_id: oid,
    knotindex: Type.Number(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PCoincident = Static<typeof P2PCoincident>;
export const P2PCoincident = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_coincident"),
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Horizontal_L = Static<typeof Horizontal_L>;
export const Horizontal_L = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("horizontal_l"),
    l_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Horizontal_PP = Static<typeof Horizontal_PP>;
export const Horizontal_PP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("horizontal_pp"),
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Vertical_L = Static<typeof Vertical_L>;
export const Vertical_L = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("vertical_l"),
    l_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Vertical_PP = Static<typeof Vertical_PP>;
export const Vertical_PP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("vertical_pp"),
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type CoordinateX = Static<typeof CoordinateX>;
export const CoordinateX = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("coordinate_x"),
    p_id: oid,
    x: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type CoordinateY = Static<typeof CoordinateY>;
export const CoordinateY = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("coordinate_y"),
    p_id: oid,
    y: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcRules = Static<typeof ArcRules>;
export const ArcRules = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_rules"),
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnCircle = Static<typeof PointOnCircle>;
export const PointOnCircle = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_circle"),
    p_id: oid,
    c_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnEllipse = Static<typeof PointOnEllipse>;
export const PointOnEllipse = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_ellipse"),
    p_id: oid,
    e_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnHyperbolicArc = Static<typeof PointOnHyperbolicArc>;
export const PointOnHyperbolicArc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_hyperbolic_arc"),
    p_id: oid,
    e_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnParabolicArc = Static<typeof PointOnParabolicArc>;
export const PointOnParabolicArc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_parabolic_arc"),
    p_id: oid,
    e_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnBSpline = Static<typeof PointOnBSpline>;
export const PointOnBSpline = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_bspline"),
    p_id: oid,
    b_id: oid,
    pointparam: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcOfEllipseRules = Static<typeof ArcOfEllipseRules>;
export const ArcOfEllipseRules = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_of_ellipse_rules"),
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type CurveValue = Static<typeof CurveValue>;
export const CurveValue = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("curve_value"),
    p_id: oid,
    a_id: oid,
    u: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcOfHyperbolaRules = Static<typeof ArcOfHyperbolaRules>;
export const ArcOfHyperbolaRules = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_of_hyperbola_rules"),
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcOfParabolaRules = Static<typeof ArcOfParabolaRules>;
export const ArcOfParabolaRules = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_of_parabola_rules"),
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PointOnArc = Static<typeof PointOnArc>;
export const PointOnArc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point_on_arc"),
    p_id: oid,
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PerpendicularLine2Arc = Static<typeof PerpendicularLine2Arc>;
export const PerpendicularLine2Arc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_line2arc"),
    p1_id: oid,
    p2_id: oid,
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PerpendicularArc2Line = Static<typeof PerpendicularArc2Line>;
export const PerpendicularArc2Line = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_arc2line"),
    a_id: oid,
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PerpendicularCircle2Arc = Static<typeof PerpendicularCircle2Arc>;
export const PerpendicularCircle2Arc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_circle2arc"),
    center_id: oid,
    radius: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PerpendicularArc2Circle = Static<typeof PerpendicularArc2Circle>;
export const PerpendicularArc2Circle = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_arc2circle"),
    a_id: oid,
    center_id: oid,
    radius: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type PerpendicularArc2Arc = Static<typeof PerpendicularArc2Arc>;
export const PerpendicularArc2Arc = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("perpendicular_arc2arc"),
    a1_id: oid,
    reverse1: Type.Boolean(),
    a2_id: oid,
    reverse2: Type.Boolean(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_LC = Static<typeof Tangent_LC>;
export const Tangent_LC = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_lc"),
    l_id: oid,
    c_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_LE = Static<typeof Tangent_LE>;
export const Tangent_LE = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_le"),
    l_id: oid,
    e_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_LA = Static<typeof Tangent_LA>;
export const Tangent_LA = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_la"),
    l_id: oid,
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_CC = Static<typeof Tangent_CC>;
export const Tangent_CC = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_cc"),
    c1_id: oid,
    c2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_AA = Static<typeof Tangent_AA>;
export const Tangent_AA = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_aa"),
    a1_id: oid,
    a2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Tangent_CA = Static<typeof Tangent_CA>;
export const Tangent_CA = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("tangent_ca"),
    c_id: oid,
    a_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type CircleRadius = Static<typeof CircleRadius>;
export const CircleRadius = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("circle_radius"),
    c_id: oid,
    radius: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcRadius = Static<typeof ArcRadius>;
export const ArcRadius = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_radius"),
    a_id: oid,
    radius: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type CircleDiameter = Static<typeof CircleDiameter>;
export const CircleDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("circle_diameter"),
    c_id: oid,
    diameter: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type ArcDiameter = Static<typeof ArcDiameter>;
export const ArcDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("arc_diameter"),
    a_id: oid,
    diameter: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualLength = Static<typeof EqualLength>;
export const EqualLength = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_length"),
    l1_id: oid,
    l2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualRadius_CC = Static<typeof EqualRadius_CC>;
export const EqualRadius_CC = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_radius_cc"),
    c1_id: oid,
    c2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualRadii_EE = Static<typeof EqualRadii_EE>;
export const EqualRadii_EE = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_radii_ee"),
    e1_id: oid,
    e2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualRadii_AHAH = Static<typeof EqualRadii_AHAH>;
export const EqualRadii_AHAH = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_radii_ahah"),
    a1_id: oid,
    a2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualRadius_CA = Static<typeof EqualRadius_CA>;
export const EqualRadius_CA = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_radius_ca"),
    c1_id: oid,
    a2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualRadius_AA = Static<typeof EqualRadius_AA>;
export const EqualRadius_AA = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_radius_aa"),
    a1_id: oid,
    a2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type EqualFocus = Static<typeof EqualFocus>;
export const EqualFocus = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("equal_focus"),
    a1_id: oid,
    a2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PSymmetric_PPL = Static<typeof P2PSymmetric_PPL>;
export const P2PSymmetric_PPL = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_symmetric_ppl"),
    p1_id: oid,
    p2_id: oid,
    l_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type P2PSymmetric_PPP = Static<typeof P2PSymmetric_PPP>;
export const P2PSymmetric_PPP = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("p2p_symmetric_ppp"),
    p1_id: oid,
    p2_id: oid,
    p_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type SnellsLaw = Static<typeof SnellsLaw>;
export const SnellsLaw = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("snells_law"),
    ray1_id: oid,
    ray2_id: oid,
    boundary_id: oid,
    p_id: oid,
    n1: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    n2: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    flipn1: Type.Boolean(),
    flipn2: Type.Boolean(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type C2CDistance = Static<typeof C2CDistance>;
export const C2CDistance = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("c2cdistance"),
    c1_id: oid,
    c2_id: oid,
    dist: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type C2LDistance = Static<typeof C2LDistance>;
export const C2LDistance = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("c2ldistance"),
    c_id: oid,
    l_id: oid,
    dist: Type.Union([ObjectParam, Type.Number(), Type.String()]),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentPoint2Ellipse = Static<
  typeof InternalAlignmentPoint2Ellipse
>;
export const InternalAlignmentPoint2Ellipse = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_point2ellipse"),
    e_id: oid,
    p1_id: oid,
    alignmentType: InternalAlignmentType,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentEllipseMajorDiameter = Static<
  typeof InternalAlignmentEllipseMajorDiameter
>;
export const InternalAlignmentEllipseMajorDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_ellipse_major_diameter"),
    e_id: oid,
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentEllipseMinorDiameter = Static<
  typeof InternalAlignmentEllipseMinorDiameter
>;
export const InternalAlignmentEllipseMinorDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_ellipse_minor_diameter"),
    e_id: oid,
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentEllipseFocus1 = Static<
  typeof InternalAlignmentEllipseFocus1
>;
export const InternalAlignmentEllipseFocus1 = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_ellipse_focus1"),
    e_id: oid,
    p1_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentEllipseFocus2 = Static<
  typeof InternalAlignmentEllipseFocus2
>;
export const InternalAlignmentEllipseFocus2 = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_ellipse_focus2"),
    e_id: oid,
    p1_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentPoint2Hyperbola = Static<
  typeof InternalAlignmentPoint2Hyperbola
>;
export const InternalAlignmentPoint2Hyperbola = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_point2hyperbola"),
    e_id: oid,
    p1_id: oid,
    alignmentType: InternalAlignmentType,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentHyperbolaMajorDiameter = Static<
  typeof InternalAlignmentHyperbolaMajorDiameter
>;
export const InternalAlignmentHyperbolaMajorDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_hyperbola_major_diameter"),
    e_id: oid,
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentHyperbolaMinorDiameter = Static<
  typeof InternalAlignmentHyperbolaMinorDiameter
>;
export const InternalAlignmentHyperbolaMinorDiameter = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_hyperbola_minor_diameter"),
    e_id: oid,
    p1_id: oid,
    p2_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentHyperbolaFocus = Static<
  typeof InternalAlignmentHyperbolaFocus
>;
export const InternalAlignmentHyperbolaFocus = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_hyperbola_focus"),
    e_id: oid,
    p1_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentParabolaFocus = Static<
  typeof InternalAlignmentParabolaFocus
>;
export const InternalAlignmentParabolaFocus = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_parabola_focus"),
    e_id: oid,
    p1_id: oid,
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentBSplineControlPoint = Static<
  typeof InternalAlignmentBSplineControlPoint
>;
export const InternalAlignmentBSplineControlPoint = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_bspline_control_point"),
    b_id: oid,
    c_id: oid,
    poleindex: Type.Number(),
    tag: Type.Optional(Type.Number()),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type InternalAlignmentKnotPoint = Static<
  typeof InternalAlignmentKnotPoint
>;
export const InternalAlignmentKnotPoint = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("internal_alignment_knot_point"),
    b_id: oid,
    p_id: oid,
    knotindex: Type.Number(),
    driving: Type.Optional(Type.Boolean()),
    temporary: Type.Optional(Type.Boolean()),
    scale: Type.Optional(Type.Number()),
  }),
]);

export type Constraint = Static<typeof Constraint>;
export const Constraint = Type.Union([
  Equal,
  Proportional,
  Difference,
  P2PDistance,
  P2PAngle_INCR_ANGLE,
  P2PAngle,
  P2LDistance,
  PointOnLine_PL,
  PointOnLine_PPP,
  PointOnPerpBisector_PL,
  PointOnPerpBisector_PPP,
  Parallel,
  Perpendicular_LL,
  Perpendicular_PPPP,
  L2LAngle_LL,
  L2LAngle_PPPP,
  AngleViaPoint,
  MidpointOnLine_LL,
  MidpointOnLine_PPPP,
  TangentCircumf,
  TangentAtBSplineKnot,
  P2PCoincident,
  Horizontal_L,
  Horizontal_PP,
  Vertical_L,
  Vertical_PP,
  CoordinateX,
  CoordinateY,
  ArcRules,
  PointOnCircle,
  PointOnEllipse,
  PointOnHyperbolicArc,
  PointOnParabolicArc,
  PointOnBSpline,
  ArcOfEllipseRules,
  CurveValue,
  ArcOfHyperbolaRules,
  ArcOfParabolaRules,
  PointOnArc,
  PerpendicularLine2Arc,
  PerpendicularArc2Line,
  PerpendicularCircle2Arc,
  PerpendicularArc2Circle,
  PerpendicularArc2Arc,
  Tangent_LC,
  Tangent_LE,
  Tangent_LA,
  Tangent_CC,
  Tangent_AA,
  Tangent_CA,
  CircleRadius,
  ArcRadius,
  CircleDiameter,
  ArcDiameter,
  EqualLength,
  EqualRadius_CC,
  EqualRadii_EE,
  EqualRadii_AHAH,
  EqualRadius_CA,
  EqualRadius_AA,
  EqualFocus,
  P2PSymmetric_PPL,
  P2PSymmetric_PPP,
  SnellsLaw,
  C2CDistance,
  C2LDistance,
  InternalAlignmentPoint2Ellipse,
  InternalAlignmentEllipseMajorDiameter,
  InternalAlignmentEllipseMinorDiameter,
  InternalAlignmentEllipseFocus1,
  InternalAlignmentEllipseFocus2,
  InternalAlignmentPoint2Hyperbola,
  InternalAlignmentHyperbolaMajorDiameter,
  InternalAlignmentHyperbolaMinorDiameter,
  InternalAlignmentHyperbolaFocus,
  InternalAlignmentParabolaFocus,
  InternalAlignmentBSplineControlPoint,
  InternalAlignmentKnotPoint,
]);

export type ConstraintParamType = Static<typeof ConstraintParamType>;
export const ConstraintParamType = Type.Union([
  Type.Index(Equal, Type.KeyOf(Equal)),
  Type.Index(Proportional, Type.KeyOf(Proportional)),
  Type.Index(Difference, Type.KeyOf(Difference)),
  Type.Index(P2PDistance, Type.KeyOf(P2PDistance)),
  Type.Index(P2PAngle_INCR_ANGLE, Type.KeyOf(P2PAngle_INCR_ANGLE)),
  Type.Index(P2PAngle, Type.KeyOf(P2PAngle)),
  Type.Index(P2LDistance, Type.KeyOf(P2LDistance)),
  Type.Index(PointOnLine_PL, Type.KeyOf(PointOnLine_PL)),
  Type.Index(PointOnLine_PPP, Type.KeyOf(PointOnLine_PPP)),
  Type.Index(PointOnPerpBisector_PL, Type.KeyOf(PointOnPerpBisector_PL)),
  Type.Index(PointOnPerpBisector_PPP, Type.KeyOf(PointOnPerpBisector_PPP)),
  Type.Index(Parallel, Type.KeyOf(Parallel)),
  Type.Index(Perpendicular_LL, Type.KeyOf(Perpendicular_LL)),
  Type.Index(Perpendicular_PPPP, Type.KeyOf(Perpendicular_PPPP)),
  Type.Index(L2LAngle_LL, Type.KeyOf(L2LAngle_LL)),
  Type.Index(L2LAngle_PPPP, Type.KeyOf(L2LAngle_PPPP)),
  Type.Index(AngleViaPoint, Type.KeyOf(AngleViaPoint)),
  Type.Index(MidpointOnLine_LL, Type.KeyOf(MidpointOnLine_LL)),
  Type.Index(MidpointOnLine_PPPP, Type.KeyOf(MidpointOnLine_PPPP)),
  Type.Index(TangentCircumf, Type.KeyOf(TangentCircumf)),
  Type.Index(TangentAtBSplineKnot, Type.KeyOf(TangentAtBSplineKnot)),
  Type.Index(P2PCoincident, Type.KeyOf(P2PCoincident)),
  Type.Index(Horizontal_L, Type.KeyOf(Horizontal_L)),
  Type.Index(Horizontal_PP, Type.KeyOf(Horizontal_PP)),
  Type.Index(Vertical_L, Type.KeyOf(Vertical_L)),
  Type.Index(Vertical_PP, Type.KeyOf(Vertical_PP)),
  Type.Index(CoordinateX, Type.KeyOf(CoordinateX)),
  Type.Index(CoordinateY, Type.KeyOf(CoordinateY)),
  Type.Index(ArcRules, Type.KeyOf(ArcRules)),
  Type.Index(PointOnCircle, Type.KeyOf(PointOnCircle)),
  Type.Index(PointOnEllipse, Type.KeyOf(PointOnEllipse)),
  Type.Index(PointOnHyperbolicArc, Type.KeyOf(PointOnHyperbolicArc)),
  Type.Index(PointOnParabolicArc, Type.KeyOf(PointOnParabolicArc)),
  Type.Index(PointOnBSpline, Type.KeyOf(PointOnBSpline)),
  Type.Index(ArcOfEllipseRules, Type.KeyOf(ArcOfEllipseRules)),
  Type.Index(CurveValue, Type.KeyOf(CurveValue)),
  Type.Index(ArcOfHyperbolaRules, Type.KeyOf(ArcOfHyperbolaRules)),
  Type.Index(ArcOfParabolaRules, Type.KeyOf(ArcOfParabolaRules)),
  Type.Index(PointOnArc, Type.KeyOf(PointOnArc)),
  Type.Index(PerpendicularLine2Arc, Type.KeyOf(PerpendicularLine2Arc)),
  Type.Index(PerpendicularArc2Line, Type.KeyOf(PerpendicularArc2Line)),
  Type.Index(PerpendicularCircle2Arc, Type.KeyOf(PerpendicularCircle2Arc)),
  Type.Index(PerpendicularArc2Circle, Type.KeyOf(PerpendicularArc2Circle)),
  Type.Index(PerpendicularArc2Arc, Type.KeyOf(PerpendicularArc2Arc)),
  Type.Index(Tangent_LC, Type.KeyOf(Tangent_LC)),
  Type.Index(Tangent_LE, Type.KeyOf(Tangent_LE)),
  Type.Index(Tangent_LA, Type.KeyOf(Tangent_LA)),
  Type.Index(Tangent_CC, Type.KeyOf(Tangent_CC)),
  Type.Index(Tangent_AA, Type.KeyOf(Tangent_AA)),
  Type.Index(Tangent_CA, Type.KeyOf(Tangent_CA)),
  Type.Index(CircleRadius, Type.KeyOf(CircleRadius)),
  Type.Index(ArcRadius, Type.KeyOf(ArcRadius)),
  Type.Index(CircleDiameter, Type.KeyOf(CircleDiameter)),
  Type.Index(ArcDiameter, Type.KeyOf(ArcDiameter)),
  Type.Index(EqualLength, Type.KeyOf(EqualLength)),
  Type.Index(EqualRadius_CC, Type.KeyOf(EqualRadius_CC)),
  Type.Index(EqualRadii_EE, Type.KeyOf(EqualRadii_EE)),
  Type.Index(EqualRadii_AHAH, Type.KeyOf(EqualRadii_AHAH)),
  Type.Index(EqualRadius_CA, Type.KeyOf(EqualRadius_CA)),
  Type.Index(EqualRadius_AA, Type.KeyOf(EqualRadius_AA)),
  Type.Index(EqualFocus, Type.KeyOf(EqualFocus)),
  Type.Index(P2PSymmetric_PPL, Type.KeyOf(P2PSymmetric_PPL)),
  Type.Index(P2PSymmetric_PPP, Type.KeyOf(P2PSymmetric_PPP)),
  Type.Index(SnellsLaw, Type.KeyOf(SnellsLaw)),
  Type.Index(C2CDistance, Type.KeyOf(C2CDistance)),
  Type.Index(C2LDistance, Type.KeyOf(C2LDistance)),
  Type.Index(
    InternalAlignmentPoint2Ellipse,
    Type.KeyOf(InternalAlignmentPoint2Ellipse),
  ),
  Type.Index(
    InternalAlignmentEllipseMajorDiameter,
    Type.KeyOf(InternalAlignmentEllipseMajorDiameter),
  ),
  Type.Index(
    InternalAlignmentEllipseMinorDiameter,
    Type.KeyOf(InternalAlignmentEllipseMinorDiameter),
  ),
  Type.Index(
    InternalAlignmentEllipseFocus1,
    Type.KeyOf(InternalAlignmentEllipseFocus1),
  ),
  Type.Index(
    InternalAlignmentEllipseFocus2,
    Type.KeyOf(InternalAlignmentEllipseFocus2),
  ),
  Type.Index(
    InternalAlignmentPoint2Hyperbola,
    Type.KeyOf(InternalAlignmentPoint2Hyperbola),
  ),
  Type.Index(
    InternalAlignmentHyperbolaMajorDiameter,
    Type.KeyOf(InternalAlignmentHyperbolaMajorDiameter),
  ),
  Type.Index(
    InternalAlignmentHyperbolaMinorDiameter,
    Type.KeyOf(InternalAlignmentHyperbolaMinorDiameter),
  ),
  Type.Index(
    InternalAlignmentHyperbolaFocus,
    Type.KeyOf(InternalAlignmentHyperbolaFocus),
  ),
  Type.Index(
    InternalAlignmentParabolaFocus,
    Type.KeyOf(InternalAlignmentParabolaFocus),
  ),
  Type.Index(
    InternalAlignmentBSplineControlPoint,
    Type.KeyOf(InternalAlignmentBSplineControlPoint),
  ),
  Type.Index(
    InternalAlignmentKnotPoint,
    Type.KeyOf(InternalAlignmentKnotPoint),
  ),
]);

type IArc = Static<typeof IArc>;
const IArc = Type.Object({
  start_id: oid,
  end_id: oid,
  start_angle: Type.Number(),
  end_angle: Type.Number(),
});

export type SketchPoint = Static<typeof SketchPoint>;
export const SketchPoint = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("point"),
    x: Type.Number(),
    y: Type.Number(),
    fixed: Type.Boolean(),
  }),
]);

export type SketchLine = Static<typeof SketchLine>;
export const SketchLine = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("line"),
    p1_id: oid,
    p2_id: oid,
  }),
]);

export type SketchCircle = Static<typeof SketchCircle>;
export const SketchCircle = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("circle"),
    c_id: oid,
    radius: Type.Number(),
  }),
]);

export type SketchArc = Static<typeof SketchArc>;
export const SketchArc = Type.Composite([
  Id,
  IArc,
  Type.Object({
    type: Type.Literal("arc"),
    c_id: oid,
    radius: Type.Number(),
  }),
]);

export type SketchEllipse = Static<typeof SketchEllipse>;
export const SketchEllipse = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("ellipse"),
    c_id: oid,
    focus1_id: oid,
    radmin: Type.Number(),
  }),
]);

export type SketchArcOfEllipse = Static<typeof SketchArcOfEllipse>;
export const SketchArcOfEllipse = Type.Composite([
  Id,
  IArc,
  Type.Object({
    type: Type.Literal("arc_of_ellipse"),
    c_id: oid,
    focus1_id: oid,
    radmin: Type.Number(),
  }),
]);

export type SketchParabola = Static<typeof SketchParabola>;
export const SketchParabola = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("parabola"),
    vertex_id: oid,
    focus1_id: oid,
  }),
]);

export type SketchArcOfParabola = Static<typeof SketchArcOfParabola>;
export const SketchArcOfParabola = Type.Composite([
  Id,
  IArc,
  Type.Object({
    type: Type.Literal("arc_of_parabola"),
    vertex_id: oid,
    focus1_id: oid,
  }),
]);

export type SketchHyperbola = Static<typeof SketchHyperbola>;
export const SketchHyperbola = Type.Composite([
  Id,
  Type.Object({
    type: Type.Literal("hyperbola"),
    c_id: oid,
    focus1_id: oid,
    radmin: Type.Number(),
  }),
]);

export type SketchArcOfHyperbola = Static<typeof SketchArcOfHyperbola>;
export const SketchArcOfHyperbola = Type.Composite([
  Id,
  IArc,
  Type.Object({
    type: Type.Literal("arc_of_hyperbola"),
    c_id: oid,
    focus1_id: oid,
    radmin: Type.Number(),
  }),
]);

export type SketchGeometry = Static<typeof SketchGeometry>;
export const SketchGeometry = Type.Union([
  SketchPoint,
  SketchLine,
  SketchCircle,
  SketchArc,
  SketchEllipse,
  SketchArcOfEllipse,
  SketchParabola,
  SketchArcOfParabola,
  SketchHyperbola,
  SketchArcOfHyperbola,
]);

export type SketchPrimitive = Static<typeof SketchPrimitive>;
export const SketchPrimitive = Type.Union([SketchGeometry, Constraint]);

export type SketchParam = Static<typeof SketchParam>;
export const SketchParam = Type.Object({
  type: Type.Literal("param"),
  name: Type.String(),
  value: Type.Number(),
});
